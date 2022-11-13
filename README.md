# elite

tiny declarative javascript dom lib

> ~ 506 bytes minified and only 4 functions

## API

`el` creates an element with a given *tag*, *html*, *attributes*, *events*, and *children*. You can omit arguments after *tag* and replace with *children*.

`set` replaces the *innerHTML* of a parent element or id with the given child element(s).

`get` is a shorthand for *document.getElementById*

`add` uses *Node.appendChild* to append a child element(s) and return the parent.

## Example

See [example.html](example.html)

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