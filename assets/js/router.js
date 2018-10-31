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

function router() {
  // Lazy load view element:
  let el = document.getElementById("view")
  // Current route url (getting rid of '#' in hash as well):
  let url = location.hash.slice(1) || "/"
  console.log(url)
  render(url.slice(1), el)
}

async function render(url, el) {
  let result = await fetch(`../drafts/${url}.md`).then(r => r.text())

  result = await md.render(result)
  el.innerHTML = result
}

// Listen on hash change:
window.addEventListener("hashchange", router)
// Listen on page load:
window.addEventListener("load", router)
