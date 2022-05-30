import React, { useRef } from "react"
import ImageListItem from "@mui/material/ImageListItem"
import { useDrag, useDrop } from "react-dnd"
import type { Identifier, XYCoord } from "dnd-core"

interface DragItem {
  index: number
  id: string
  type: string
}

export interface CardProps {
  id: any
  item: any
  index: number
  handleSwap: (dragIndex: number, hoverIndex: number) => void
}

export default function ImageItem({ id, item, index, handleSwap }: CardProps) {
  const ref = useRef<HTMLLIElement>(null)
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: "image",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId()
      }
    },

    hover(item: any, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      if (dragIndex === hoverIndex) {
        return
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      handleSwap(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  })
  drag(drop(ref))
  return (
    <ImageListItem ref={ref} key={item._id} data-handler-id={handlerId}>
      <img
        src={item.host + item.key}
        srcSet={item.host + item.key}
        alt={item.index}
        loading='lazy'
      />
    </ImageListItem>
  )
}
