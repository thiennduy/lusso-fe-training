import logo from "./logo.svg"
import { Box, Button, Typography } from "@mui/material"
import { Children } from "react"
import { useSnackbar, SnackbarProvider } from "notistack"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
import { css } from "@emotion/css"

const containerRoot = css`
  position: relative !important;
  bottom: 0 !important;
`
const variantSuccess = css`
  background-color: #1d8102 !important;
  padding-left: 15px !important;
`
const variantInfo = css`
  background-color: #0073bb !important;
  padding-left: 15px !important;
`
const variantError = css`
  padding-left: 15px !important;
`
const variantWarning = css`
  padding-left: 15px !important;
`
const root = css`
  width: calc(100vw - 10px) !important;
  margin-left: -25px;
`
let snackbarDom: any
if (typeof window !== "undefined") {
  snackbarDom = document.getElementById("snackbar-dom")
  console.log(snackbarDom)
}
function SnackbarContainer({ children }: any) {
  return (
    <SnackbarProvider
      domRoot={snackbarDom}
      iconVariant={{
        success: (
          <CheckCircleOutlineIcon
            sx={{ fontSize: "35px", paddingRight: "10px" }}
          />
        ),
        info: (
          <InfoOutlinedIcon sx={{ fontSize: "35px", paddingRight: "10px" }} />
        ),
        warning: (
          <WarningAmberOutlinedIcon
            sx={{ fontSize: "35px", paddingRight: "10px" }}
          />
        ),
        error: (
          <CancelOutlinedIcon sx={{ fontSize: "35px", paddingRight: "10px" }} />
        )
      }}
      classes={{
        containerRoot: containerRoot,
        variantSuccess: variantSuccess,
        variantInfo: variantInfo,
        variantWarning: variantWarning,
        variantError: variantError,
        root: root
      }}
      maxSnack={5}
      style={{
        width: "auto",
        borderRadius: "0",
        fontSize: "16px",
        fontWeight: "500"
      }}
      dense
    >
      {children}
    </SnackbarProvider>
  )
}

export default SnackbarContainer
