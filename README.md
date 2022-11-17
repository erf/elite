# elite

A tiny (~500 bytes) js lib for building html elements declaratively.

## API

`el` - create a new element given a *tag*, *text*, *attributes*, *events*, and *children*. arguments after *tag* can be omitted or replaced with *children*

`get` - get element by *id*

`set` - replace the children of a given id or element with a child

`add` - append a child / children to a parent element

## EXAMPLE

```Javascript
const app = el('div', [
    el('h1', 'elite', { class: 'elite' }),
    el('p', 'a tiny declarative js dom lib', { style: "background: #ffe088; padding: 8pt;" }),
    el('div', [
        el('button', 'YO', {}, { click: (e) => alert('YO !') }),
    ]),
])

set('app', app)

```

resulting HTML

```HTML
<main id="app">
    <div>
        <h1 class="elite">elite</h1>
        <p>a tiny declarative js dom lib</p>
        <div>
            <button>YO</button>
        </div>
    </div>
</main>
```

example [example.html](example.html)

github.io [https://erf.github.io/elite](https://erf.github.io/elite)

