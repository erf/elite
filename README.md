# elite

a tiny declarative js dom lib in ~500 bytes

## API

`el` - create an element given *tag*, *text*, *attributes*, *events*, and *children*. args after *tag* can be omitted or replaced with children

`get` - get element by id

`set` - set a child / children to a parent given as an element or id

`add` - append a child / children to a parent element

## EXAMPLE

```Javascript
const data = { 
    title: 'elite',
    description: 'a tiny declarative js dom lib'
}

const app = el('div', [
    el('h1', data.title, { class: 'elite' }),
    el('p', data.description),
    el('div', [
        el('button', 'YO', {}, { click: (e) => alert('YO !') }),
    ]),
])

set('app', app)

```

result

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

see [example.html](example.html)

