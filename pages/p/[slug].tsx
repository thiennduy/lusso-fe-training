import { Box, Typography } from "@mui/material"
import { useState } from "react"
import Image from "next/image"
import FacebookIcon from "@mui/icons-material/Facebook"
import Button from "@mui/material/Button"
import TwitterIcon from "@mui/icons-material/Twitter"
import PinterestIcon from "@mui/icons-material/Pinterest"
import EmailIcon from "@mui/icons-material/Email"
import styles from "styles/product-detail.module.css"
import axios from "axios"
import escapeHtml from "escape-html"
import { Text, Node, Transforms, Element } from "slate"
import sanitize from "components/hocs/sanitize"

const strengthImage = [
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-01.png?v=1629845765",
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-02.png?v=1629845765",
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-03.png?v=1629845765",
  "https://cdn.shopify.com/s/files/1/0552/1735/6962/files/KOL_ICONS-04.png?v=1629845765g"
]
const serialize = (node: any) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text)
    if (node?.bold) {
      string = `<strong>${string}</strong>`
    } else if (node?.italic) {
      string = `<i>${string}</i>`
    } else if (node?.underline) {
      string = `<u>${string}</u>`
    } else if (node?.code) {
      string = `<code><${string}></code>`
    }
    return string
  }

  const children = node.children?.map((n: any) => serialize(n)).join("")

  switch (node.type) {
    case "quote":
      return `<blockquote><p>${children}</p></blockquote>`
    case "paragraph":
      return `<p>${children}</p>`
    case "link":
      return `<a href="${escapeHtml(node.url)}">${children}</a>`
    case "heading-one":
      return `<h1>${children}</h1>`
    case "heading-two":
      return `<h2>${children}</h2>`
    default:
      return children
  }
}

function ProductDetail(props: any) {
  const { data } = props
  const descriptionString = data.description.reduce((accum: any, html: any) => {
    accum = accum + serialize(html)
    return accum
  }, "")
  const images = data?.images
  const [bigImage, setBigImage] = useState({
    host: images[0].host,
    key: images[0].key
  })
  const [value, setValue] = useState(data.quantity ? data.quantity : 0)
  const handleIncrease = () => {
    setValue(value + 1)
  }
  const handleDecrease = () => {
    if (value > 0) {
      setValue(value - 1)
    }
  }
  const save = data.originalPrice - data.specialPrice
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
                      <Box
                        className={`${styles.small__image}
                      ${
                        item.key === bigImage?.key ? styles.active__image : ""
                      }`}
                        key={index}
                      >
                        <Image
                          src={item.host + item.key}
                          height='80px'
                          width='80px'
                          alt='item images'
                          onClick={() =>
                            setBigImage({ host: item.host, key: item.key })
                          }
                        />
                      </Box>
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
                    Save ${save}
                  </Typography>
                </Box>
                <Box className={styles.network__list}>
                  <FacebookIcon className={styles.network__icon} />
                  <TwitterIcon className={styles.network__icon} />
                  <PinterestIcon className={styles.network__icon} />
                  <EmailIcon className={styles.network__icon} />
                </Box>
                <Typography className={styles.description__content}>
                  FREE delivery between Friday, May. 27 and Thursday, Jun. 02.
                </Typography>
                <Typography className={styles.description__content}>
                  Select Lighting Options: Black-Lit (RGB) +$50.00
                </Typography>
                <Typography className={styles.description__content}>
                  Order within 14 hours, 46 minutes and 53 seconds
                </Typography>
                <Typography className={styles.description__content}>
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
                <Box sx={{ marginTop: "15px" }}>
                  <span className={styles.spec__title}>Price:</span>
                  <span className={styles.price__saleoff}>
                    ${data.specialPrice}
                  </span>
                  <span className={styles.price__original}>
                    ${data.originalPrice}
                  </span>
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
                    <img
                      src={item}
                      key={index}
                      className={styles.strengthImage}
                      alt='index'
                    />
                  ))}
                </Box>
                <Box className={styles.description__card}>
                  <Typography className={styles.description__title}>
                    Description
                  </Typography>
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: sanitize(descriptionString)
                    }}
                    className={styles.description__content}
                  ></Box>
                  <Box
                    sx={{
                      borderTop: "1.5px solid #c2b9b9",
                      paddingTop: "10px",
                      marginTop: "10px"
                    }}
                  >
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
