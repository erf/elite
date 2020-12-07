# elite

Minimal declarative DOM lib in Javascript.

## What

I wanted to split some HTML into separate files and render them given some JSON, whilst avoiding using any large frameworks. 

This simple solution, somewhat inspired by a talk by Magnar Sveen and also Flutter, solved my problem and made my code neat.

If not useful for others, maybe it can inspire for simpler solutions.

## API

`el` is a function for creating a DOM element with *html*, *attributes*, *events*, and *children*.

`set` is for setting an element as the child of a given parent.

`set_children` is for setting an array of elements to a given parent.

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
