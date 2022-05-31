import React from "react"
import { Box, InputBase } from "@mui/material"
import styles from "../styles/header.module.css"
import SearchIcon from "@mui/icons-material/Search"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import PersonIcon from "@mui/icons-material/Person"
import { useRouter } from "next/router"

const Header = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push("/products")
  }
  return (
    <React.Fragment>
      <Box className={styles.header__inner}>
        <img
          onClick={handleClick}
          className={styles.header__logo}
          src='https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_Header_Logo_530e4204-fa7a-4b61-86be-88ff8fb68cfb_300x@2x.png?v=1629497683'
          alt='test'
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
    </React.Fragment>
  )
}

export default Header
