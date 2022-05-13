import React from "react"
import PropTypes, { InferProps } from "prop-types"
import { Controller, useFormContext, useController } from "react-hook-form"
import { TextField } from "@mui/material"

type InputFieldPropsSchema = {
  //   form: any;
  name: string
  label: string
  disabled?: boolean
}

function InputField(props: InputFieldPropsSchema) {
  const { name, label, disabled } = props
  //   const {
  //     formState: { errors },
  //     register,
  //   } = useFormContext();

  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    name
  })

  //   const hasError = errors[name];

  //   console.log('hasError: ', errors);
  //   console.log(name);

  return (
    <>
      <TextField
        id={name}
        label={label}
        value={value}
        onChange={onChange}
        variant='standard'
        // error={hasError}
        // helperText={hasError}
        disabled={disabled}
        sx={{ marginRight: "10px" }}
      />
    </>
  )
}
export default InputField
