import React from "react"
import PropTypes, { InferProps } from "prop-types"
import { Controller, useController } from "react-hook-form"
import { TextField } from "@mui/material"

type InputFieldPropsSchema = {
  name: string
  label: string
  disabled?: boolean
}

export function NumberField(props: InputFieldPropsSchema) {
  const { name, label, disabled } = props
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name })
  return (
    <>
      <TextField
        type='number'
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
