---
layout: docs
title: Code
description: Styles for inline code snippets and longer, multiline blocks of code.
group: content
---

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Inline Code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

{% capture example %}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{% endcapture %}
{% include example.html content=example %}

## Code Blocks

Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering.

{% capture example %}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{% endcapture %}
{% include example.html content=example %}

## Variables

For indicating variables use the `<var>` tag.

{% capture example %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endcapture %}
{% include example.html content=example %}

## User Input

Use the `<kbd>` to indicate input that is typically entered via keyboard.

{% capture example %}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endcapture %}
{% include example.html content=example %}

## Sample Output

For indicating sample output from a program use the `<samp>` tag.

{% capture example %}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{% endcapture %}
{% include example.html content=example %}

## SASS Reference

### Variables

The available [Customization options]({{ site.baseurl }}/{{ site.docs_version }}/get-started/options/), or Sass variables, that can be customized for the code CSS styles.

<div class="table-scroll">
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th style="width: 100px;">Name</th>
                <th style="width: 50px;">Type</th>
                <th style="width: 50px;">Default</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><code>$enable-code</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the code CSS rules.
                    Smaller segements of the code CSS rules can be disabled with the following <code>$enable-*</code> variables.
                </td>
            </tr>
            <tr>
                <td><code>$enable-code-code</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the code element CSS rules.
                </td>
            </tr>
            <tr>
                <td><code>$enable-code-kbd</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the keyboard element CSS rules.
                </td>
            </tr>
            <tr>
                <td><code>$enable-code-pre</code></td>
                <td>boolean</td>
                <td><code>true</code></td>
                <td>
                    Enable the generation of the pre element CSS rules.
                </td>
            </tr>
            <tr>
                <td><code>$code-font-size</code></td>
                <td>percent</td>
                <td><code>87.5%</code></td>
                <td>
                    Code and pre element font size.
                </td>
            </tr>
            <tr>
                <td><code>$code-padding-x</code></td>
                <td>string</td>
                <td><code>.4375rem</code></td>
                <td>
                    Code element horizontal padding.
                </td>
            </tr>
            <tr>
                <td><code>$code-padding-y</code></td>
                <td>string</td>
                <td><code>.125rem</code></td>
                <td>
                    Code element vertical padding.
                </td>
            </tr>
            <tr>
                <td><code>$code-color</code></td>
                <td>string</td>
                <td><code>palette($red, 550)</code></td>
                <td>
                    Code element text color.
                </td>
            </tr>
            <tr>
                <td><code>$code-bg</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Code element background color.
                </td>
            </tr>
            <tr>
                <td><code>$kbd-color</code></td>
                <td>string</td>
                <td><code>$uibase-50</code></td>
                <td>
                    Keyboard element text color.
                </td>
            </tr>
            <tr>
                <td><code>$kbd-bg</code></td>
                <td>string</td>
                <td><code>$uibase-900</code></td>
                <td>
                    Keyboard element background color.
                </td>
            </tr>
            <tr>
                <td><code>$kbd-box-shadow</code></td>
                <td>string</td>
                <td><code>inset 0 -.1rem 0 rgba($black, .25)</code></td>
                <td>
                    Optional box shadow for keyboard element.
                </td>
            </tr>
            <tr>
                <td><code>$kbd-nested-font-weight</code></td>
                <td>string</td>
                <td><code>$font-weight-bold</code></td>
                <td>
                    Font weight for nested keyboard elements.  Parent keyboard element inherit the current font weight.
                </td>
            </tr>
            <tr>
                <td><code>$kbd-border-radius</code></td>
                <td>string</td>
                <td><code>.1875rem</code></td>
                <td>
                    Keyboard element border radius.
                </td>
            </tr>
            <tr>
                <td><code>$pre-color</code></td>
                <td>string</td>
                <td><code>$uibase-700</code></td>
                <td>
                    Pre element text color.
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Mixins

No mixins available.
