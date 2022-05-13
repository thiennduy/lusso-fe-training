import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import Image from "next/image"
import FacebookIcon from "@mui/icons-material/Facebook"
import Button from "@mui/material/Button"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import EmailIcon from "@mui/icons-material/Email"
// import { NewProductFieldSchema } from "types/products"
import styles from "styles/product-detail.module.css"
import axios from "axios"

// type ProductDetailPropsType = {
//   data: NewProductFieldSchema
// }
const strengthImage = [
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-01.png?v=1629845765",
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-02.png?v=1629845765",
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-03.png?v=1629845765",
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-04.png?v=1629845765g"
]

function ProductDetail(props: any) {
  const [bigImage, setBigImage] = React.useState({})
  const [value, setValue] = React.useState(1)
  const { data } = props
  const images = data.images
  React.useEffect(() => setBigImage(images.shift()), [])
  const handleIncrease = () => {
    setValue(value + 1)
  }
  const handleDecrease = () => {
    setValue(value - 1)
  }

  return (
    <>
      <Box
        sx={{
          backgroundColor: "black",
          color: "rgb(131, 130, 130)",
          minHeight: "80vh",
          margin: "50px 0"
        }}
      >
        {!data ? (
          <Typography sx={{ padding: "25px 0", textAlign: "center" }}>
            No product match
          </Typography>
        ) : (
          <>
            <Box className={styles.container__box}>
              <Box className={styles.imagebox}>
                <Box className={styles.imagelist}>
                  {images &&
                    images.map((item: any, index: number) => (
                      <Image
                        className={styles.small__image}
                        src={item.host + item.key}
                        key={index}
                        height='70px'
                        width='70px'
                        alt='item images'
                      />
                    ))}
                </Box>
                {bigImage?.host && (
                  <Image
                    className={styles.big__image}
                    src={bigImage?.host + bigImage?.key}
                    height='500px'
                    width='500px'
                    alt='Dr Strange'
                  />
                )}
              </Box>
              <Box className={styles.detailbox}>
                <Typography className={styles.product__name}>
                  {data.name.en}
                </Typography>
                <Box className={styles.detail__save}>
                  <Typography className={styles.detail__saveContent}>
                    Save 40%
                  </Typography>
                </Box>
                <Box className={styles.network__list}>
                  <FacebookIcon className={styles.network__icon} />
                  <TwitterIcon className={styles.network__icon} />
                  <PinterestIcon className={styles.network__icon} />
                  <EmailIcon className={styles.network__icon} />
                </Box>
                <Typography>
                  FREE delivery between Friday, May. 27 and Thursday, Jun.
                  02.Select Lighting Options: Non-Lit (NO RGB) +$0.00
                </Typography>
                <Typography>
                  Order within 14 hours, 46 minutes and 53 seconds
                </Typography>
                <Typography>
                  Select Lighting Options: Non-Lit (NO RGB) +$0.00
                </Typography>
                <Box className={(styles.option, styles.optionActive)}>
                  <Typography
                    className={(styles.option__text, styles.textActive)}
                  >
                    17.5 x 24 inches
                  </Typography>
                </Box>
                <Box className={styles.option}>
                  <Typography className={styles.option__text}>
                    17.5 x 36 inches
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <span className={styles.spec__title}>Price:</span>
                  <span className={styles.price__saleoff}>$35.89</span>
                  <span className={styles.price__original}>%59.79</span>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <span className={styles.spec__title}>Quantity:</span>
                  <Box className={styles.quantity__selector}>
                    <button
                      onClick={handleDecrease}
                      className={styles.quantity__action}
                    >
                      -
                    </button>
                    <input value={value} className={styles.quantity__input} />
                    <button
                      onClick={handleIncrease}
                      className={styles.quantity__action}
                    >
                      +
                    </button>
                  </Box>
                </Box>
                <Button className={styles.addButton} variant='contained'>
                  Add to card
                </Button>
              </Box>
              <Box className={styles.descriptionWrapper}>
                <Box className={styles.strengthImages}>
                  {strengthImage.map((item, index) => (
                    <Image
                      src={item}
                      key={index}
                      height='98px'
                      width='320px'
                      alt='index'
                    />
                  ))}
                </Box>
                <Box className={styles.description__card}>
                  <Typography className={styles.description__title}>
                    Description
                  </Typography>
                  <Typography className={styles.description__content}>
                    Our "Scrollable Wooden Magnetic Hanger Art" is a
                    contemporary, innovative, and aesthetic way to showcase your
                    favorite custom artworks or photos. Your customized artworks
                    or photos will be printed on our Double-White Popup material
                    using UV inks and framed with natural solid magnetic wood
                    bars, which guarantees no erosion/tearing over decades, easy
                    storage, and portability. This is a cost-effective and
                    long-lasting hanger art solution that allows you to scroll,
                    clean, and carry to wherever you want. Quick assembly
                    required.
                  </Typography>
                  <Typography className={styles.description__content}>
                    What is included:
                  </Typography>
                  <Typography className={styles.description__content}>
                    + Custom Print Scrollable Wooden Magnetic Hanger Art in
                    matte finish.
                  </Typography>
                  <Typography className={styles.description__content}>
                    (Thickness: 0.36 mm or 0.014 inches)
                  </Typography>
                  <Typography className={styles.description__content}>
                    + Sizes available: 17.5 x 24 inches and 17.5 x 36 inches.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </>
        )}
      </Box>
    </>
  )
}

type getServerSidePropsType = {
  params: { slug: string }
}

export async function getServerSideProps(props: getServerSidePropsType) {
  const { params } = props

  try {
    const res = await axios.get(`products/${params.slug}`)
    console.log("res: ", res.data)

    return {
      props: {
        data: res.data
      }
    }
  } catch (error) {
    return {
      props: {
        data: null
      }
    }
  }
}

export default ProductDetail
