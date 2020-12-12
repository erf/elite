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
    (at) => Object.entries(at).forEach(([k, v]) => el.setAttribute(k, v)),
    (ev) => Object.entries(ev).forEach(([k, v]) => el.addEventListener(k, v)),
    (children) => children.forEach(child => el.appendChild(child)),
  ];
  args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
  return el
}

/**
 * Get an element by id using document.getElementById.
 * 
 * @param {string} id - the element id
 */
function get(id) {
  return document.getElementById(id)
}

/**
 * Adds a child or an array of children to a parent element using appendChild.
 * 
 * @param {Element} parent - the parent Element
 * @param {Element|Array.<Element>} child - the Element or array of Elements we want to add to the parent
 * 
 * @returns {Element} The parent element
 */
function add(parent, child) {
  if (Array.isArray(child)) {
    child.forEach(child => parent.appendChild(child))
  } else {
    parent.appendChild(child)
  }
  return parent
}

/**
 * Replace the innerHTML of an element with an element or an array of elements.
 *
 * @param {(Element|String)} parent - the parent element or element id
 * @param {(Element|Array.<Element>)} child - the child element or array of elements we want to set
 */
function set(parent, child) {
  parent = typeof parent === 'string' ? get(parent) : parent
  parent.innerHTML = ''
  add(parent, child)
}