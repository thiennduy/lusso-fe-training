/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from "next"
import React from "react"
import { useUser } from "../hooks/user"
import { Box, InputBase, Button } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const router = useRouter()
  const { user, signOut } = useUser()

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} p={1}>
        <h1>Hello, {user?.getUsername()}</h1>
        <Button
          sx={{
            marginLeft: "20px",
            border: "1px solid #2078db",
            textTransform: "none"
          }}
          onClick={() => signOut()}
        >
          Sign out
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }} p={1}>
        <Link href={"/products"} passHref>
          <Button
            sx={{
              marginLeft: "20px",
              border: "1px solid #2078db",
              textTransform: "none"
            }}
          >
            Product list
          </Button>
        </Link>
      </Box>
    </React.Fragment>
  )
}

export default Home
