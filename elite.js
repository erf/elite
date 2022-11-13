elite = () => {
  return {
    el: (tag, ...args) => {
      let el = document.createElement(tag)
      let ops = [
        (html) => el.innerHTML = html,
        (attributes) => Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v)),
        (events) => Object.entries(events).forEach(([k, v]) => el.addEventListener(k, v)),
        (children) => children.forEach(child => el.appendChild(child)),
      ]
      args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
      return el
    },
    get: (id) => {
      return document.getElementById(id)
    },
    add: (parent, children) => {
      Array.isArray(children)
        ? children.forEach(child => parent.appendChild(child))
        : parent.appendChild(children)
      return parent
    },
    set: (parent, child) => {
      parent = typeof parent === 'string' ? get(parent) : parent
      parent.innerHTML = ''
      add(parent, child)
    },
  }
}