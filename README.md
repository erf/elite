# elite

A tiny declarative JS DOM library in 480 bytes

## API

```
const { el, get, set, add } = elite()
```

`el` - create an element given *tag*, *html*, *attributes*, *events*, and *children*. args after *tag* can be omitted or replaced with children

`get` - get element by id

`set` - set a child / children to a parent given as an element or id

`add` - append a child / children to a parent element

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

