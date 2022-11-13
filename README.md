# elite

A tiny declarative JavaScript DOM library in 500 bytes

## API

```
const { el, get, add, set } = elite()
```

`el` create an element given *tag*, *html*, *attributes*, *events*, and *children*. Arguments after *tag* can be replaced with *children*

`set` replaces the *innerHTML* of a parent element or id with the given child element(s)

`get` shorthand for *document.getElementById*

`add` appends a child or multiple children to a given element and returns the parent

## Example

```Javascript
const page = el('section', [
    el('h1', 'elite', { class: 'elite' }),
    el('p', 'Welcome to elite'),
    el('form', '', {}, someEvent, [
        el('button', 'New game')
    ]),
    el('br'),
    el('form', '', {}, anotherEvent, [
        el('label', 'Join game', { for: 'code' }),
        el('br'),
        el('input', '', { id: 'code', placeholder: 'Enter code', required: true }),
        el('br'),
        el('button', 'Join'),
    ]),
])

set('page', page))
```

See [example.html](example.html)