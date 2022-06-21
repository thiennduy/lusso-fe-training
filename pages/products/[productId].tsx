import { useForm, FormProvider } from "react-hook-form"
import { debounce } from "@mui/material/utils"
import { useEffect, useCallback } from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import {
  InputField,
  BrandName,
  DatePicker,
  ImagesList,
  InputSlug,
  NumberField,
  RichText,
  SelectField
} from "components/formControl/index"

import { useRouter } from "next/router"
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import ProductLayout from "components/ProductLayout"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import Convert from "components/formControl/Convert"

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
const editorjsValue = {
  time: 1655699756061,
  blocks: [
    {
      id: "YVHEV5ppxa",
      type: "paragraph",
      data: {
        text: "<i>Chảo chống dính&nbsp;Michelangelo</i>&nbsp;có thiết kế sang trọng, kiểu dáng hiện đại, phù hợp với mọi căn bếp. <b>Chảo có chất liệu cao cấp và công nghệ đúc tiên tiến</b> giúp dẫn nhiệt tốt. <b>Chất liệu: Nhôm</b> và lớp phủ cao cấp từ&nbsp;Whitford giúp chảo rất chắc chắn và bền bỉ, <i>dẫn nhiệt đều và nhanh.</i>"
      }
    },
    {
      id: "30_0qTzw-P",
      type: "header",
      data: {
        text: "THÔNG TIN SẢN PHẨM",
        level: 2
      }
    },
    {
      id: "NMJg4mRvlz",
      type: "list",
      data: {
        style: "unordered",
        items: [
          "Kích thước: 28 cm, phù hợp với nhu cầu sử dụng của gia đình.",
          "Kích thước: 29 cm, phù hợp với nhu cầu sử dụng của gia đình.",
          "Kích thước: 30 cm, phù hợp với nhu cầu sử dụng của gia đình."
        ]
      }
    }
  ]
}

function AddForm() {
  const slatejsValue = Convert(editorjsValue)
  console.log("Value cua SlateJS day ne:", slatejsValue)
  const router = useRouter()
  const _id: any =
    router.query.productId === "new" ? "" : router.query.productId?.toString()
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
    images: [],
    brand: {
      _id: " ",
      enabled: true,
      name: " ",
      slug: " "
    },
    description:
      _id === ""
        ? [
            {
              type: "paragraph",
              children: [{ text: " " }]
            }
          ]
        : undefined
  }
  const methods = useForm({
    defaultValues: defaultValue
  })
  const fetchProduct = async () => {
    if (!_id) return
    try {
      const res = await axios.get(`admin/products/${_id}`)
      console.log("Test: ", res.data.description)
      methods.reset(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const onSubmit = async (data: any) => {
    console.log(data.description)
    try {
      if (_id === "") {
        await axios.post("admin/products", data)
      } else {
        await axios.put(`admin/products/${_id}`, data)
      }
      console.log(data)
      console.log("done")
    } catch (error) {
      console.log("error", error)
    }
  }
  useEffect(() => {
    fetchProduct()
  }, [_id])
  const { register, handleSubmit, watch, setValue } = methods

  const onNameChanged = useCallback(
    debounce((name) => {
      const slug = name ? slugify(name) : " "
      setValue("slug", slug)
    }, 2000),
    [setValue]
  )
  return (
    <Box
      sx={{
        border: "1px solid black",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: "100%",
        height: "150%",
        position: "absolute",
        top: "0",
        left: "0"
      }}
      onClick={() => router.push("/products")}
    >
      <Container
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: "30px",
          display: "block"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ border: "1px solid #999", padding: "30px" }}
          >
            <DndProvider backend={HTML5Backend}>
              <ImagesList name='images' />
            </DndProvider>
            <Box sx={{ margin: "10px" }}>
              <InputField name='name.en' label='Product name - EN' />
              <InputField name='name.vi' label='Tên sản phẩm - VI' />
              <InputField name='sku' label='SKU' />
              <InputSlug
                control={methods.control}
                onChangeName={onNameChanged}
              />
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
            <Box sx={{ margin: "20px 10px" }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  name='specialPriceDateRange'
                  label='Sale-off date'
                />
              </LocalizationProvider>
            </Box>
            <Box sx={{ margin: "20px 10px" }}>
              <BrandName name='brand' label='Brand' control={methods.control} />
            </Box>
            <Box
              sx={{
                margin: "10px",
                padding: "15px",
                border: "1px solid #c4c4c4",
                borderRadius: "3px"
              }}
            >
              <RichText name='description' label='Description' />
            </Box>
            <input
              type='submit'
              value='Submit'
              style={{
                padding: "5px 10px",
                margin: "10px",
                backgroundColor: "#F59794",
                color: "white",
                fontWeight: "700",
                borderRadius: "5px",
                border: "1px solid #333"
              }}
            />
          </form>
        </FormProvider>
      </Container>
    </Box>
  )
}
AddForm.getLayout = function getLayout(page: any) {
  return <ProductLayout>{page}</ProductLayout>
}

export default AddForm
