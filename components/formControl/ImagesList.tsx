import React, { useRef, useCallback } from "react"
import PropTypes, { InferProps } from "prop-types"
import {
  Controller,
  useFormContext,
  useController,
  useFieldArray
} from "react-hook-form"
import { Button, TextField, Typography } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import axios from "axios"
import { useDrag, useDrop } from "react-dnd"
import type { Identifier, XYCoord } from "dnd-core"
import ImageItem from "./ImageItem"
import { color } from "@mui/system"

type ProductImagesPropsSchema = {
  name: string
}
function ImagesList(props: ProductImagesPropsSchema) {
  const { name } = props
  const uploadImage = (data: any) => {
    const formData = new FormData()
    formData.append("file", data)
    return axios.post("admin/files/upload", formData, {
      headers: { "Content-Type": "multipart/formdata" }
    })
  }
  const { fields, append, swap } = useFieldArray({ name })
  const { register, getValues, setValue } = useFormContext()

  const onAddImage = async () => {
    const data = getValues("image")
    if (!data.length) return
    try {
      const res = await uploadImage(data[0])
      console.log(res.data)
      append(res.data)
      setValue("image", " ")
    } catch (error) {
      console.log(error)
    }
  }
  const handleSwap = useCallback((dragIndex: number, hoverIndex: number) => {
    swap(dragIndex, hoverIndex)
  }, [])
  return (
    <>
      <input type='file' multiple accept='image/*' {...register("image")} />
      <Button onClick={onAddImage} sx={{ border: "2px solid #208be6" }}>
        Add image
      </Button>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {fields?.map((item: any, index) => (
          <ImageItem
            item={item}
            index={index}
            key={item._id}
            id={item.id}
            handleSwap={handleSwap}
          />
        ))}
      </ImageList>
    </>
  )
}
export default ImagesList
