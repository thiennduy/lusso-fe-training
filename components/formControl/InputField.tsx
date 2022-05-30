import React from "react"
import PropTypes, { InferProps } from "prop-types"
import { Controller, useFormContext, useController } from "react-hook-form"
import { TextField } from "@mui/material"

type InputFieldPropsSchema = {
  name: string
  label: string
  disabled?: boolean
}

function InputField(props: InputFieldPropsSchema) {
  const { name, label, disabled } = props

  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    name
  })

  return (
    <>
      <TextField
        id={name}
        label={label}
        value={value}
        onChange={onChange}
        variant='standard'
        disabled={disabled}
        sx={{ marginRight: "10px" }}
      />
    </>
  )
}
export default InputField
