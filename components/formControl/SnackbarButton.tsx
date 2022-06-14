import { useState } from "react"
import { useSnackbar, SnackbarProvider, withSnackbar } from "notistack"
import { Button, Box, Typography } from "@mui/material"
import Snackbar from "@mui/material/Snackbar"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { makeStyles } from "@mui/styles"

export default function SnackbarButton() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [status, setStatus] = useState(false)
  const action = (key: any) => (
    <Button
      onClick={() => {
        closeSnackbar(key)
      }}
    >
      <CloseOutlinedIcon
        sx={{ color: "white", paddingLeft: "10px", fontSize: "35px" }}
      />
    </Button>
  )
  const handleClick = (variant: any, text: string) => () => {
    enqueueSnackbar(text, {
      variant,
      autoHideDuration: 200000,
      action
    })
    if (variant === "success") {
      setStatus(!status)
    }
  }
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: "100px",
        left: "0",
        zIndex: "1 !important"
      }}
    >
      <Button
        onClick={handleClick(
          "success",
          `User access for 'phuong.pham' has been ${
            status ? "disabled" : "enabled"
          } successfully.`
        )}
      >
        {status ? "Disabled" : "Enabled"}
      </Button>
      <Button
        onClick={handleClick(
          "info",
          "We've redesigned the Amazon Cognito pools console to make it easier to use. The new layouts and workflows are optimized for faster access to relevant information. Learn more about the changes and let us know what you think. Or you can switch back to the old console."
        )}
      >
        Welcome
      </Button>
      <Button
        onClick={handleClick(
          "warning",
          "You can entirely customize your snackbars by passing a custom children in SnackbarProvider props or options parameter of enqueueSnackbar."
        )}
      >
        Show warning snackbar
      </Button>
      <Button
        onClick={handleClick(
          "error",
          "You can entirely customize your snackbars by passing a custom children in SnackbarProvider props or options parameter of enqueueSnackbar."
        )}
      >
        Show error snackbar
      </Button>
    </Box>
  )
}
