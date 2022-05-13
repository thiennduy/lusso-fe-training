import React from "react"
import { useUser } from "../hooks/user"
import { Box, InputBase, Typography } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import { Add } from "@mui/icons-material"
import PinterestIcon from "@mui/icons-material/Pinterest"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from "@mui/icons-material/YouTube"
import PersonIcon from "@mui/icons-material/Person"
import Image from "next/image"
import styles from "../styles/footer.module.css"

const Footer = () => {
  return (
    <React.Fragment>
      <Box className={styles.strengthContainer}>
        <Box className={styles.strengthWrapper}>
          <Box className={styles.strengthIcon}>
            <svg focusable='false' viewBox='0 0 24 24' role='presentation'>
              <g strokeWidth='1.5' fill='none' fillRule='evenodd'>
                <path d='M6.5 3.25l12 6' stroke='#af1091'></path>
                <path stroke='#ffffff' d='M23 7l-10 5L1 6M13 12v11'></path>
                <path
                  stroke='#ffffff'
                  strokeLinecap='square'
                  d='M23 7v10l-10 6-12-6V6l10-5z'
                ></path>
              </g>
            </svg>
          </Box>
          <Box>
            <Typography className={styles.strengthText}>
              FREE SHIPPING
            </Typography>
            <Typography className={styles.strengthDescription}>
              On all domestic orders
            </Typography>
          </Box>
        </Box>
        <Box className={styles.strengthWrapper}>
          <Box className={styles.strengthIcon}>
            <svg focusable='false' viewBox='0 0 20 24' role='presentation'>
              <g
                transform='translate(1 1)'
                strokeWidth='1.5'
                fill='none'
                fillRule='evenodd'
                strokeLinecap='square'
              >
                <path stroke='#ffffff' d='M9 9v4h4'></path>
                <circle stroke='#ffffff' cx='9' cy='13' r='9'></circle>
                <path d='M6 0h6M9 0v1' stroke='#af1091'></path>
              </g>
            </svg>
          </Box>
          <Box>
            <Typography className={styles.strengthText}>
              FAST PRODUCTION
            </Typography>
            <Typography className={styles.strengthDescription}>
              Custom orders ready in less than 3 days
            </Typography>
          </Box>
        </Box>
        <Box className={styles.strengthWrapper}>
          <Box className={styles.strengthIcon}>
            <svg focusable='false' viewBox='0 0 24 24' role='presentation'>
              <g
                strokeWidth='1.5'
                fill='none'
                fillRule='evenodd'
                strokeLinecap='square'
              >
                <path
                  d='M10 17H4c-1.7 0-3 1.3-3 3v3h12v-3c0-1.7-1.3-3-3-3zM7 14c-1.7 0-3-1.3-3-3v-1c0-1.7 1.3-3 3-3s3 1.3 3 3v1c0 1.7-1.3 3-3 3z'
                  stroke='#ffffff'
                ></path>
                <path stroke='#af1091' d='M13 1v10l4-3h6V1z'></path>
              </g>
            </svg>
          </Box>
          <Box>
            <Typography className={styles.strengthText}>
              24/7 CUSTOMER SERVICE
            </Typography>
            <Typography className={styles.strengthDescription}>
              Have a question? We're here for you
            </Typography>
          </Box>
        </Box>
        <Box className={styles.strengthWrapper}>
          <Box className={styles.strengthIcon}>
            <svg focusable='false' viewBox='0 0 24 24' role='presentation'>
              <g
                strokeWidth='1.5'
                fill='none'
                fillRule='evenodd'
                strokeLinecap='square'
              >
                <path
                  d='M1 5h22M1 9h22M9 17H3c-1.105 0-2-.895-2-2V3c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v10M5 13h5'
                  stroke='#ffffff'
                ></path>
                <path
                  stroke='#af1091'
                  d='M13 16h8v7h-8zM15 16v-2c0-1.1.9-2 2-2s2 .9 2 2v2M17 19v1'
                ></path>
              </g>
            </svg>
          </Box>
          <Box>
            <Typography className={styles.strengthText}>
              SECURE PAYMENT
            </Typography>
            <Typography className={styles.strengthDescription}>
              Guaranteed safe checkout with multiple options
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.footerContainer}>
        <Box className={styles.footerInfo}>
          <Typography
            sx={{
              color: "#9f0e8a",
              fontWeight: "500",
              marginBottom: "20px",
              fontSize: "18px"
            }}
          >
            SUPPORT
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "500", marginBottom: "10px" }}
          >
            1-714-603-7760
          </Typography>
          <Typography
            sx={{ color: "white", fontWeight: "500", marginBottom: "10px" }}
          >
            info@knightowllabs.com
          </Typography>
          <Typography sx={{ color: "white" }}>
            Mon-Fri 10AM-5PM (PST)
          </Typography>
        </Box>
        <Box className={styles.footerLinks}>
          <Typography
            sx={{
              color: "#9f0e8a",
              fontWeight: "500",
              marginBottom: "20px",
              fontSize: "18px"
            }}
          >
            SHOP
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Customize Your Own
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            New Releases
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Best Sellers
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            AIO Covers
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            RGB GPU Backplates
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            RGB Support Brackets
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            LED Signs
          </Typography>
        </Box>
        <Box className={styles.footerLinks}>
          <Typography
            sx={{
              color: "#9f0e8a",
              fontWeight: "500",
              marginBottom: "20px",
              fontSize: "18px"
            }}
          >
            INFORMATION
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            About Us
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            FAQ
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Shipping & Returns
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Terms & Conditions
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Privacy Policy
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Contact Us
          </Typography>
          <Typography
            sx={{ color: "white", marginBottom: "20px", fontSize: "16px" }}
          >
            Tracking Your Order
          </Typography>
        </Box>
      </Box>
      <Box className={styles.contactContainer}>
        <Box>
          <Typography className={styles.contactText}>
            © 2022 Knight Owl Labs Powered by Shopify
          </Typography>
        </Box>
        <Box>
          <Typography className={styles.contactText}>Follow Us</Typography>
          <Box>
            <FacebookIcon className={styles.contactIcon} />
            <TwitterIcon className={styles.contactIcon} />
            <InstagramIcon className={styles.contactIcon} />
            <YouTubeIcon className={styles.contactIcon} />
            <PinterestIcon className={styles.contactIcon} />
          </Box>
        </Box>
        <Box>
          <Typography className={styles.contactText}>We Accept</Typography>
          <div className={styles.paymentList}>
            <svg
              className='payment-list__item'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 38 24'
              width='38'
              height='24'
              aria-labelledby='pi-american_express'
            >
              <title id='pi-american_express'>American Express</title>
              <g fill='none'>
                <path
                  fill='#000'
                  d='M35,0 L3,0 C1.3,0 0,1.3 0,3 L0,21 C0,22.7 1.4,24 3,24 L35,24 C36.7,24 38,22.7 38,21 L38,3 C38,1.3 36.6,0 35,0 Z'
                  opacity='.07'
                ></path>
                <path
                  fill='#006FCF'
                  d='M35,1 C36.1,1 37,1.9 37,3 L37,21 C37,22.1 36.1,23 35,23 L3,23 C1.9,23 1,22.1 1,21 L1,3 C1,1.9 1.9,1 3,1 L35,1'
                ></path>
                <path
                  fill='#FFF'
                  d='M8.971,10.268 L9.745,12.144 L8.203,12.144 L8.971,10.268 Z M25.046,10.346 L22.069,10.346 L22.069,11.173 L24.998,11.173 L24.998,12.412 L22.075,12.412 L22.075,13.334 L25.052,13.334 L25.052,14.073 L27.129,11.828 L25.052,9.488 L25.046,10.346 L25.046,10.346 Z M10.983,8.006 L14.978,8.006 L15.865,9.941 L16.687,8 L27.057,8 L28.135,9.19 L29.25,8 L34.013,8 L30.494,11.852 L33.977,15.68 L29.143,15.68 L28.065,14.49 L26.94,15.68 L10.03,15.68 L9.536,14.49 L8.406,14.49 L7.911,15.68 L4,15.68 L7.286,8 L10.716,8 L10.983,8.006 Z M19.646,9.084 L17.407,9.084 L15.907,12.62 L14.282,9.084 L12.06,9.084 L12.06,13.894 L10,9.084 L8.007,9.084 L5.625,14.596 L7.18,14.596 L7.674,13.406 L10.27,13.406 L10.764,14.596 L13.484,14.596 L13.484,10.661 L15.235,14.602 L16.425,14.602 L18.165,10.673 L18.165,14.603 L19.623,14.603 L19.647,9.083 L19.646,9.084 Z M28.986,11.852 L31.517,9.084 L29.695,9.084 L28.094,10.81 L26.546,9.084 L20.652,9.084 L20.652,14.602 L26.462,14.602 L28.076,12.864 L29.624,14.602 L31.499,14.602 L28.987,11.852 L28.986,11.852 Z'
                ></path>
              </g>
            </svg>

            <svg
              className='payment-list__item'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              x='0'
              y='0'
              width='38'
              height='24'
              viewBox='0 0 165.521 105.965'
              xmlSpace='preserve'
              aria-labelledby='pi-apple_pay'
            >
              <title id='pi-apple_pay'>Apple Pay</title>
              <path
                fill='#000'
                d='M150.698 0H14.823c-.566 0-1.133 0-1.698.003-.477.004-.953.009-1.43.022-1.039.028-2.087.09-3.113.274a10.51 10.51 0 0 0-2.958.975 9.932 9.932 0 0 0-4.35 4.35 10.463 10.463 0 0 0-.975 2.96C.113 9.611.052 10.658.024 11.696a70.22 70.22 0 0 0-.022 1.43C0 13.69 0 14.256 0 14.823v76.318c0 .567 0 1.132.002 1.699.003.476.009.953.022 1.43.028 1.036.09 2.084.275 3.11a10.46 10.46 0 0 0 .974 2.96 9.897 9.897 0 0 0 1.83 2.52 9.874 9.874 0 0 0 2.52 1.83c.947.483 1.917.79 2.96.977 1.025.183 2.073.245 3.112.273.477.011.953.017 1.43.02.565.004 1.132.004 1.698.004h135.875c.565 0 1.132 0 1.697-.004.476-.002.952-.009 1.431-.02 1.037-.028 2.085-.09 3.113-.273a10.478 10.478 0 0 0 2.958-.977 9.955 9.955 0 0 0 4.35-4.35c.483-.947.789-1.917.974-2.96.186-1.026.246-2.074.274-3.11.013-.477.02-.954.022-1.43.004-.567.004-1.132.004-1.699V14.824c0-.567 0-1.133-.004-1.699a63.067 63.067 0 0 0-.022-1.429c-.028-1.038-.088-2.085-.274-3.112a10.4 10.4 0 0 0-.974-2.96 9.94 9.94 0 0 0-4.35-4.35A10.52 10.52 0 0 0 156.939.3c-1.028-.185-2.076-.246-3.113-.274a71.417 71.417 0 0 0-1.431-.022C151.83 0 151.263 0 150.698 0z'
              ></path>
              <path
                fill='#FFF'
                d='M150.698 3.532l1.672.003c.452.003.905.008 1.36.02.793.022 1.719.065 2.583.22.75.135 1.38.34 1.984.648a6.392 6.392 0 0 1 2.804 2.807c.306.6.51 1.226.645 1.983.154.854.197 1.783.218 2.58.013.45.019.9.02 1.36.005.557.005 1.113.005 1.671v76.318c0 .558 0 1.114-.004 1.682-.002.45-.008.9-.02 1.35-.022.796-.065 1.725-.221 2.589a6.855 6.855 0 0 1-.645 1.975 6.397 6.397 0 0 1-2.808 2.807c-.6.306-1.228.511-1.971.645-.881.157-1.847.2-2.574.22-.457.01-.912.017-1.379.019-.555.004-1.113.004-1.669.004H14.801c-.55 0-1.1 0-1.66-.004a74.993 74.993 0 0 1-1.35-.018c-.744-.02-1.71-.064-2.584-.22a6.938 6.938 0 0 1-1.986-.65 6.337 6.337 0 0 1-1.622-1.18 6.355 6.355 0 0 1-1.178-1.623 6.935 6.935 0 0 1-.646-1.985c-.156-.863-.2-1.788-.22-2.578a66.088 66.088 0 0 1-.02-1.355l-.003-1.327V14.474l.002-1.325a66.7 66.7 0 0 1 .02-1.357c.022-.792.065-1.717.222-2.587a6.924 6.924 0 0 1 .646-1.981c.304-.598.7-1.144 1.18-1.623a6.386 6.386 0 0 1 1.624-1.18 6.96 6.96 0 0 1 1.98-.646c.865-.155 1.792-.198 2.586-.22.452-.012.905-.017 1.354-.02l1.677-.003h135.875'
              ></path>
              <g>
                <g>
                  <path
                    fill='#000'
                    d='M43.508 35.77c1.404-1.755 2.356-4.112 2.105-6.52-2.054.102-4.56 1.355-6.012 3.112-1.303 1.504-2.456 3.959-2.156 6.266 2.306.2 4.61-1.152 6.063-2.858'
                  ></path>
                  <path
                    fill='#000'
                    d='M45.587 39.079c-3.35-.2-6.196 1.9-7.795 1.9-1.6 0-4.049-1.8-6.698-1.751-3.447.05-6.645 2-8.395 5.1-3.598 6.2-.95 15.4 2.55 20.45 1.699 2.5 3.747 5.25 6.445 5.151 2.55-.1 3.549-1.65 6.647-1.65 3.097 0 3.997 1.65 6.696 1.6 2.798-.05 4.548-2.5 6.247-5 1.95-2.85 2.747-5.6 2.797-5.75-.05-.05-5.396-2.101-5.446-8.251-.05-5.15 4.198-7.6 4.398-7.751-2.399-3.548-6.147-3.948-7.447-4.048'
                  ></path>
                </g>
                <g>
                  <path
                    fill='#000'
                    d='M78.973 32.11c7.278 0 12.347 5.017 12.347 12.321 0 7.33-5.173 12.373-12.529 12.373h-8.058V69.62h-5.822V32.11h14.062zm-8.24 19.807h6.68c5.07 0 7.954-2.729 7.954-7.46 0-4.73-2.885-7.434-7.928-7.434h-6.706v14.894z'
                  ></path>
                  <path
                    fill='#000'
                    d='M92.764 61.847c0-4.809 3.665-7.564 10.423-7.98l7.252-.442v-2.08c0-3.04-2.001-4.704-5.562-4.704-2.938 0-5.07 1.507-5.51 3.82h-5.252c.157-4.86 4.731-8.395 10.918-8.395 6.654 0 10.995 3.483 10.995 8.89v18.663h-5.38v-4.497h-.13c-1.534 2.937-4.914 4.782-8.579 4.782-5.406 0-9.175-3.222-9.175-8.057zm17.675-2.417v-2.106l-6.472.416c-3.64.234-5.536 1.585-5.536 3.95 0 2.288 1.975 3.77 5.068 3.77 3.95 0 6.94-2.522 6.94-6.03z'
                  ></path>
                  <path
                    fill='#000'
                    d='M120.975 79.652v-4.496c.364.051 1.247.103 1.715.103 2.573 0 4.029-1.09 4.913-3.899l.52-1.663-9.852-27.293h6.082l6.863 22.146h.13l6.862-22.146h5.927l-10.216 28.67c-2.34 6.577-5.017 8.735-10.683 8.735-.442 0-1.872-.052-2.261-.157z'
                  ></path>
                </g>
              </g>
            </svg>

            <svg
              className='payment-list__item'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              width='38'
              height='24'
              aria-labelledby='pi-diners_club'
            >
              <title id='pi-diners_club'>Diners Club</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              ></path>
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              ></path>
              <path
                d='M12 12v3.7c0 .3-.2.3-.5.2-1.9-.8-3-3.3-2.3-5.4.4-1.1 1.2-2 2.3-2.4.4-.2.5-.1.5.2V12zm2 0V8.3c0-.3 0-.3.3-.2 2.1.8 3.2 3.3 2.4 5.4-.4 1.1-1.2 2-2.3 2.4-.4.2-.4.1-.4-.2V12zm7.2-7H13c3.8 0 6.8 3.1 6.8 7s-3 7-6.8 7h8.2c3.8 0 6.8-3.1 6.8-7s-3-7-6.8-7z'
                fill='#3086C8'
              ></path>
            </svg>

            <svg
              className='payment-list__item'
              viewBox='0 0 38 24'
              width='38'
              height='24'
              role='img'
              aria-labelledby='pi-discover'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title id='pi-discover'>Discover</title>
              <path
                fill='#000'
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              ></path>
              <path
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z'
                fill='#fff'
              ></path>
              <path
                d='M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94l-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z'
                fill='#231F20'
              ></path>
              <path
                d='M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z'
                fill='url(#pi-paint0_linear)'
              ></path>
              <path
                opacity='.65'
                d='M20.16 12.86a2.931 2.931 0 100-5.862 2.931 2.931 0 000 5.862z'
                fill='url(#pi-paint1_linear)'
              ></path>
              <path
                d='M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z'
                fill='#231F20'
              ></path>
              <path
                d='M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z'
                fill='#231F20'
              ></path>
              <path
                d='M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 002-1.984l.024-3.02L37 12.985z'
                fill='#F48120'
              ></path>
              <defs>
                <linearGradient
                  id='pi-paint0_linear'
                  x1='21.657'
                  y1='12.275'
                  x2='19.632'
                  y2='9.104'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F89F20'></stop>
                  <stop offset='.25' stopColor='#F79A20'></stop>
                  <stop offset='.533' stopColor='#F68D20'></stop>
                  <stop offset='.62' stopColor='#F58720'></stop>
                  <stop offset='.723' stopColor='#F48120'></stop>
                  <stop offset='1' stopColor='#F37521'></stop>
                </linearGradient>
                <linearGradient
                  id='pi-paint1_linear'
                  x1='21.338'
                  y1='12.232'
                  x2='18.378'
                  y2='6.446'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#F58720'></stop>
                  <stop offset='.359' stopColor='#E16F27'></stop>
                  <stop offset='.703' stopColor='#D4602C'></stop>
                  <stop offset='.982' stopColor='#D05B2E'></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              className='payment-list__item'
              width='38'
              height='24'
              role='img'
              aria-labelledby='pi-facebook_pay'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <title id='pi-facebook_pay'>Facebook Pay</title>
              <path
                xmlns='http://www.w3.org/2000/svg'
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              ></path>
              <path
                xmlns='http://www.w3.org/2000/svg'
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.29 5.672h.035v.874H8.29c-2.256 0-4.165 1.46-4.8 3.472l-.849-.265c.75-2.365 2.995-4.081 5.649-4.081z'
                fill='url(#pi-paint0_linear)'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.325 6.546v-.874H8.29c2.662 0 4.914 1.728 5.656 4.105l-.848.266c-.624-2.014-2.523-3.482-4.773-3.497z'
                fill='url(#pi-paint1_linear)'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.243 15.478l.523.708a5.96 5.96 0 01-3.476 1.108 5.96 5.96 0 01-3.43-1.075l.524-.708c.82.573 1.823.91 2.906.91 1.104 0 2.124-.35 2.953-.943z'
                fill='url(#pi-paint2_linear)'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2.642 9.753l.848.265a4.856 4.856 0 00-.225 1.465c0 1.663.836 3.134 2.119 4.028l-.523.708c-1.453-1.017-2.417-2.663-2.483-4.532v-.407c.019-.53.11-1.042.264-1.527z'
                fill='url(#pi-paint3_linear)'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M14.205 11.483c0 1.934-.96 3.646-2.44 4.703l-.523-.707a4.904 4.904 0 002.073-3.996c0-.502-.076-.987-.218-1.443l.848-.266c.17.54.26 1.114.26 1.71z'
                fill='url(#pi-paint4_linear)'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M11.06 12.218c0-.308-.215-.446-.692-.446H9.193v.89h1.175c.485 0 .692-.133.692-.444zm-.857-1.866h-1.01v.89h1.01c.457 0 .664-.138.664-.443 0-.306-.21-.447-.664-.447zm1.474 1.922c0 .594-.474.932-1.31.932H8.64c-.03 0-.05-.02-.05-.049v-3.3c0-.029.02-.048.05-.048h1.575c.813 0 1.26.313 1.26.878 0 .335-.15.604-.583.733.548.114.77.437.785.854zM7.872 9.857v.461c0 .03-.02.049-.05.049h-2v.861h1.66c.03 0 .049.02.049.049v.46c0 .03-.02.05-.05.05H5.823v1.37c0 .03-.02.049-.05.049H5.27c-.03 0-.05-.02-.05-.049v-3.3c0-.029.02-.048.05-.048h2.553c.03 0 .05.02.05.048z'
                fill='#64717D'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M31.214 9.82a49.278 49.278 0 001.688 4.454l1.55-4.454h1.239l-2.221 5.754c-.284.737-.621 1.305-1.011 1.705-.39.4-.913.6-1.568.6-.163 0-.317-.013-.46-.039v-1.005c.12.019.227.028.317.028.398 0 .722-.11.972-.332.25-.221.47-.546.659-.974a45.905 45.905 0 01-1.312-2.824 80.59 80.59 0 01-1.17-2.913h1.317zm-4.6-.134c.696 0 1.256.197 1.68.591.425.395.637.985.637 1.77V15.4h-1.09v-.91c-.22.328-.503.58-.847.757a2.542 2.542 0 01-1.176.265c-.599 0-1.064-.152-1.395-.455-.331-.303-.497-.703-.497-1.197 0-.491.187-.903.56-1.234.373-.33.968-.497 1.786-.497h1.545v-.016c0-.938-.439-1.407-1.317-1.407-.368 0-.677.065-.93.196-.251.13-.455.312-.61.547l-.778-.62c.242-.368.561-.651.957-.848a2.985 2.985 0 011.35-.296h.124zM20.16 7.588c.996 0 1.74.233 2.232.7.492.467.739 1.1.739 1.9 0 .797-.247 1.43-.739 1.898-.492.469-1.236.703-2.232.703h-2.136v2.612H16.83V7.588h3.329zm7.657 5.419h-1.5c-.446 0-.765.07-.957.21a.665.665 0 00-.286.566c0 .49.33.736.994.736.439 0 .804-.097 1.096-.293.292-.195.51-.46.653-.795v-.424zm-7.77-4.326h-2.023v3.014h2.022c.648 0 1.12-.125 1.418-.377.297-.25.445-.627.445-1.13 0-.502-.148-.879-.445-1.13-.298-.251-.77-.377-1.418-.377z'
                fill='#1B2529'
              ></path>
              <defs>
                <linearGradient
                  id='pi-paint0_linear'
                  x1='8.325'
                  y1='6.803'
                  x2='3.828'
                  y2='10.121'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#24D365'></stop>
                  <stop offset='1' stopColor='#139DBD'></stop>
                </linearGradient>
                <linearGradient
                  id='pi-paint1_linear'
                  x1='8.29'
                  y1='6.774'
                  x2='12.8'
                  y2='10.111'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#23D068'></stop>
                  <stop offset='.52' stopColor='#EACD36'></stop>
                  <stop offset='1' stopColor='#FF6C5C'></stop>
                </linearGradient>
                <linearGradient
                  id='pi-paint2_linear'
                  x1='5.121'
                  y1='15.876'
                  x2='11.496'
                  y2='15.876'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#266FF3'></stop>
                  <stop offset='1' stopColor='#C439D6'></stop>
                </linearGradient>
                <linearGradient
                  id='pi-paint3_linear'
                  x1='4.135'
                  y1='15.894'
                  x2='2.281'
                  y2='10.39'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#266FF3'></stop>
                  <stop offset='1' stopColor='#149FBA'></stop>
                </linearGradient>
                <linearGradient
                  id='pi-paint4_linear'
                  x1='12.899'
                  y1='9.913'
                  x2='11.041'
                  y2='15.394'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#FF6C5C'></stop>
                  <stop offset='1' stopColor='#C439D6'></stop>
                </linearGradient>
              </defs>
            </svg>

            <svg
              className='payment-list__item'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 38 24'
              width='38'
              height='24'
              aria-labelledby='pi-google_pay'
            >
              <title id='pi-google_pay'>Google Pay</title>
              <path
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
                fill='#000'
                opacity='.07'
              ></path>
              <path
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
                fill='#FFF'
              ></path>
              <path
                d='M18.093 11.976v3.2h-1.018v-7.9h2.691a2.447 2.447 0 0 1 1.747.692 2.28 2.28 0 0 1 .11 3.224l-.11.116c-.47.447-1.098.69-1.747.674l-1.673-.006zm0-3.732v2.788h1.698c.377.012.741-.135 1.005-.404a1.391 1.391 0 0 0-1.005-2.354l-1.698-.03zm6.484 1.348c.65-.03 1.286.188 1.778.613.445.43.682 1.03.65 1.649v3.334h-.969v-.766h-.049a1.93 1.93 0 0 1-1.673.931 2.17 2.17 0 0 1-1.496-.533 1.667 1.667 0 0 1-.613-1.324 1.606 1.606 0 0 1 .613-1.336 2.746 2.746 0 0 1 1.698-.515c.517-.02 1.03.093 1.49.331v-.208a1.134 1.134 0 0 0-.417-.901 1.416 1.416 0 0 0-.98-.368 1.545 1.545 0 0 0-1.319.717l-.895-.564a2.488 2.488 0 0 1 2.182-1.06zM23.29 13.52a.79.79 0 0 0 .337.662c.223.176.5.269.785.263.429-.001.84-.17 1.146-.472.305-.286.478-.685.478-1.103a2.047 2.047 0 0 0-1.324-.374 1.716 1.716 0 0 0-1.03.294.883.883 0 0 0-.392.73zm9.286-3.75l-3.39 7.79h-1.048l1.281-2.728-2.224-5.062h1.103l1.612 3.885 1.569-3.885h1.097z'
                fill='#5F6368'
              ></path>
              <path
                d='M13.986 11.284c0-.308-.024-.616-.073-.92h-4.29v1.747h2.451a2.096 2.096 0 0 1-.9 1.373v1.134h1.464a4.433 4.433 0 0 0 1.348-3.334z'
                fill='#4285F4'
              ></path>
              <path
                d='M9.629 15.721a4.352 4.352 0 0 0 3.01-1.097l-1.466-1.14a2.752 2.752 0 0 1-4.094-1.44H5.577v1.17a4.53 4.53 0 0 0 4.052 2.507z'
                fill='#34A853'
              ></path>
              <path
                d='M7.079 12.05a2.709 2.709 0 0 1 0-1.735v-1.17H5.577a4.505 4.505 0 0 0 0 4.075l1.502-1.17z'
                fill='#FBBC04'
              ></path>
              <path
                d='M9.629 8.44a2.452 2.452 0 0 1 1.74.68l1.3-1.293a4.37 4.37 0 0 0-3.065-1.183 4.53 4.53 0 0 0-4.027 2.5l1.502 1.171a2.715 2.715 0 0 1 2.55-1.875z'
                fill='#EA4335'
              ></path>
            </svg>

            <svg
              className='payment-list__item'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              width='38'
              height='24'
              aria-labelledby='pi-master'
            >
              <title id='pi-master'>Mastercard</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              ></path>
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              ></path>
              <circle fill='#EB001B' cx='15' cy='12' r='7'></circle>
              <circle fill='#F79E1B' cx='23' cy='12' r='7'></circle>
              <path
                fill='#FF5F00'
                d='M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z'
              ></path>
            </svg>

            <svg
              className='payment-list__item'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              width='38'
              height='24'
              role='img'
              aria-labelledby='pi-paypal'
            >
              <title id='pi-paypal'>PayPal</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              ></path>
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              ></path>
              <path
                fill='#003087'
                d='M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z'
              ></path>
              <path
                fill='#3086C8'
                d='M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z'
              ></path>
              <path
                fill='#012169'
                d='M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z'
              ></path>
            </svg>

            <svg
              className='payment-list__item'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              viewBox='0 0 38 24'
              width='38'
              height='24'
              aria-labelledby='pi-shopify_pay'
            >
              <title id='pi-shopify_pay'>Shop Pay</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
                fill='#000'
              ></path>
              <path
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z'
                fill='#5A31F4'
              ></path>
              <path
                d='M21.382 9.713c0 1.668-1.177 2.858-2.821 2.858h-1.549a.133.133 0 00-.12.08.127.127 0 00-.01.049v2.192a.129.129 0 01-.13.129h-1.084a.13.13 0 01-.13-.13V6.986a.127.127 0 01.08-.12.129.129 0 01.05-.01h2.9c1.637 0 2.814 1.19 2.814 2.858v-.001zm-1.352 0c0-.958-.658-1.658-1.55-1.658h-1.468a.13.13 0 00-.13.13v3.05a.127.127 0 00.038.092.129.129 0 00.092.038h1.468c.892.005 1.55-.695 1.55-1.652zm1.674 3.791a1.527 1.527 0 01.647-1.317c.423-.316 1.084-.48 2.055-.514l1.033-.036v-.303c0-.607-.41-.863-1.068-.863-.658 0-1.075.231-1.17.61a.127.127 0 01-.125.09h-1.022a.13.13 0 01-.126-.092.125.125 0 01-.004-.055c.152-.898.904-1.58 2.494-1.58 1.692 0 2.303.783 2.303 2.276v3.172a.13.13 0 01-.132.129h-1.03a.13.13 0 01-.13-.13v-.236a.096.096 0 00-.061-.091.1.1 0 00-.107.022c-.31.334-.808.575-1.607.575-1.175 0-1.95-.607-1.95-1.657zm3.735-.687v-.246l-1.339.07c-.705.036-1.115.326-1.115.816 0 .444.376.69 1.034.69.893 0 1.42-.48 1.42-1.33zm2.316 4.6v-.919a.13.13 0 01.049-.1.132.132 0 01.108-.027c.158.029.318.044.479.044a1.229 1.229 0 001.245-.876l.067-.211a.133.133 0 000-.088l-2.145-5.471a.13.13 0 01.06-.165.13.13 0 01.062-.015h1.04a.132.132 0 01.123.085l1.456 3.859a.131.131 0 00.125.088.133.133 0 00.125-.088l1.265-3.848a.13.13 0 01.126-.09h1.076a.134.134 0 01.132.116.134.134 0 01-.008.063l-2.295 6.076c-.528 1.413-1.433 1.773-2.43 1.773a1.959 1.959 0 01-.561-.066.132.132 0 01-.1-.14h.001zM8.57 6.4a5.363 5.363 0 00-3.683 1.427.231.231 0 00-.029.31l.618.839a.236.236 0 00.362.028 3.823 3.823 0 012.738-1.11c2.12 0 3.227 1.584 3.227 3.15 0 1.7-1.163 2.898-2.835 2.921-1.292 0-2.266-.85-2.266-1.974a1.908 1.908 0 01.713-1.48.231.231 0 00.033-.324l-.65-.815a.236.236 0 00-.339-.034 3.43 3.43 0 00-.942 1.183 3.39 3.39 0 00-.337 1.47c0 1.935 1.655 3.452 3.775 3.464h.03c2.517-.032 4.337-1.884 4.337-4.415 0-2.247-1.667-4.64-4.752-4.64z'
                fill='#fff'
              ></path>
            </svg>

            <svg
              className='payment-list__item'
              viewBox='0 0 38 24'
              width='38'
              height='24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              aria-labelledby='pi-venmo'
            >
              <title id='pi-venmo'>Venmo</title>
              <g fill='none' fillRule='evenodd'>
                <rect
                  fillOpacity='.07'
                  fill='#000'
                  width='38'
                  height='24'
                  rx='3'
                ></rect>
                <path
                  fill='#3D95CE'
                  d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
                ></path>
                <path
                  d='M24.675 8.36c0 3.064-2.557 7.045-4.633 9.84h-4.74L13.4 6.57l4.151-.402 1.005 8.275c.94-1.566 2.099-4.025 2.099-5.702 0-.918-.154-1.543-.394-2.058l3.78-.783c.437.738.634 1.499.634 2.46z'
                  fill='#FFF'
                  fillRule='nonzero'
                ></path>
              </g>
            </svg>

            <svg
              className='payment-list__item'
              viewBox='0 0 38 24'
              xmlns='http://www.w3.org/2000/svg'
              role='img'
              width='38'
              height='24'
              aria-labelledby='pi-visa'
            >
              <title id='pi-visa'>Visa</title>
              <path
                opacity='.07'
                d='M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z'
              ></path>
              <path
                fill='#fff'
                d='M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32'
              ></path>
              <path
                d='M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z'
                fill='#142688'
              ></path>
            </svg>
          </div>
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Footer
