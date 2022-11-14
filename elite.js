function el(tag, ...args) {
  const el = document.createElement(tag)
  const ops = [
    (text) => el.textContent = text,
    (attrs) => Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v)),
    (events) => Object.entries(events).forEach(([k, v]) => el.addEventListener(k, v)),
    (children) => children.forEach(child => el.appendChild(child)),
  ]
  args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
  return el
}

function get(id) {
  return document.getElementById(id)
}

function add(parent, children) {
  Array.isArray(children)
    ? children.forEach(child => parent.appendChild(child))
    : parent.appendChild(children)
  return parent
}

function set(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  parent.innerHTML = ''
  add(parent, child)
}