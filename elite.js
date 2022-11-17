function el(tag, ...args) {
  const el = document.createElement(tag)
  let is_attr = true
  for (let arg of args) {
    if (typeof arg === 'string') {
      el.textContent = arg
    } else if (Array.isArray(arg)) {
      arg.forEach(child => el.appendChild(child))
    } else {
      if (is_attr) {
        is_attr = false
        Object.entries(arg).forEach(([k, v]) => el.setAttribute(k, v))
      } else {
        Object.entries(arg).forEach(([k, v]) => el.addEventListener(k, v))
      }
    }
  }
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