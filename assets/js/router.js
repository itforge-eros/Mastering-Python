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
  let el = document.getElementById("content")
  // Current route url (getting rid of '#' in hash as well):
  let url = location.hash.slice(1) || "/"
  render(url.slice(1), el)
}

async function render(url, el) {
  url = url || "index"
  let result = await fetch(`../data/content/${url}.md`).then(r => {
    if (r.status === 200) {
      return r.text()
    }
    return `<p class="content-text-loading"><img class="content-image-loading" src="../assets/img/icon/notfound.png"></p><p class="content-text-loading">ไม่พบหน้าที่ต้องการ</p>`
  })

  let header = await fetch(`../data/heading/${url}.json`).then(r => {
    if (r.status === 200) {
      return r.json()
    }
    return {
      title: "Not Found",
      description: "",
      icon: "notfound.png"
    }
  })

  let headingTitle = document.getElementById("header-title")
  let headingDescription = document.getElementById("header-description")
  let headingIcon = document.getElementById("header-icon")

  headingTitle.innerText = header.title
  headingDescription.innerHTML = header.description
  headingIcon.setAttribute("src", `../assets/img/icon/${header.icon}`)
  headingIcon.setAttribute("class", "header-image")

  result = await md.render(result)
  el.innerHTML = result
}

// function setLoading() {
//   let headingTitle = document.getElementById("header-title")
//   let headingDescription = document.getElementById("header-description")
//   let headingIcon = document.getElementById("header-icon")
//   let contentArea = document.getElementById("content")
//   let content = `<img class="content-image-loading" src="../assets/img/loading.svg"><p class="content-text-loading">กำลังโหลด...</p>`

//   headingTitle.innerText = "กำลังโหลด"
//   headingDescription.innerHTML = ""
//   headingIcon.setAttribute("src", "../assets/img/loading.svg")
//   contentArea.innerHTML = content
// }

// const menuChild = document.getElementsByClassName("menu-child")

// for (let i = 0; i < menuChild.length; i++) {
//   menuChild[i].addEventListener("click", setLoading)
// }

// Listen on hash change:
window.addEventListener("hashchange", router)
// Listen on page load:
window.addEventListener("load", router)
