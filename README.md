# elite

A tiny JavaScript library for building HTML elements.

## API

`el(tag, text, attributes, events, children)`

Create a new HTML element. Arguments after **tag** can be omitted or replaced with **children**. 

`get(id)`

Get an element by **id***. Short for `getElementById`.

`set(id|element, child)`

Given an **element** or **id**, replace it's children with a given **child** element. 

`add(id|elemnt, child)`

Given an **element** or **id** append a **child** element.

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

Result HTML:

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

[example.html](example.html)

[https://erf.github.io/elite](https://erf.github.io/elite)

