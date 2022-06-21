const splitHtml = (html: string) => {
  if (
    typeof DOMParser !== "undefined" &&
    window.DOMParser.prototype.parseFromString
  ) {
    const parser = new window.DOMParser()
    const parsed = parser.parseFromString(html, "text/html")
    if (parsed && parsed.body) {
      let nodeList = [].slice?.call(parsed.body.childNodes)
      const array = nodeList.map((child: any) => {
        if (child?.data) {
          return child.data.replaceAll("&nbsp;", " ")
        } else {
          return child.outerHTML.replaceAll("&nbsp;", " ")
        }
      })
      return array
    }
  }
}

const Convert = (editorjs: any) => {
  const slatejs = editorjs.blocks.map((block: any, index: number) => {
    if (block.type === "paragraph") {
      let editorjsText = splitHtml(block.data.text)
      const childrenArray = editorjsText?.map((child: any) => {
        if (child.includes("<b>")) {
          return { bold: true, text: child.slice(3, child.length - 4) }
        } else if (child.includes("<i>")) {
          return { italic: true, text: child.slice(3, child.length - 4) }
        } else {
          return { text: child }
        }
      })
      return { type: "paragraph", children: childrenArray }
    } else if (block.type === "header") {
      if (block.data.level === 1) {
        return { type: "heading-one", children: [{ text: block.data.text }] }
      } else {
        return { type: "heading-two", children: [{ text: block.data.text }] }
      }
    } else if (block.type === "list") {
      const itemsList = block.data.items.map((item: string, index: number) => ({
        type: "list-item",
        children: [{ text: item }]
      }))
      return { type: "bulleted-list", children: itemsList }
    }
  })

  return slatejs
}

export default Convert
