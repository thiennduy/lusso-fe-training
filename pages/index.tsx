import type { NextPage } from 'next'
import React from 'react'
import {useUser} from "../hooks/user";
import Box from "@mui/material/Box";

const Home: NextPage = () => {
  const { user, signOut } = useUser()

  return (
      <React.Fragment>
        <Box sx={{ flexGrow: 1 }} p={1}>
          <h1>Hello, {user?.getUsername()}</h1>
          <button onClick={() => signOut()}>Sign out</button>
        </Box>
      </React.Fragment>
  )
}

export default Home
