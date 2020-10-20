function el(name, attr = {}, html = "", events, children = []) {
  let el = document.createElement(name);

  if (attr) {
    for (let [key, value] of Object.entries(attr)) {
      el.setAttribute(key, value);
    }
  }

  if (html) {
    el.innerHTML = html;
  }

  if (events) {
    for (let [key, value] of Object.entries(events)) {
      el.addEventListener(key, value);
    }
  }

  if (children) {
    children.forEach((element) => {
      el.appendChild(element);
    });
  }
  return el;
}

function set(child, parent) {
  let el =
    typeof parent === "string" ? document.getElementById(parent) : parent;
  el.innerHTML = "";
  el.appendChild(child);
}
