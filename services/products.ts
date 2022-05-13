import axios from "axios"
import { number } from "yup"
type ListProductsOptions = {
  limit: number
  page: number
}

export const listProducts = async (options: ListProductsOptions) => {
  const data = await axios.post("admin/products/list", options)
  return data.data
}
