# elite

A tiny JavaScript library for building HTML elements declaratively.

# API

`el(tag, text, attributes, events, children)`

> Create an HTML element. Arguments after **tag** can be omitted or replaced with **children** . Note that elements can be nested by passing an array of child elements. `attributes` and `events` are objects.

`get(id)`

> Get element by **id**

`set(element|id, child)`

> Given an **element** or **id**, replace it's children with a given **child** element(s)

`add(elemnt|id, child)`

> Given an **element** or **id** append a **child** element

*Please read the code to understand more, it's quite simple!*

## EXAMPLE

```Javascript
const app = el('div', [
    el('h1', 'elite', { class: 'elite' }),
    el('p', 'a tiny declarative js dom lib', { style: "background: #ffe088; padding: 8pt;" }),
    el('div', [
        el('button', 'YO', {}, { click: (e) => alert('YO !') }),
    ]),
    el('p', 'Made with ❤ by @apptakk'),
])

set('app', app)

```

Result HTML:

```HTML
<main id="app">
    <div>
        <h1 class="elite">elite</h1>
        <p>a tiny declarative js dom lib</p>
        <div>
            <button>YO</button>
        </div>
        <p>Made with ❤ by @apptakk</p>
    </div>
</main>
```

[example.html](example.html)

[https://erf.github.io/elite](https://erf.github.io/elite)


PS: I've built a slightly more descriptive, but less compact, version of this library called [elite-plus](https://github.com/erf/elite-plus)

