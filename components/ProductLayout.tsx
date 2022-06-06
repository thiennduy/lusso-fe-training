import React from "react"
import ProductPage from "../pages/products/index"
import Layout from "./Layout"

function ProductLayout({ children }: any) {
  return <ProductPage>{children}</ProductPage>
}

export default ProductLayout
