/**
 * Create an *element* given a *tag name* and an optional *innerHtml*, *attributes*, *events* and *children*.
 *
 * Arguments after *tag* can be omitted and replaced with children as the last argument.
 *
 * @param {string} tag - the tag name
 * @param {(string|Array.<Element>)} html - the innerHTML content or children
 * @param {(Object|Array.<Element>)} attributes - a map of attributes or children
 * @param {(Object|Array.<Element>)} events - a map of events or children
 * @param {Array.<Element>} children - the child elements
 */
function el(tag, ...args) {
  const el = document.createElement(tag)
  const ops = [
    (html) => el.innerHTML = html,
    (attributes) => Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v)),
    (events) => Object.entries(events).forEach(([k, v]) => el.addEventListener(k, v)),
    (children) => children.forEach(child => el.appendChild(child)),
  ];
  args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
  return el
}

/**
 * Replace the innerHTML of a given parent element with either a single element or an Array of elements.
 *
 * @param {(Element|Array.<Element>)} element - the element or array of elements we wants to set
 * @param {(Element|string)} parent - the parent element or its id we want to set element to
 */
function set(element, parent) {
  const el = typeof parent === "string" ? document.getElementById(parent) : parent
  el.innerHTML = ''
  if (Array.isArray(element)) {
    element.forEach(child => el.appendChild(child))
  } else {
    el.appendChild(element)
  }
}