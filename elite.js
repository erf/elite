function el(name, html = "", attr = {}, events = {}, children = []) {
  let el = document.createElement(name)

  // TODO use fragment to build offscreen DOM tree?
  //let fragment = document.createDocumentFragment();

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
    children.forEach((element) => el.appendChild(element))
  }

  return el
}

function set(element, parent) {
  let el = typeof parent === "string" ? document.getElementById(parent) : parent
  el.innerHTML = ''
  el.appendChild(element)
}

function set_children(el, children) {
  el.innerHTML = '';
  children.forEach((p) => el.appendChild(p))
}