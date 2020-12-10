/**
 * Create an *element* given a *tag name* and an optional *innerHtml*,
 * *attributes*, *events* and *children*.
 *
 * Arguments after *tag* can be omitted and replaced with children as the last
 * argument.
 *
 * @param {string} tag
 * @param {string|Array} html
 * @param {object|Array} attributes
 * @param {object|Array} events
 * @param {Array} children
 */
function el(tag, ...args) {
  const el = document.createElement(tag)
  const ops = [
    (html) => el.innerHTML = html,
    (at) => Object.entries(at).forEach(([k, v]) => el.setAttribute(k, v)),
    (ev) => Object.entries(ev).forEach(([k, v]) => el.addEventListener(k, v)),
    (ch) => {
      const frag = document.createDocumentFragment()
      ch.forEach(child => frag.appendChild(child))
      el.appendChild(frag)
    },
  ];
  args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
  return el
}

/**
 * Replace the innerHTML of a given parent element with either a single element
 * or an Array of elements.
 *
 * @param {Element|Array} element
 * @param {Element|string} parent
 */
function set(element, parent) {
  const el = typeof parent === "string" ? document.getElementById(parent) : parent
  el.innerHTML = ''
  if (Array.isArray(element)) {
    const frag = document.createDocumentFragment()
    element.forEach(child => frag.appendChild(child))
    el.appendChild(frag)
    return
  }
  el.appendChild(element)
}