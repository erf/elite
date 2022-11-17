function el(tag, ...args) {
  const el = document.createElement(tag)
  let is_attributes = true
  for (let arg of args) {
    if (typeof arg === 'string') {
      el.textContent = arg
    } else if (Array.isArray(arg)) {
      arg.forEach(child => el.appendChild(child))
    } else {
      if (is_attributes) {
        is_attributes = false
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

function set(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  parent.replaceChildren(child);
}

function add(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  parent.append(child)
  return parent
}