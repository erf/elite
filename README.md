# elite

Minimal declarative JS DOM library

## Why

I wanted to split some HTML into separate files and render them given some JSON, 
whilst avoiding using any large frameworks.

This simple solution, somewhat inspired by a talk by Magnar Sveen and Flutter, 
solved my problem and made my code neat.

I composed parts of a web app as `el` blocks given some JSON and import them as 
ES6 modules.

## API

`el` create a DOM element with a given *tag*, *innerHTML*, *attributes*, 
*events*, and *children*.

You can omit all arguments after *tag* and replace them with *children* instead.

`set` replaces the innerHTML of a parent element (or id) with a given element 
or array of elements.

I build children using `Document.createDocumentFragment` for performance.

## Example

See [example.html](example.html)

```Javascript
const page = el('section', [
    el('h1', 'elite', { class: 'elite' }),
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
