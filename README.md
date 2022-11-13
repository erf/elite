# elite

A tiny declarative JS DOM library in 480 bytes

## API

```
const { el, get, add, set } = elite()
```

`el` creates an element given a *tag*, *html*, *attributes*, *events*, and
*children*. Arguments after *tag* can be omitted or replaced with *children*

`set` replaces the *innerHTML* of a parent element or id with the given child
element(s)

`get` shorthand for *document.getElementById*

`add` appends a child or multiple children to a given element and returns the
parent

## Example

```Javascript
const { el, get, add, set } = elite()

const app = el('div', [
    el('h1', 'elite', { class: 'elite' }),
    el('p', 'A tiny declarative JS DOM lib in 480 bytes'),
    el('div', [
        el('button', 'YO', {}, { click: (e) => alert('YO !') }),
    ]),
])

set('app', app)

```

See [example.html](example.html)

