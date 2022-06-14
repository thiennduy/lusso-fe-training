import Header from "./Header"
import Footer from "./Footer"
import Message from "./Message"
import SnackbarContainer from "./formControl/SnackbarContainer"
import SnackbarButton from "./formControl/SnackbarButton"
import { Box } from "@mui/material"

export default function Layout({ children }: any) {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "1000px",
          backgroundColor: "white",
          width: "100%"
        }}
      >
        <div style={{ width: "100%" }} id='snackbar-dom'></div>
        <SnackbarButton />
        {children}
      </main>
      <Footer />
    </>
  )
}
