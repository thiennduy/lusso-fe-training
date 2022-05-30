import { useState, useCallback, useEffect } from "react"
import {
  Controller,
  useFormContext,
  useController,
  useForm
} from "react-hook-form"
import TextField from "@mui/material/TextField"
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete"
import {
  Container,
  Box,
  debounce,
  Input,
  Button,
  ImageList,
  ImageListItem,
  Stack
} from "@mui/material"
import axios from "axios"

type BrandNameProps = {
  label: string
  name: string
  control: any
}
export interface Brand {
  description?: string
  _id: number
  name: string
  slug: string
  enabled: boolean
}
export default function BrandName({ label, name, control }: BrandNameProps) {
  const [text, setText] = useState("")
  const [options, setOptions] = useState<Array<Brand>>([])
  const searchBrand = useCallback(async (text: string) => {
    try {
      const data = {
        filterModel: {
          items: [
            {
              columnField: "name",
              value: text,
              operatorValue: "contains"
            }
          ]
        }
      }
      const res = await axios.post("admin/brands/list", data)
      console.log("res: ", res.data.docs)
      setOptions(res.data.docs)
    } catch (error) {
      console.log("Fetch brands error: ", error)
    }
  }, [])
  const onChangedInput = useCallback(
    debounce((name: string) => {
      searchBrand(name)
    }, 2000),
    []
  )
  useEffect(() => {
    onChangedInput("")
  }, [name])
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, name } }) => (
        <Autocomplete
          sx={{ width: 300 }}
          id={name}
          options={options}
          getOptionLabel={(brand) => brand.name}
          value={value}
          renderInput={(params) => (
            <TextField
              {...params}
              variant='outlined'
              label={label}
              placeholder='Type to filter list'
              fullWidth
            />
          )}
          onChange={(_, data) => {
            onChange(data)
            console.log("data: ", data)
            return data
          }}
        />
      )}
    />
  )
}
