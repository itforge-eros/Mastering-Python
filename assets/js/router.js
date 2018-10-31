;(function() {
  let cache = {}
  this.tmpl = function tmpl(str, data) {
    // Figure out if we're getting a template, or if we need to
    // load the template - and be sure to cache the result.
    let fn = !/\W/.test(str)
      ? (cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML))
      : // Generate a reusable function that will serve as a template
        // generator (and which will be cached).
        new Function(
          "obj",
          "var p=[],print=function(){p.push.apply(p,arguments);};" +
            // Introduce the data as local variables using with(){}
            "with(obj){p.push('" +
            // Convert the template into pure JavaScript
            str
              .replace(/[\r\t\n]/g, " ")
              .split("<%")
              .join("\t")
              .replace(/((^|%>)[^\t]*)'/g, "$1\r")
              .replace(/\t=(.*?)%>/g, "',$1,'")
              .split("\t")
              .join("');")
              .split("%>")
              .join("p.push('")
              .split("\r")
              .join("\\'") +
            "');}return p.join('');"
        )
    // Provide some basic currying to the user
    return data ? fn(data) : fn
  }
})()
let routes = {}
//
function route(path, templateId, controller) {
  routes[path] = { templateId: templateId, controller: controller }
}
let el = null
function router() {
  // Lazy load view element:
  el = el || document.getElementById("view")
  // Current route url (getting rid of '#' in hash as well):
  let url = location.hash.slice(1) || "/"
  console.log(url)
  // Get route by url:
  let route = routes[url]
  // Do we have both a view and a route?
  if (el && route.controller) {
    // Render route template with John Resig's template engine:
    el.innerHTML = tmpl(route.templateId, new route.controller())
  }
}
// Listen on hash change:
window.addEventListener("hashchange", router)
// Listen on page load:
window.addEventListener("load", router)

hljs.initHighlightingOnLoad()
let md = window.markdownit({
  langPrefix: "",
  html: true,
  highlight: function(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + "</code></pre>"
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
  }
})
