---
layout: docs
title: Code
group: content
---

Styles for inline code snippets and longer, multiline blocks of code.

## Contents
{:.no_toc}

* ToC goes here
{:toc}

## Inline Code

Wrap inline snippets of code with `<code>`. Be sure to escape HTML angle brackets.

{% example html %}
For example, <code>&lt;section&gt;</code> should be wrapped as inline.
{% endexample %}

## Code Blocks

Use `<pre>`s for multiple lines of code. Once again, be sure to escape any angle brackets in the code for proper rendering.

{% example html %}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{% endexample %}

## Variables

For indicating variables use the `<var>` tag.

{% example html %}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{% endexample %}

## User Input

Use the `<kbd>` to indicate input that is typically entered via keyboard.

{% example html %}
To switch directories, type <kbd>cd</kbd> followed by the name of the directory.<br>
To edit settings, press <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{% endexample %}

## Sample Output

For indicating sample output from a program use the `<samp>` tag.

{% example html %}
<samp>This text is meant to be treated as sample output from a computer program.</samp>
{% endexample %}
