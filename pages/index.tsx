/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from "next"
import React from "react"
import { useUser } from "../hooks/user"
import { Box, InputBase } from "@mui/material"
import styles from "../styles/header.module.css"
import SearchIcon from "@mui/icons-material/Search"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { Add } from "@mui/icons-material"
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image"
import ProductDetail from "./p/[slug]"

const Home: NextPage = () => {
  const { user, signOut } = useUser()

  return (
    <React.Fragment>
      <Box className={styles.header__inner}>
        <img
          className={styles.header__logo}
          src='https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_Header_Logo_530e4204-fa7a-4b61-86be-88ff8fb68cfb_300x@2x.png?v=1629497683'
        ></img>
        <Box className={styles.search__inputwrapper}>
          <InputBase className={styles.search__input} placeholder='Search...' />
          <Box className={styles.search__icon}>
            <SearchIcon
              sx={{ width: "100%", fontSize: "30px", verticalAlign: "middle" }}
            />
          </Box>
        </Box>
        <Box className={styles.account__icon}>
          <PersonIcon
            sx={{ width: "100%", fontSize: "40px", verticalAlign: "middle" }}
          />
        </Box>
        <Box className={styles.account__wrapper}>
          <p className={styles.account__action}>Login/Signup</p>
          <p className={styles.account__manage}>My account</p>
        </Box>
        <Box className={styles.cart__container}>
          <Box className={styles.cart__icon}>
            <AddShoppingCartIcon
              sx={{ width: "100%", fontSize: "40px", verticalAlign: "middle" }}
            />
          </Box>
          <p className={styles.cart__text}>Cart</p>
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1 }} p={1}>
        <h1>Hello, {user?.getUsername()}</h1>
        <button onClick={() => signOut()}>Sign out</button>
      </Box>
      <Box>
        <ProductDetail />
      </Box>
      <Box>
        <Image
          src='https://wallpaperaccess.com/full/4386066.jpg'
          height='1000px'
          width='1500px'
        />
      </Box>
    </React.Fragment>
  )
}

export default Home