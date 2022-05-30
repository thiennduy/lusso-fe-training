import { Box, TextField } from "@mui/material"
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker"
import React from "react"
import { useController } from "react-hook-form"
import {
  DateRangePicker,
  DateRange
} from "@mui/x-date-pickers-pro/DateRangePicker"

type DateTimePickerFieldPropsSchema = {
  name: string
  label?: string
  disabled?: boolean
}

function DatePicker(props: DateTimePickerFieldPropsSchema) {
  const { name, label, disabled } = props

  const {
    field: { value, onChange },
    formState: { errors }
  } = useController({
    name
  })

  return (
    <DateRangePicker
      startText='Start date'
      endText='End date'
      value={value}
      onChange={onChange}
      renderInput={(startProps, endProps) => (
        <React.Fragment>
          <TextField {...startProps} />
          <Box sx={{ mx: 2 }}> to </Box>
          <TextField {...endProps} />
        </React.Fragment>
      )}
    />
  )
}

export default React.memo(DatePicker)
