import escapeHtml from "escape-html"
import { useEffect } from "react"
import { Text, Node, Transforms, Element } from "slate"
type ChildrenProps = {
  type: string
  children: {
    text: string
    bold: boolean
    italic: boolean
    underline: boolean
  }[]
}
type SerializeProps = {
  value: ChildrenProps[]
  styles: any
}
const serialize = (node: any) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node?.bold) {
      string = `<strong>${string}</strong>`
    } else if (node?.italic) {
      string = `<i>${string}</i>`
    } else if (node?.underline) {
      string = `<u>${string}</u>`
    } else if (node?.code) {
      string = `<code><${string}></code>`
    }
    return string
  }

  const children = node.children?.map((n: any) => serialize(n)).join("")

  switch (node.type) {
    case "quote":
      return `<blockquote><p>${children}</p></blockquote>`
    case "paragraph":
      return `<p>${children}</p>`
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`
    case "heading-one":
      return `<h1>${children}</h1>`
    case "heading-two":
      return `<h2>${children}</h2>`
    default:
      return children
  }
}

export default function Serialize(props: SerializeProps) {
  const { value, styles } = props
  // const withParagraphs = (editor: any) => {
  //   const { normalizeNode } = editor

  //   editor.normalizeNode = (entry: any) => {
  //     const [node, path] = entry

  //     // If the element is a paragraph, ensure its children are valid.
  //     if (Element.isElement(node) && node.type === "paragraph") {
  //       for (const [child, childPath] of Node.children(editor, path)) {
  //         if (Element.isElement(child) && !editor.isInline(child)) {
  //           Transforms.unwrapNodes(editor, { at: childPath })
  //           return
  //         }
  //       }
  //     }

  //     // Fall back to the original `normalizeNode` to enforce other constraints.
  //     normalizeNode(entry)
  //   }

  //   return editor
  // }
  // console.log(html)
  // document.getElementById("demo")
  //
  // console.log(withParagraphs(value))
  // withParagraphs(value)
  // console.log(serialize(value))
  useEffect(() => {
    const html = value.reduce((accum, html) => {
      accum = accum + serialize(html)
      return accum
    }, "")
    // console.log(test?.innerHTML)
    // document.getElementById("demo").innerHTML = serialize(value)
    // test?.insertAdjacentHTML("beforeend", html)
    // const test = document.getElementById("demo")
    document.getElementById("demo").innerHTML = html
  }, [value])
  return <div className={styles.description__content} id='demo'></div>
}
