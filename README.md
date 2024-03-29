# elite

A tiny JavaScript library for building HTML declaratively.

# API

`el(tag, text, attributes, events, children)`

> Creates an HTML element. Arguments after **tag** can be omitted and replaced with **children**. You can also omit `text` and pass the next arguments. Elements can be nested using children. 

`get(id)`

> Get element by **id**

`set(element|id, child)`

> Given an **element** or **id**, replace children with a given **child** element(s)

`add(elemnt|id, child)`

> Given an **element** or **id**, append a **child** element(s)

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

[TODO.html](TODO.html)

[https://erf.github.io/elite](https://erf.github.io/elite)


PS !
I've built a slightly more descriptive, but less compact, version of this library called [elite-plus](https://github.com/erf/elite-plus)

