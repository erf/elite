/**
 * Create an *element* given a *tag name* and an optional *innerHtml*, *attributes*, *events* and *children*.
 *
 * Arguments after *tag* can be omitted and replaced with children as the last argument.
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
    (attributes) => Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v)),
    (events) => Object.entries(events).forEach(([k, v]) => el.addEventListener(k, v)),
    (children) => {
      const fragment = document.createDocumentFragment()
      children.forEach(child => fragment.appendChild(child))
      el.appendChild(fragment)
    },
  ];
  args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
  return el
}

/**
 * Replace the innerHTML of a given parent element with either a single element or an Array of elements.
 *
 * @param {Element|Array} element
 * @param {Element|string} parent
 */
function set(element, parent) {
  const el = typeof parent === "string" ? document.getElementById(parent) : parent
  el.innerHTML = ''
  if (Array.isArray(element)) {
    const fragment = document.createDocumentFragment()
    element.forEach(child => fragment.appendChild(child))
    el.appendChild(fragment)
    return
  }
  el.appendChild(element)
}