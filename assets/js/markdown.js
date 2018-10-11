function parse(content) {
  // Regular Expressions
  const h1 = /^#{1}[^#].*$/gm
  const h2 = /^#{2}[^#].*$/gm
  const h3 = /^#{3}[^#].*$/gm
  const h4 = /^#{4}[^#].*$/gm
  const h5 = /^#{5}[^#].*$/gm
  const h6 = /^#{6}[^#].*$/gm
  const bold = /\*\*[^\*\n]+\*\*/gm
  const italics = /[^\*]\*[^\*\n]+\*/gm
  const link = /\[[\w|\(|\)|\s|\*|\?|\-|\.|\,]*(\]\(){1}[^\)]*\)/gm
  const lists = /^((\s*((\*|\-)|\d(\.|\))) [^\n]+))+$/gm
  const unorderedList = /^[\*|\+|\-]\s.*$/
  const unorderedSubList = /^\s\s\s*[\*|\+|\-]\s.*$/
  const orderedList = /^\d\.\s.*$/
  const orderedSubList = /^\s\s+\d\.\s.*$/

  // # Heading 1
  if (h1.test(content)) {
    const matches = content.match(h1)

    matches.forEach(element => {
      const extractedText = element.slice(1)
      content = content.replace(element, "<h1>" + extractedText + "</h1>")
    })
  }

  // # Heading 2
  if (h2.test(content)) {
    const matches = content.match(h2)

    matches.forEach(element => {
      const extractedText = element.slice(2)
      content = content.replace(element, "<h2>" + extractedText + "</h2>")
    })
  }

  // # Heading 3
  if (h3.test(content)) {
    const matches = content.match(h3)

    matches.forEach(element => {
      const extractedText = element.slice(3)
      content = content.replace(element, "<h3>" + extractedText + "</h3>")
    })
  }

  // # Heading 4
  if (h4.test(content)) {
    const matches = content.match(h4)

    matches.forEach(element => {
      const extractedText = element.slice(4)
      content = content.replace(element, "<h4>" + extractedText + "</h4>")
    })
  }

  // # Heading 5
  if (h5.test(content)) {
    const matches = content.match(h5)

    matches.forEach(element => {
      const extractedText = element.slice(5)
      content = content.replace(element, "<h5>" + extractedText + "</h5>")
    })
  }
  // # Heading 6
  if (h6.test(content)) {
    const matches = content.match(h6)

    matches.forEach(element => {
      const extractedText = element.slice(6)
      content = content.replace(element, "<h6>" + extractedText + "</h6>")
    })
  }

  // **Bold**
  if (bold.test(content)) {
    const matches = content.match(bold)

    matches.forEach(element => {
      const extractedText = element.slice(2, -2)
      content = content.replace(element, "<strong>" + extractedText + "</strong>")
    })
  }

  // *Italic*
  if (italics.test(content)) {
    const matches = content.match(italics)

    matches.forEach(element => {
      const extractedText = element.slice(2, -1)
      content = content.replace(element, " <em>" + extractedText + "</em>")
    })
  }

  // [I'm an inline-style link](https://www.google.com)
  if (link.test(content)) {
    const links = content.match(link)

    links.forEach(element => {
      const text = element.match(/^\[.*\]/)[0].slice(1, -1)
      const url = element.match(/\]\(.*\)/)[0].slice(2, -1)

      content = content.replace(element, '<a href="' + url + '">' + text + "</a>")
    })
  }

  if (lists.test(content)) {
    const matches = content.match(lists)

    matches.forEach(list => {
      const listArray = list.split("\n")

      const formattedList = listArray
        .map((currentValue, index, array) => {
          if (unorderedList.test(currentValue)) {
            currentValue = "<li>" + currentValue.slice(2) + "</li>"

            if (!unorderedList.test(array[index - 1]) && !unorderedSubList.test(array[index - 1])) {
              currentValue = "<ul>" + currentValue
            }

            if (!unorderedList.test(array[index + 1]) && !unorderedSubList.test(array[index + 1])) {
              currentValue = currentValue + "</ul>"
            }

            if (unorderedSubList.test(array[index + 1]) || orderedSubList.test(array[index + 1])) {
              currentValue = currentValue.replace("</li>", "")
            }
          }

          if (unorderedSubList.test(currentValue)) {
            currentValue = currentValue.trim()
            currentValue = "<li>" + currentValue.slice(2) + "</li>"

            if (!unorderedSubList.test(array[index - 1])) {
              currentValue = "<ul>" + currentValue
            }

            if (!unorderedSubList.test(array[index + 1]) && unorderedList.test(array[index + 1])) {
              currentValue = currentValue + "</ul></li>"
            }

            if (!unorderedSubList.test(array[index + 1]) && !unorderedList.test(array[index + 1])) {
              currentValue = currentValue + "</ul></li></ul>"
            }
          }

          if (orderedList.test(currentValue)) {
            currentValue = "<li>" + currentValue.slice(2) + "</li>"

            if (!orderedList.test(array[index - 1]) && !orderedSubList.test(array[index - 1])) {
              currentValue = "<ol>" + currentValue
            }

            if (
              !orderedList.test(array[index + 1]) &&
              !orderedSubList.test(array[index + 1]) &&
              !orderedList.test(array[index + 1])
            ) {
              currentValue = currentValue + "</ol>"
            }

            if (unorderedSubList.test(array[index + 1]) || orderedSubList.test(array[index + 1])) {
              currentValue = currentValue.replace("</li>", "")
            }
          }

          if (orderedSubList.test(currentValue)) {
            currentValue = currentValue.trim()
            currentValue = "<li>" + currentValue.slice(2) + "</li>"

            if (!orderedSubList.test(array[index - 1])) {
              currentValue = "<ol>" + currentValue
            }

            if (orderedList.test(array[index + 1]) && !orderedSubList.test(array[index + 1])) {
              currentValue = currentValue + "</ol>"
            }

            if (!orderedList.test(array[index + 1]) && !orderedSubList.test(array[index + 1])) {
              currentValue = currentValue + "</ol></li></ol>"
            }
          }

          return currentValue
        })
        .join("")

      content = content.replace(list, formattedList)
    })
  }

  return content
    .split("\n")
    .map(line => {
      if (
        !h1.test(line) &&
        !h2.test(line) &&
        !h3.test(line) &&
        !h4.test(line) &&
        !h5.test(line) &&
        !h6.test(line) &&
        !unorderedList.test(line) &&
        !unorderedSubList.test(line) &&
        !orderedList.test(line) &&
        !orderedSubList.test(line)
      ) {
        return line.replace(line, "<p>" + line + "</p>")
      }
    })
    .join("")
}
