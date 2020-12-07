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
    let frag = document.createDocumentFragment()
    children.forEach(frag.appendChild)
    el.appendChild(frag)
  }

  return el
}

function set(element, parent) {
  let el = typeof parent === "string" ? document.getElementById(parent) : parent
  el.innerHTML = ''
  el.appendChild(element)
}

function set_children(el, children) {
  el.innerHTML = ''
  children.forEach((p) => el.appendChild(p))
}