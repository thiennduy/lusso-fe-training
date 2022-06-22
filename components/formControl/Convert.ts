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
          return child.data
        } else {
          return child.outerHTML
        }
      })
      const nodes = array.map((child: any) => {
        if (child.includes("<b>")) {
          return { text: child.slice(3, child.length - 4), bold: true }
        } else if (child.includes("<i>")) {
          return { text: child.slice(3, child.length - 4), italic: true }
        } else {
          return { text: child }
        }
      })
      return nodes
    }
  }
}

const convertTextValue = (editorjs: any) => {
  const slatejsValue = editorjs.blocks.map((block: any) => {
    if (block.type === "paragraph") {
      const childrenNodes = splitHtml(block.data.text.replaceAll("&nbsp;", " "))
      return { type: "paragraph", children: childrenNodes }
    } else if (block.type === "header") {
      if (block.data.level === 1) {
        return { type: "heading-one", children: [{ text: block.data.text }] }
      } else {
        return { type: "heading-two", children: [{ text: block.data.text }] }
      }
    } else if (block.type === "list" && block.data.items) {
      const itemsList = block.data.items.map((item: string) => ({
        type: "list-item",
        children: splitHtml(item.replaceAll("&nbsp;", " "))
      }))
      return { type: "bulleted-list", children: itemsList }
    }
  })

  return slatejsValue
}

export default convertTextValue
