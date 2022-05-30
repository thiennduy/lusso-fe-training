import React from "react"
import PropTypes, { InferProps } from "prop-types"
import { Controller, useController } from "react-hook-form"
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material"

type SelectFieldPropsSchema = {
  name: string
  label: string
  disabled?: boolean
  options: {
    value: string
    label: string
  }[]
}

export default function SelectField(props: SelectFieldPropsSchema) {
  const { name, label, disabled, options } = props
  const {
    field: { value, onChange },
    fieldState: { error }
  } = useController({ name })
  return (
    <>
      <FormControl sx={{ minWidth: "100px" }}>
        <InputLabel id={name}>{label}</InputLabel>
        <Select
          labelId={name}
          id={name}
          value={value}
          label={label}
          onChange={onChange}
        >
          {options.map((item, index) => {
            return (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  )
}
