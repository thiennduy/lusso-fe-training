import { useEffect, useState } from "react"
import axios from "axios"
import { listProducts } from "services/products"
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

type Props = {}
const handleOnclick = async (id: any) => {
  await axios.delete(`admin/products/${id}`)
}

const columns: GridColumns = [
  {
    field: "name",
    width: 400,
    renderCell: (params) => {
      return <Link href={"products/" + params.row._id}>{params.value.en}</Link>
    }
  },
  { field: "sku", width: 150 },
  { field: "stockAvailability", width: 150 },
  {
    field: "_id",
    headerName: "Action",
    width: 150,
    renderCell: (row) => {
      return (
        <>
          <Link href={`/products/${row.value}`}>
            <p>Update</p>
          </Link>
          <button onClick={() => handleOnclick(row.value)}>Delete</button>
        </>
      )
    }
  }
]

function ProductPage({}: Props) {
  const [products, setProducts] = useState([])
  const [pageSize, setPageSize] = useState(5)
  const [pageNum, setPageNum] = useState(1)
  const handleChange = (e: any, value: number) => {
    setPageNum(value)
  }
  console.log(pageNum)
  useEffect(() => {
    listProducts({ limit: pageSize, page: pageNum }).then((res) => {
      setProducts(res.docs)
    })
  }, [pageNum, pageSize])
  console.log(products)
  return (
    <div>
      <DataGridPro
        getRowId={(p: any) => p._id}
        columns={columns}
        rows={products}
        autoHeight
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[3, 5]}
        checkboxSelection
        pagination
      />
      <Link href='/products/new'>
        <a>Add new product</a>
      </Link>
      <Pagination
        count={10}
        page={pageNum}
        onChange={handleChange}
        color='primary'
      />
    </div>
  )
}

export default ProductPage