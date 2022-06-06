import { Box, Typography, Button } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import InfoIcon from "@mui/icons-material/Info"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CloseIcon from "@mui/icons-material/Close"
import { id } from "date-fns/locale"

type Props = {
  list: {
    id: number
    icon: ReactNode
    backgroundColor: string
    title: string
    description?: string
  }[]
  setList: Function
}
type toastListType = {
  id: number
  icon: ReactNode
  backgroundColor: string
  title: string
  description?: string
}

function TestMessage({ list, setList }: Props) {
  const deleteToast = (id: number) => {
    const updateToast = list.filter((e) => e.id !== id)
    setList(updateToast)
  }
  // setTimeout(() => {
  //   if (list.length) {
  //     setList([])
  //   }
  // }, 4000)
  useEffect(() => {
    const interval = setInterval(() => {
      if (list.length) {
        deleteToast(list[0].id)
      }
    }, 750)
    return () => {
      clearInterval(interval)
    }
  })
  return (
    <>
      {list.map((toast: toastListType, index: number) => (
        <Box
          key={index}
          sx={{
            width: "100%",
            backgroundColor: toast.backgroundColor,
            color: "black",
            position: "relative",
            padding: "10px 5px",
            border: "0.5px solid white",
            borderRadius: "5px"
          }}
        >
          <Box>
            <Typography
              sx={{ fontSize: "16px", display: "flex", alignItems: "center" }}
            >
              {toast.icon}
              <Typography sx={{ marginLeft: "10px", fontSize: "16px" }}>
                {toast.title}
              </Typography>
            </Typography>
            {toast.description ? (
              <Typography sx={{ fontSize: "16px" }}>
                {toast.description}
              </Typography>
            ) : null}
            <Button
              sx={{
                position: "absolute",
                top: "0",
                right: "0"
              }}
              onClick={() => deleteToast(toast.id)}
            >
              <CloseIcon
                sx={{
                  fontSize: "20px",
                  padding: "2px",
                  color: "black"
                }}
              />
            </Button>
          </Box>
        </Box>
      ))}
    </>
  )
}

export default TestMessage
