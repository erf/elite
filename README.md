# elite

Minimal declarative DOM lib in Javascript.

## Why

I wanted to split some HTML into separate files and render them given some JSON, whilst avoiding using any large frameworks. 

This simple solution, somewhat inspired by a talk by Magnar Sveen and also Flutter, solved my problem and made my code neat.

I build parts of my web app as `el` blocks given som JSON and import them as needed as ES6 modules.

## API

`el` create a DOM element with *html*, *attributes*, *events*, and *children*.

`set` clear and append a single or multiple elements to a given parent.

I use `Document.createDocumentFragment` to build children in a offscreen DOM tree for perf.

## Example

See [example.html](example.html)

```Javascript
const page = el('section', '', {}, {}, [
    el('h1', 'elite'),
    el('p', 'Welcome to elite'),
    el('form', '', {}, gameEvent, [
        el('button', 'New game')
    ]),
    el('br'),
    el('form', '', {}, gameEvent, [
        el('label', 'Join game', { for: 'code' }),
        el('br'),
        el('input', '', { id: 'code', placeholder: 'Enter code', required: true }),
        el('br'),
        el('button', 'Join'),
    ]),
])
set(page, 'container')
```
