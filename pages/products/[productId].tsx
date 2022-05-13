import { useForm, FormProvider } from "react-hook-form"
import { debounce } from "@mui/material/utils"
import { useState, useEffect } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import InputField from "components/formControl/InputField"
import { SelectField } from "components/formControl/SelectField"
import { NumberField } from "components/formControl/NumberField"
import { useRouter } from "next/router"
import DateTimePickerField from "components/formControl/DatePicker"
import ImagesList from "components/formControl/ImagesList"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "")
}
const defaultValue = {
  name: {
    en: " ",
    vi: " "
  },
  sku: " ",
  slug: " ",
  dimensions: {
    unit: "in",
    length: " ",
    width: " ",
    height: " "
  },
  weight: {
    unit: "g",
    value: " "
  },
  barcodes: {
    upc: " ",
    asin: " ",
    ean: " ",
    isbn: " "
  },
  shortDescription: {
    en: " ",
    vi: " "
  },
  originalPrice: " ",
  specialPrice: " ",
  quantity: " ",
  specialPriceDateRange: [null, null],
  images: []
}
const weightOptions = [
  {
    value: "g",
    label: "gram"
  },
  {
    value: "kg",
    label: "kilogram"
  },
  {
    value: "lb",
    label: "pound"
  }
]
const dimensionOptions = [
  {
    value: "in",
    label: "inches"
  },
  {
    value: "cm",
    label: "centimeters"
  },
  {
    value: "m",
    label: "meters"
  }
]
export default function AddForm() {
  const router = useRouter()
  console.log(router.query)
  const _id: any =
    router.query.productId === "new" ? "" : router.query.productId?.toString()
  const methods = useForm({
    defaultValues: defaultValue
  })
  const fetchProduct = async () => {
    if (!_id) return
    try {
      const res = await axios.get(`admin/products/${_id}`)
      console.log(res.data)
      methods.reset(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [_id])
  const { register, handleSubmit, watch, setValue } = methods
  const onSubmit = async (data: any) => {
    try {
      console.log(data)
      // await axios.post("admin/products", data)
      console.log("done")
    } catch (error) {
      console.log("error", error)
    }
  }
  const watchName: string = watch("name.en")
  useEffect(() => {
    setValue("slug", slugify(watchName || " "))
  }, [watchName])
  return (
    <Container sx={{ backgroundColor: "white", width: "100%" }}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ImagesList name='images' />
          <Box sx={{ margin: "10px" }}>
            <InputField name='name.en' label='Product name - EN' />
            <InputField name='name.vi' label='Tên sản phẩm - VI' />
            <InputField name='sku' label='SKU' />
            <InputField name='slug' label='Slug' />
          </Box>
          <Box sx={{ margin: "10px" }}>
            <NumberField name='weight.value' label='Weight value' />
            <SelectField
              name='weight.unit'
              label='Weight unit'
              options={weightOptions}
            />
          </Box>
          <Box sx={{ margin: "10px" }}>
            <InputField name='barcodes.upc' label='Barcodes UPC' />
            <InputField name='barcodes.asin' label='Barcodes ASIN' />
            <InputField name='barcodes.ean' label='Barcodes EAN' />
            <InputField name='barcodes.isbn' label='Barcodes ISBN' />
          </Box>
          <Box sx={{ margin: "10px" }}>
            <NumberField name='dimensions.length' label='Length' />
            <NumberField name='dimensions.height' label='Height' />
            <NumberField name='dimensions.width' label='Width' />
            <SelectField
              name='dimensions.unit'
              label='Dimensions unit'
              options={dimensionOptions}
            />
          </Box>
          <Box sx={{ margin: "10px" }}>
            <InputField name='quantity' label='Quantity' />
            <InputField
              name='shortDescription.en'
              label='Short description EN'
            />
            <InputField name='shortDescription.vi' label='Mô tả ngắn VI' />
            <NumberField name='originalPrice' label='Original price' />
            <NumberField name='specialPrice' label='Sale-off price' />
          </Box>
          <Box sx={{ margin: "10px" }}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePickerField
                name='specialPriceDateRange'
                label='Sale-off date'
              />
            </LocalizationProvider>
          </Box>
          <input
            type='submit'
            value='submit'
            style={{ padding: "5px 10px", margin: "10px" }}
          />
        </form>
      </FormProvider>
    </Container>
  )
}
