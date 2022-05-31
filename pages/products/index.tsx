import { ReactComponentElement, useEffect, useState, memo } from "react"
import * as React from "react"
import axios from "axios"
import Box from "@mui/material/Box"
import { listProducts } from "services/products"
import Container from "@mui/material/Container"
import Pagination from "@mui/material/Pagination"
import Link from "next/link"
import {
  GridColumnMenu,
  GridColumnMenuContainer,
  GridColumnMenuProps,
  GridFilterMenuItem,
  SortGridMenuItems,
  useGridApiRef,
  DataGridPro,
  GridColumns
} from "@mui/x-data-grid-pro"
import AddForm from "./[productId]"
import Layout from "components/Layout"
import { Button } from "@mui/material"

type Props = {}
const handleOnclick = async (id: any) => {
  await axios.delete(`admin/products/${id}`)
}

const columns: GridColumns = [
  {
    field: "name.en",
    headerName: "Name",
    width: 400,
    renderCell: (params) => {
      // console.log(params)
      return <Link href={"p/" + params.row.slug}>{params.row.name.en}</Link>
    }
  },
  { field: "sku", width: 150, headerName: "Sku" },
  { field: "stockAvailability", width: 150 },
  {
    field: "_id",
    headerName: "Action",
    width: 150,
    renderCell: (row) => {
      return (
        <>
          <Link href={`/products/${row.value}`} passHref>
            <Button
              sx={{
                marginRight: "5px",
                border: "1px solid #2078db",
                textTransform: "none"
              }}
            >
              Update
            </Button>
          </Link>
          <Button
            sx={{ border: "1px solid #2078db", textTransform: "none" }}
            onClick={() => handleOnclick(row.value)}
          >
            Delete
          </Button>
        </>
      )
    }
  }
]

function ProductPage({ children }: any) {
  const [products, setProducts] = useState([])
  const [pageSize, setPageSize] = useState(5)
  const [pageNum, setPageNum] = useState(1)
  const [filterModel, setFilterModel] = useState(undefined)
  const filterProduct = async () => {
    const res = await axios.post("admin/products/list", {
      filterModel: filterModel
    })
    setPageNum(1)
    return res.data.docs
  }
  useEffect(() => {
    filterProduct().then((data) => setProducts(data))
  }, [filterModel])
  const handleChange = (e: any, value: number) => {
    setPageNum(value)
  }
  // console.log(pageNum)
  useEffect(() => {
    listProducts({ limit: pageSize, page: pageNum }).then((res) => {
      // console.log(res)
      setProducts(res.docs)
    })
  }, [pageNum, pageSize])
  console.log(products)
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "1200px",
        backgroundColor: "white",
        position: "relative",
        margin: "0px"
      }}
    >
      <Container
        sx={{
          backgroundColor: "white",
          width: "100%",
          padding: "30px",
          border: "1px solid black"
        }}
      >
        <DataGridPro
          getRowId={(p: any) => p._id}
          columns={columns}
          rows={products}
          autoHeight
          pageSize={pageSize}
          filterMode='server'
          filterModel={filterModel}
          onFilterModelChange={(model: any) => {
            console.log(model)
            setFilterModel(model)
          }}
          onPageSizeChange={(newPageSize: any) => setPageSize(newPageSize)}
          rowsPerPageOptions={[3, 5]}
          checkboxSelection
          pagination
        />
        <Button
          sx={{
            margin: "10px 0",
            border: "1px solid #2078db",
            textTransform: "none"
          }}
        >
          <Link href='/products/new'>
            <a>Add new product</a>
          </Link>
        </Button>
        <Link href={"/"} passHref>
          <Button
            sx={{
              marginLeft: "5px",
              border: "1px solid #2078db",
              textTransform: "none"
            }}
          >
            Back to home page
          </Button>
        </Link>
        <Pagination
          count={7}
          page={pageNum}
          onChange={handleChange}
          color='primary'
        />
      </Container>
      <Box>{children}</Box>
    </Box>
  )
}
export default memo(ProductPage)
