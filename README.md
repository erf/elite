# elite

A tiny (~500 bytes) js lib for building html elements declaratively.

## API

`el` - create an element given *tag*, *text*, *attributes*, *events*, and *children*. args after *tag* can be omitted or replaced with children

`get` - get element by id

`add` - append a child / children to a parent element

`set` - set a child / children to a parent given as an element or id

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

