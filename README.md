# elite

A minimal Javascript lib for declarative DOM building.

## Why

I wanted to split up some HTML, represented as various screens of a game i was, 
working on, into separate files and render them based on some json. I looked 
into a few technologies and frameworks, and was a bit overwhelmed. I wanted to 
keep it simple, so i made the following, somewhat inspired by a talk given by 
Magnar Sveen and somewhat inspired by Flutter. I found it fun to work on and it
solved my problem and made my code cleaner and more maintainable. If not very 
useful for others, i think it still might inspire to keep things simple and 
still get things done.

## API

I only have two functions: `el` and `set`.

`el` is a function for creating a DOM element with some attributes, some html 
content, events, and children.

`set` is for setting a created element as the child of a given parent, whilst 
clearing the parent.

## Example

``` Javascript

const startPage = 
el('section', {}, '', {}, [
    el('h1', { class: 'green' }, 'My Game'),
    el('p', {}, 'Welcome to my game!'),
    el('form', {}, '', newGameEvent, [
        el('button', {}, 'New game')
    ]),
    el('br'),
    el('form', {}, '', joinGameEvent, [
        el('label', { for: 'code' }, 'Join game'),
        el('br'),
        el('input', { id: 'code', placeholder: 'Enter code', required: true }),
        el('br'),
        el('button', {}, 'Join'),
    ]),
])

const newGameEvent = {
    submit: (e) => {
        e.preventDefault();
        const message = {
            type: 'new_game',
            playerId: playerId,
            gameId: '',
            data: {}
        };
        ws.send(JSON.stringify(message));
    }
}

set(startPage, container)

```
