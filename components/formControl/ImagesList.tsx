import React from "react"
import PropTypes, { InferProps } from "prop-types"
import {
  Controller,
  useFormContext,
  useController,
  useFieldArray
} from "react-hook-form"
import { Button, TextField } from "@mui/material"
import ImageList from "@mui/material/ImageList"
import ImageListItem from "@mui/material/ImageListItem"
import axios from "axios"
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
  const { fields, append } = useFieldArray({ name })
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
  return (
    <>
      <input type='file' multiple accept='image/*' {...register("image")} />
      <Button onClick={onAddImage}>Add image</Button>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {fields?.map((item: any, index) => (
          <ImageListItem key={item._id}>
            <img
              src={item.host + item.key}
              srcSet={item.host + item.key}
              alt={item.index}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  )
}
export default ImagesList
