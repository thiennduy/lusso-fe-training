import React, { useCallback, useMemo, useState } from "react"
import isHotkey from "is-hotkey"
import { Editable, withReact, useSlate, Slate } from "slate-react"
import { Editor, Transforms, createEditor } from "slate"
import { withHistory } from "slate-history"
import { Controller, useFormContext, useController } from "react-hook-form"
import FormatBoldIcon from "@mui/icons-material/FormatBold"
import FormatItalicIcon from "@mui/icons-material/FormatItalic"
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined"
import CodeIcon from "@mui/icons-material/Code"
import LooksOneIcon from "@mui/icons-material/LooksOne"
import LooksTwoIcon from "@mui/icons-material/LooksTwo"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered"
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted"

import { Button, Icon, Toolbar } from "./SlateComponent"

const HOTKEYS = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
}

const LIST_TYPES = ["numbered-list", "bulleted-list"]

const RichText = (props) => {
  const { name, label, disabled } = props
  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    name
  })
  const renderElement = useCallback((props) => <Element {...props} />, [])
  const renderLeaf = useCallback((props) => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  // console.log("cccc: ", value)

  return (
    <>
      {value && (
        <Slate name={name} editor={editor} value={value} onChange={onChange}>
          <Toolbar>
            <MarkButton format='bold' icon={<FormatBoldIcon />} />
            <MarkButton format='italic' icon={<FormatItalicIcon />} />
            <MarkButton format='underline' icon={<FormatUnderlinedIcon />} />
            <MarkButton format='code' icon={<CodeIcon />} />
            <BlockButton format='heading-one' icon={<LooksOneIcon />} />
            <BlockButton format='heading-two' icon={<LooksTwoIcon />} />
            <BlockButton format='block-quote' icon={<FormatQuoteIcon />} />
            <BlockButton
              format='numbered-list'
              icon={<FormatListNumberedIcon />}
            />
            <BlockButton
              format='bulleted-list'
              icon={<FormatListBulletedIcon />}
            />
          </Toolbar>
          <Editable
            style={{ minHeight: "80px" }}
            value={value}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            placeholder='Enter some descriptions'
            spellCheck
            autoFocus
            onKeyDown={(event) => {
              for (const hotkey in HOTKEYS) {
                if (isHotkey(hotkey, event)) {
                  event.preventDefault()
                  const mark = HOTKEYS[hotkey]
                  toggleMark(editor, mark)
                }
              }
            }}
          />
        </Slate>
      )}
    </>
  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type),
    split: true
  })

  Transforms.setNodes(editor, {
    type: isActive ? "paragraph" : isList ? "list-item" : format
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format
  })
  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const Element = ({ attributes, children, element }) => {
  switch (element.type) {
    case "block-quote":
      return <blockquote {...attributes}>{children}</blockquote>
    case "bulleted-list":
      return <ul {...attributes}>{children}</ul>
    case "heading-one":
      return <h1 {...attributes}>{children}</h1>
    case "heading-two":
      return <h2 {...attributes}>{children}</h2>
    case "list-item":
      return <li {...attributes}>{children}</li>
    case "numbered-list":
      return <ol {...attributes}>{children}</ol>
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      <Icon>{icon}</Icon>
    </Button>
  )
}

// const initialValue = [
//   {
//     type: "paragraph",
//     children: [{ text: " " }]
//   }
// ]

export default RichText
