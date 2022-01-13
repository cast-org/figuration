$(function() {
    'use strict';

    // Global timer for tests using setTimeout
    var timer = null;

    // =====
    // Test Widget
    var CFW_Widget_TestDismiss = function(element) {
        this.$element = $(element);
        this.eventProperties = {
            relatedTarget: element
        };
    };

    CFW_Widget_TestDismiss.prototype = {
        hide : function() {
            this.$element.CFW_trigger('hide.cfw.testDismiss', this.eventProperties);
        },
        custom : function() {
            this.$element.CFW_trigger('custom.cfw.testDismiss', this.eventProperties);
        }
    };

    var Plugin = function(option) {
        var args = [].splice.call(arguments, 1);
        return this.each(function() {
            var $this = $(this);
            var data = $this.data('cfw._testDismiss');
            var options = typeof option === 'object' && option;

            if (!data) {
                $this.data('cfw._testDismiss', data = new CFW_Widget_TestDismiss(this, options));
            }
            if (typeof option === 'string') {
                data[option].apply(data, args);
            }
        });
    };

    $.fn.CFW_TestDismiss = Plugin;
    $.fn.CFW_TestDismiss.Constructor = CFW_Widget_TestDismiss;
    // =====

    QUnit.module('util:General', {
        beforeEach: function() {
            $(window).scrollTop(0);
        },
        afterEach: function() {
            $('#qunit-fixture').empty();
            $(document).off('.cfw.testDismiss');
        }
    });

    QUnit.test('CFW_getSelectorFromElement should return the correct element', function(assert) {
        assert.expect(2);

        var $el = $('<div data-cfw-test-target="body"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el.CFW_getSelectorFromElement('test'), 'body');

        // not found element
        var $el2 = $('<div data-cfw-test-target="#fakeDiv"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el2.CFW_getSelectorFromElement('test'), null);
    });

    QUnit.test('CFW_getSelectorFromElement should return null when there is a bad selector', function(assert) {
        assert.expect(2);

        var $el = $('<div data-test-target="#1"></div>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el.CFW_getSelectorFromElement('test'), null);

        var $el2 = $('<a href="/posts"></a>').appendTo($('#qunit-fixture'));
        assert.strictEqual($el2.CFW_getSelectorFromElement('test'), null);
    });

    QUnit.test('CFW_transitionCssDuration should accept transition durations in milliseconds', function(assert) {
        assert.expect(1);
        var $div = $('<div style="transition: all 300ms ease-out;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 300);
    });

    QUnit.test('CFW_transitionCssDuration should accept transition durations in seconds', function(assert) {
        assert.expect(1);
        var $div = $('<div style="transition: all .4s ease-out;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 400);
    });

    QUnit.test('CFW_transitionCssDuration should get the longest transition duration if multiple transition durations are defined', function(assert) {
        assert.expect(1);
        var $div = $('<div style="transition: transform .1s ease-out, opacity .3s;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 300);
    });

    QUnit.test('CFW_transitionCssDuration should get the longest transition duration if multiple transition elements are defined', function(assert) {
        assert.expect(1);
        var $div0 = $('<div style="transition: transform .1s ease-out, opacity .2s"></div>').appendTo($('#qunit-fixture'));
        var $div1 = $('<div style="transition: transform .1s ease-out, opacity .3s;"></div>').appendTo($('#qunit-fixture'));
        var $divs = $div0.add($div1);
        assert.strictEqual($().CFW_transitionDuration($divs), 300);
    });

    QUnit.test('CFW_transitionCssDuration should return 0 if transition duration is not defined', function(assert) {
        assert.expect(1);
        var $div = $('<div></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div), 0);
    });

    QUnit.test('CFW_transitionCssDuration should return 0 if element is not found in DOM', function(assert) {
        assert.expect(1);
        var $div = $('#fake-id');

        assert.strictEqual($().CFW_transitionDuration($div), 0);
    });

    QUnit.test('CFW_transitionCssDuration should get additive value transition duration and transition delay', function(assert) {
        assert.expect(2);
        var $div0 = $('<div style="transition: transform .1s 200ms ease-out, opacity .2s"></div>').appendTo($('#qunit-fixture'));
        var $div1 = $('<div style="transition: transform .15s 300ms ease-out, opacity .3s;"></div>').appendTo($('#qunit-fixture'));

        assert.strictEqual($().CFW_transitionDuration($div0), 300);
        assert.strictEqual($().CFW_transitionDuration($div1), 450);
    });

    QUnit.test('CFW_findShadowRoot should find the shadow DOM root', function(assert) {
        // Only for newer browsers
        if (!document.documentElement.attachShadow) {
            assert.expect(0);
            return;
        }

        assert.expect(2);
        var $div = $('<div id="test"></div>').appendTo($('#qunit-fixture'));
        var shadowRoot = $div[0].attachShadow({
            mode: 'open'
        });

        assert.equal(shadowRoot, $().CFW_findShadowRoot(shadowRoot));
        shadowRoot.innerHTML = '<button>Shadow Button</button>';
        assert.equal(shadowRoot, $().CFW_findShadowRoot(shadowRoot.firstChild));
    });

    QUnit.test('CFW_findShadowRoot should return null when attachShadow is not available', function(assert) {
        assert.expect(1);

        var $div = $('<div id="test"></div>').appendTo($('#qunit-fixture'));
        if (!document.documentElement.attachShadow) {
            assert.equal($().CFW_findShadowRoot($div[0]), null);
        } else {
            assert.equal($().CFW_findShadowRoot($div[0]), null);
        }
    });

    QUnit.test('CFW_isDisabled should return false if the element is not defined', function(assert) {
        assert.expect(3);
        assert.strictEqual($.CFW_isDisabled(null), true);
        assert.strictEqual($.CFW_isDisabled(undefined), true); // eslint-disable-line no-undefined
        assert.strictEqual($.CFW_isDisabled(), true);
    });

    QUnit.test('CFW_isDisabled should return false if the element is not disabled', function(assert) {
        assert.expect(6);
        $('<fieldset id="fieldset">' +
            '<button id="button"></button>' +
            '<input id="input" type="text">' +
            '<select id="select"><option>one</option></select>' +
            '<textarea id="textarea"></textarea>' +
            '</fieldset>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#fieldset')), false);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#button')), false);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#input')), false);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#select')), false);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#textarea')), false);
        assert.strictEqual($.CFW_isDisabled($('#input')), false);
    });

    QUnit.test('CFW_isDisabled should return true if the element has disabled attribute', function(assert) {
        assert.expect(4);
        $('<button id="test0" disabled="disabled"></button>' +
            '<button id="test1" type="button" disabled="true"></button>' +
            '<button id="test2" type="button" disabled></button>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test0')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test1')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test2')), true);
        assert.strictEqual($.CFW_isDisabled($('#test0')), true);
    });

    QUnit.test('CFW_isDisabled should return true if the element has disabled="false"', function(assert) {
        assert.expect(1);
        $('<button id="test0" type="button" disabled="false"></button>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test0')), true);
    });

    QUnit.test('CFW_isDisabled should return true if the element has class "disabled', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#" class="disabled">test</a>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#test0')), true);
        assert.strictEqual($.CFW_isDisabled($('#test0')), true);
    });

    QUnit.test('CFW_isDisabled should return true for form controls within a disabled fieldset', function(assert) {
        assert.expect(5);
        $('<fieldset id="fieldset" disabled>' +
            '<button id="button"></button>' +
            '<input id="input" type="text">' +
            '<select id="select"><option>one</option></select>' +
            '<textarea id="textarea"></textarea>' +
            '</fieldset>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual($.CFW_isDisabled(document.querySelector('#fieldset')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#button')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#input')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#select')), true);
        assert.strictEqual($.CFW_isDisabled(document.querySelector('#textarea')), true);
    });

    QUnit.test('CFW_isVisible should return false if the element is not defined', function(assert) {
        assert.expect(3);
        assert.strictEqual($.CFW_isVisible(null), false);
        assert.strictEqual($.CFW_isVisible(undefined), false); // eslint-disable-line no-undefined
        assert.strictEqual($.CFW_isVisible(), false);
    });

    QUnit.test('CFW_isVisible should return false if the element is not a DOM element', function(assert) {
        assert.expect(1);
        assert.strictEqual($.CFW_isVisible({}), false);
    });

    QUnit.test('CFW_isVisible should return false if the element is not visible with `display: none;`', function(assert) {
        assert.expect(2);
        $('<div id="foo" style="display: none;"></div>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), false);
        assert.strictEqual($.CFW_isVisible($el), false);
    });

    QUnit.test('CFW_isVisible should return false if the element is not visible with `visibility: hidden;`', function(assert) {
        assert.expect(2);
        $('<div id="foo" style="visibility: hidden;"></div>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), false);
        assert.strictEqual($.CFW_isVisible($el), false);
    });

    QUnit.test('CFW_isVisible should return false if ancestor element is not visible with `display: none;`', function(assert) {
        assert.expect(2);
        $('<div style="display: none;"><div><div id="foo"></div></div></div>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), false);
        assert.strictEqual($.CFW_isVisible($el), false);
    });

    QUnit.test('CFW_isVisible should return false if ancestor element is not visible with `visibility: hidden;`', function(assert) {
        assert.expect(2);
        $('<div style="visibility: hidden;"><div><div id="foo"></div></div></div>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), false);
        assert.strictEqual($.CFW_isVisible($el), false);
    });

    QUnit.test('CFW_isVisible should return true if ancestor element is not visible with `visibility: hidden;`, but is reverted', function(assert) {
        assert.expect(2);
        $('<div style="visibility: hidden;"><div style="visibility: visible;"><div id="foo"></div></div></div>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), true);
        assert.strictEqual($.CFW_isVisible($el), true);
    });

    QUnit.test('CFW_isVisible should return true element is visible', function(assert) {
        assert.expect(2);
        $('<div id="foo"</div>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), true);
        assert.strictEqual($.CFW_isVisible($el), true);
    });

    QUnit.test('CFW_isVisible should return false element is hidden, but not via display or visibility rules', function(assert) {
        assert.expect(2);
        $('<details><div id="foo"</div></details>').appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');
        var $el = $('#foo');

        assert.strictEqual($.CFW_isVisible(el), false);
        assert.strictEqual($.CFW_isVisible($el), false);
    });

    QUnit.test('CFW_isFocusable should return true for elements with non-negative tabindex', function(assert) {
        assert.expect(4);
        $('<div tabindex>content</div>' +
            '<div tabindex="0">content</div>' +
            '<div tabindex="10">content</div>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');

        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('[tabindex]')), true);
        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('[tabindex="0"]')), true);
        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('[tabindex="10"]')), true);
        assert.strictEqual($.CFW_isFocusable($(fixtureEl).find('[tabindex="0"]')), true);
    });

    QUnit.test('CFW_isFocusable should return false for elements with negative or non-numeric tabindex', function(assert) {
        assert.expect(3);
        $('<div tabindex="false">content</div>' +
            '<div tabindex="-1">content</div>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');

        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('[tabindex="false"]')), false);
        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('[tabindex="-1"]')), false);
        assert.strictEqual($.CFW_isFocusable($(fixtureEl).find('[tabindex="-1"]')), false);
    });

    QUnit.test('CFW_isFocusable should return false for disabled elements', function(assert) {
        assert.expect(3);
        $('<button id="foo" disabled>content</button>' +
            '<button id="bar" disabled="true">content</button>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');

        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('#foo')), false);
        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('#bar')), false);
        assert.strictEqual($.CFW_isFocusable($(fixtureEl).find('#foo')), false);
    });

    QUnit.test('CFW_isFocusable should return false for invisible elements', function(assert) {
        assert.expect(3);
        $('<button id="foo" style="display: none;">content</button>' +
            '<button id="bar" style="visibility: hidden;">content</button>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');

        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('#foo')), false);
        assert.strictEqual($.CFW_isFocusable(fixtureEl.querySelector('#bar')), false);
        assert.strictEqual($.CFW_isFocusable($(fixtureEl).find('#foo')), false);
    });

    QUnit.test('CFW_getFocusable should return a specific allowed subset of elements by default', function(assert) {
        assert.expect(1);
        $('<div>content</div>' +
            '<span>content</span>' +
            '<a>content</a>' +
            '<button>content</button>' +
            '<input>' +
            '<textarea></textarea>' +
            '<select></select>' +
            '<details></details>' +
            '<span tabindex="0"></span>' +
            '<span tabindex="-1"></span>' +
            '<div contenteditable="true"></div>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');
        var expectedElements = [
            fixtureEl.querySelector('a'),
            fixtureEl.querySelector('button'),
            fixtureEl.querySelector('input'),
            fixtureEl.querySelector('textarea'),
            fixtureEl.querySelector('select'),
            fixtureEl.querySelector('details'),
            fixtureEl.querySelector('[tabindex]:not([tabindex^="-"])'),
            fixtureEl.querySelector('[contenteditable="true"]')
        ];

        assert.deepEqual($.CFW_getFocusable(fixtureEl), expectedElements);
    });


    QUnit.test('CFW_getFocusable should allow for custom selector', function(assert) {
        assert.expect(1);
        $('<div>content</div>' +
            '<span>content</span>' +
            '<a>content</a>' +
            '<button>content</button>' +
            '<input>' +
            '<textarea></textarea>' +
            '<select></select>' +
            '<details></details>' +
            '<span tabindex="0"></span>' +
            '<span tabindex="-1"></span>' +
            '<div contenteditable="true"></div>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');
        var expectedElements = [
            fixtureEl.querySelector('a'),
            fixtureEl.querySelector('button')
        ];
        var customAllowed = 'a, button';

        assert.deepEqual($.CFW_getFocusable(fixtureEl, customAllowed), expectedElements);
    });

    QUnit.test('CFW_isElement should detect if the parameter is an argument or not and return Boolean', function(assert) {
        assert.expect(3);
        $('<div id="foo" class="test"></div>' +
            '<div id="bar" class="test"></div>')
            .appendTo($('#qunit-fixture'));
        var el = document.querySelector('#foo');

        assert.strictEqual($.CFW_isElement(el), true);
        assert.strictEqual($.CFW_isElement({}), false);
        assert.strictEqual($.CFW_isElement(document.querySelectorAll('.test')), false);
    });

    QUnit.test('CFW_isElement should detect jQuery element', function(assert) {
        assert.expect(1);
        $('<div id="foo"></div>').appendTo($('#qunit-fixture'));
        var el = $('#foo');

        assert.strictEqual($.CFW_isElement(el), true);
    });

    QUnit.test('CFW_getElement should try to parse element', function(assert) {
        assert.expect(9);
        $('<div id="foo" class="test"></div>' +
            '<div id="bar" class="test"></div>')
            .appendTo($('#qunit-fixture'));
        var fixtureEl = document.querySelector('#qunit-fixture');
        var el = fixtureEl.querySelector('div');
        var $el = $('#foo');

        assert.strictEqual($.CFW_getElement(el), el);
        assert.strictEqual($.CFW_getElement('#foo'), el);
        assert.strictEqual($.CFW_getElement('#null'), null);
        assert.strictEqual($.CFW_getElement({}), null);
        assert.strictEqual($.CFW_getElement([]), null);
        assert.strictEqual($.CFW_getElement(), null);
        assert.strictEqual($.CFW_getElement(null), null);
        assert.strictEqual($.CFW_getElement(document.querySelectorAll('.test')), null);
        assert.strictEqual($.CFW_getElement($el), el);
    });

    QUnit.test('CFW_controlEnable should remove disabled class from link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#" class="disabled">test</a>')
            .appendTo($('#qunit-fixture'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), true);
        $.CFW_controlEnable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), false);
    });

    QUnit.test('CFW_controlEnable should remove tabindex attribute from link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#" class="disabled" tabindex="-1">test</a>')
            .appendTo($('#qunit-fixture'));

        assert.strictEqual(document.querySelector('#test0').getAttribute('tabindex'), '-1');
        $.CFW_controlEnable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').hasAttribute('tabindex'), false);
    });

    QUnit.test('CFW_controlEnable should remove disabled attribute from controls', function(assert) {
        assert.expect(7);
        $('<button id="test0" type="button" disabled>test</button>' +
           '<fieldset id="test1" disabled></fieldset>' +
           '<input id="test2" disabled>' +
           '<optgroup id="test3" disabled></optgroup>' +
           '<option id="test4" disabled></option>' +
           '<select id="test5" disabled></select>' +
           '<textarea id="test6" disabled></textarea>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlEnable(document.querySelector('#test0'));
        $.CFW_controlEnable(document.querySelector('#test1'));
        $.CFW_controlEnable(document.querySelector('#test2'));
        $.CFW_controlEnable(document.querySelector('#test3'));
        $.CFW_controlEnable(document.querySelector('#test4'));
        $.CFW_controlEnable(document.querySelector('#test5'));
        $.CFW_controlEnable(document.querySelector('#test6'));

        assert.strictEqual(document.querySelector('#test0').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test2').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test3').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test4').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test5').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test6').hasAttribute('disabled'), false);
    });

    QUnit.test('CFW_controlEnable should remove disabled class from label wrapping a control', function(assert) {
        assert.expect(2);
        $('<label id="test0" class="disabled">' +
            '<button id="test1" type="button" disabled>test</button>' +
            '</label>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlEnable(document.querySelector('#test1'));

        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), false);
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), false);
    });

    QUnit.test('CFW_controlDisable should add disabled class to link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#">test</a>')
            .appendTo($('#qunit-fixture'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), false);
        $.CFW_controlDisable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), true);
    });

    QUnit.test('CFW_controlDisable should add tabindex=-1 to link', function(assert) {
        assert.expect(2);
        $('<a id="test0" href="#">test</a>')
            .appendTo($('#qunit-fixture'));
        assert.strictEqual(document.querySelector('#test0').hasAttribute('tabindex'), false);
        $.CFW_controlDisable(document.querySelector('#test0'));
        assert.strictEqual(document.querySelector('#test0').getAttribute('tabindex'), '-1');
    });

    QUnit.test('CFW_controlDisable should add disabled attribute to controls', function(assert) {
        assert.expect(7);
        $('<button id="test0" type="button">test</button>' +
           '<fieldset id="test1"></fieldset>' +
           '<input id="test2">' +
           '<optgroup id="test3"></optgroup>' +
           '<option id="test4"></option>' +
           '<select id="test5"></select>' +
           '<textarea id="test6"></textarea>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlDisable(document.querySelector('#test0'));
        $.CFW_controlDisable(document.querySelector('#test1'));
        $.CFW_controlDisable(document.querySelector('#test2'));
        $.CFW_controlDisable(document.querySelector('#test3'));
        $.CFW_controlDisable(document.querySelector('#test4'));
        $.CFW_controlDisable(document.querySelector('#test5'));
        $.CFW_controlDisable(document.querySelector('#test6'));

        assert.strictEqual(document.querySelector('#test0').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test2').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test3').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test4').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test5').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test6').hasAttribute('disabled'), true);
    });

    QUnit.test('CFW_controlDisable should add disabled class to label wrapping a control', function(assert) {
        assert.expect(2);
        $('<label id="test0">' +
            '<button id="test1" type="button">test</button>' +
            '</label>')
            .appendTo($('#qunit-fixture'));

        $.CFW_controlDisable(document.querySelector('#test1'));

        assert.strictEqual(document.querySelector('#test1').hasAttribute('disabled'), true);
        assert.strictEqual(document.querySelector('#test0').classList.contains('disabled'), true);
    });

    QUnit.test('CFW_getNextActiveElement should return first element if activeElement not given or does not exist, if allowStartEnd is disabled', function(assert) {
        assert.expect(4);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, '', true, false, false), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', true, true, false), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, '', false, true, false), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', false, false, false), 'a');
    });

    QUnit.test('CFW_getNextActiveElement should return last element if activeElement not given or does not exist, if allowStartEnd is enabled and decrementing', function(assert) {
        assert.expect(4);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, '', false, true, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', false, false, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, '', false, false, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'z', false, true, true), 'd');
    });

    QUnit.test('CFW_getNextActiveElement should return next element, or last element if active last, if allowLoop is disabled', function(assert) {
        assert.expect(3);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'a', true, false), 'b');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'b', true, false), 'c');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'd', true, false), 'd');
    });

    QUnit.test('CFW_getNextActiveElement should return next element, or first element if active last, if allowLoop is enabled', function(assert) {
        assert.expect(2);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'c', true, true), 'd');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'd', true, true), 'a');
    });

    QUnit.test('CFW_getNextActiveElement should return previous element, or first element if active first, if allowLoop is disabled and decrementing', function(assert) {
        assert.expect(3);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'd', false, false), 'c');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'c', false, false), 'b');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'a', false, false), 'a');
    });

    QUnit.test('CFW_getNextActiveElement should return previous element, or last element if active first, if allowLoop is enabled and decrementing', function(assert) {
        assert.expect(2);
        var list = ['a', 'b', 'c', 'd'];

        assert.strictEqual($.CFW_getNextActiveElement(list, 'b', false, true), 'a');
        assert.strictEqual($.CFW_getNextActiveElement(list, 'a', false, true), 'd');
    });

    QUnit.test('CFW_enableDismissControl should call WidgetName(\'hide\') method when a click occurred on data-cfw-dismiss="WidgetName"', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<div id="item" class="testDismiss">' +
            '<button type="button" data-cfw-dismiss="testDismiss" data-bs-target="#item"></button>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var $dismiss = $('[data-cfw-dismiss="testDismiss"]');

        $(document)
            .on('hide.cfw.testDismiss', function() {
                assert.ok(true, 'hide method called');
                done();
            });

        $.CFW_enableDismissControl('testDismiss');
        $dismiss.trigger('click');
    });

    QUnit.test('CFW_enableDismissControl should call WidgetName(\'custom\') method when a click occurred on data-cfw-dismiss="WidgetName" and custom method set', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<div id="item" class="testDismiss">' +
            '<button type="button" data-cfw-dismiss="testDismiss" data-bs-target="#item"></button>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var $dismiss = $('[data-cfw-dismiss="testDismiss"]');

        $(document)
            .on('custom.cfw.testDismiss', function() {
                assert.ok(true, 'custom method called');
                done();
            });

        $.CFW_enableDismissControl('testDismiss', 'custom');
        $dismiss.trigger('click');
    });

    QUnit.test('CFW_enableDismissControl should execute on closest `.pluginName` if target is not defined', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<div id="item" class="testDismiss">' +
            '<button type="button" data-cfw-dismiss="testDismiss"></button>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var $dismiss = $('[data-cfw-dismiss="testDismiss"]');

        $(document)
            .on('hide.cfw.testDismiss', function(e) {
                clearTimeout(timer);
                assert.strictEqual(e.target, document.querySelector('.testDismiss'), 'dismiss called on `.pluginName`');
                done();
            });

        $.CFW_enableDismissControl('testDismiss');
        $dismiss.trigger('click');
        clearTimeout(timer);
        timer = setTimeout(function() {
            assert.ok(false, 'dismiss was not called');
            done();
        }, 75);
    });

    QUnit.test('CFW_enableDismissControl should not execute if button control is disabled', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<div id="item" class="testDismiss">' +
            '<button type="button" data-cfw-dismiss="testDismiss" data-bs-target="#item" disabled></button>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var $dismiss = $('[data-cfw-dismiss="testDismiss"]');

        $(document)
            .on('hide.cfw.testDismiss', function() {
                clearTimeout(timer);
                assert.ok(false, 'dismiss was called');
                done();
            });

        $.CFW_enableDismissControl('testDismiss');
        $dismiss.trigger('click');
        clearTimeout(timer);
        timer = setTimeout(function() {
            assert.ok(true, 'dismiss was not called');
            done();
        }, 75);
    });

    QUnit.test('CFW_enableDismissControl should not execute if link has `.disabled` class', function(assert) {
        assert.expect(1);
        var done = assert.async();
        $('<div id="item" class="testDismiss">' +
            '<a role="button" data-cfw-dismiss="testDismiss" data-bs-target="#item" class="disabled"></a>' +
            '</div>')
            .appendTo($('#qunit-fixture'));
        var $dismiss = $('[data-cfw-dismiss="testDismiss"]');

        $(document)
            .on('hide.cfw.testDismiss', function() {
                clearTimeout(timer);
                assert.ok(false, 'dismiss was called');
                done();
            });

        $.CFW_enableDismissControl('testDismiss');
        $dismiss.trigger('click');
        clearTimeout(timer);
        timer = setTimeout(function() {
            assert.ok(true, 'dismiss was not called');
            done();
        }, 75);
    });
});
