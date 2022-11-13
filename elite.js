/**
 * @namespace elite
 */
function elite() {

  let m = {};

  /**
   * Create an *element* given a *tag name* and an optional *innerHtml*, *attributes*, *events* and *children*.
   *
   * Arguments after *tag* can be omitted or replaced with children as the last argument.
   * 
   * @memberof elite
   *
   * @param {string} tag - the tag name
   * @param {(string|Array.<Element>)} html - the innerHTML content or children
   * @param {(Object|Array.<Element>)} attributes - a map of attributes or children
   * @param {(Object|Array.<Element>)} events - a map of events or children
   * @param {Array.<Element>} children - the child elements
   */
  m.el = (tag, ...args) => {
    let el = document.createElement(tag)
    let ops = [
      (html) => el.innerHTML = html,
      (attributes) => Object.entries(attributes).forEach(([k, v]) => el.setAttribute(k, v)),
      (events) => Object.entries(events).forEach(([k, v]) => el.addEventListener(k, v)),
      (children) => children.forEach(child => el.appendChild(child)),
    ]
    args.forEach((a, i) => Array.isArray(a) ? ops[3](a) : ops[i](a))
    return el
  }

  /**
   * Get element by id using document.getElementById.
   * 
   * @memberof elite
   * 
   * @param {string} id - the element id
   */
  m.get = (id) => document.getElementById(id)

  /**
   * Appends a child or an array of children to a parent element using appendChild.
   * 
   * @memberof elite
   * 
   * @param {Element} parent - the parent Element
   * @param {Element|Array.<Element>} children - the Element or array of Elements we want to add to the parent
   * 
   * @returns {Element} The parent element
   */
  m.add = (parent, children) => {
    Array.isArray(children)
      ? children.forEach(child => parent.appendChild(child))
      : parent.appendChild(children)
    return parent
  }

  /**
   * Replace the innerHTML of an element with an element or an array of elements.
   * 
   * @memberof elite
   *
   * @param {(Element|String)} parent - the parent element or element id
   * @param {(Element|Array.<Element>)} children - the child element or array of elements we want to set
   */
  m.set = (parent, child) => {
    parent = typeof parent === 'string' ? get(parent) : parent
    parent.innerHTML = ''
    add(parent, child)
  }

  return m
}