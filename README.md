# elite

a tiny declarative js dom lib in ~500 bytes

## API

`el` - create an element given *tag*, *html*, *attributes*, *events*, and *children*. args after *tag* can be omitted or replaced with children

`get` - get element by id

`set` - set a child / children to a parent given as an element or id

`add` - append a child / children to a parent element

## EXAMPLE

```Javascript
const app = el('div', [
    el('h1', 'elite', { class: 'elite' }),
    el('p', 'a tiny declarative js dom lib'),
    el('div', [
        el('button', 'YO', {}, { click: (e) => alert('YO !') }),
    ]),
])

set('app', app)

```

see [example.html](example.html)

