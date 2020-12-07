function el(name, html = "", attr = {}, events = {}, children = []) {
  let el = document.createElement(name)

  if (html) {
    el.innerHTML = html
  }

  if (attr) {
    for (let [key, value] of Object.entries(attr)) {
      el.setAttribute(key, value)
    }
  }

  if (events) {
    for (let [key, value] of Object.entries(events)) {
      el.addEventListener(key, value)
    }
  }

  if (children) {
    children.forEach(child => el.appendChild(child))
  }

  return el
}

function set(element, parent) {
  let el = typeof parent === "string" ? document.getElementById(parent) : parent
  el.innerHTML = ''
  if (Array.isArray(element)) {
    element.forEach(child => el.appendChild(child))
  } else {
    el.appendChild(element)
  }
}