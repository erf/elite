function el(tag, ...args) {
  const el = document.createElement(tag)
  let attr_set
  for (let arg of args) {
    if (typeof arg === 'string') {
      el.textContent = arg
    } else if (Array.isArray(arg)) {
      arg.forEach(child => el.appendChild(child))
    } else {
      if (!attr_set) {
        attr_set = true
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
  if (Array.isArray(child)) {
    parent.replaceChildren(...child)
  } else {
    parent.replaceChildren(child)
  }
}

function add(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  if (Array.isArray(child)) {
    parent.append(...child)
  } else {
    parent.append(child)
  }
}