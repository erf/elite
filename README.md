# elite

Tiny declarative JS DOM lib

> < 7kb minified and only two functions: **el** and **set**

## Why

I wanted to split some HTML into separate files and render them given some JSON, whilst avoiding using any large frameworks.

This simple solution, somewhat inspired by a talk by Magnar Sveen and Flutter, solved my problem and made my code neat.

I now compose parts of a my web app using `el` blocks given some JSON in a separate file and import them as ES6 modules.

## API

`el` create an element with a given **tag**, **html**, **attributes**, 
**events**, and **children**.

You can omit arguments after **tag** and replace with **children**.

`set` replaces the **innerHTML** of a **parent** with a given **element** or array of **elements**.

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
set(page, 'page')
```