const gameEvent = {
    submit: (e) => {
        e.preventDefault()
        console.log('game event!')
    }
}
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
    el('div', 'test1', {}, {}, [
        el('div', 'test2', {}, {}),
        el('div', 'test3', {}, {}),
        el('div', 'test4', {}, {}, [
            el('div', 'test5', {}, {}),
            el('div', 'test6', {}, {}),
        ])
    ]),
])
set(page, 'container')