// import React, { useState } from "react"
// import { NextPageWithLayout } from "../types"
// import Layout from "../components/Layout"
// import {
//   Box,
//   Button,
//   Card,
//   FormControlLabel,
//   Grid,
//   IconButton,
//   InputAdornment,
//   styled,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from "@mui/material"
// import * as yup from "yup"
// import { yupResolver } from "@hookform/resolvers/yup"
// import { FormProvider, useForm } from "react-hook-form"
// import Link from "next/link"
// import { TextField } from "../components/hook-form/TextField"
// import Visibility from "@mui/icons-material/Visibility"
// import VisibilityOff from "@mui/icons-material/VisibilityOff"
// import FacebookIcon from "@mui/icons-material/Facebook"
// import GoogleIcon from "@mui/icons-material/Google"
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
// import { Checkbox } from "components/hook-form/Checkbox"
// import { useUser } from "hooks/user"
// import { useSnackbar } from "notistack"
// import { useRouter } from "next/router"
// import useTranslation from "next-translate/useTranslation"

// export const Btn = styled(Button)(({}) => ({
//   height: "42px",
//   width: "100%",
//   fontSize: "14px",
//   color: "#fff",
//   "&:hover": {
//     color: "white"
//   }
// }))

// const ButtonSignUp = styled(Btn)(({ theme }) => ({
//   backgroundColor: "#f57224",
//   "&:hover": {
//     backgroundColor: "#f57224",
//     boxShadow: "none"
//   }
// }))

// const ButtonFaceBook = styled(Btn)(({ theme }) => ({
//   backgroundColor: "#4267b2",
//   marginBottom: "10px",
//   "&:hover": {
//     backgroundColor: "#4267b2e5"
//   }
// }))

// const ButtonGoogle = styled(Btn)(({ theme }) => ({
//   backgroundColor: "#d34836",
//   "&:hover": {
//     backgroundColor: "#d34836e0"
//   }
// }))

// export const RegisterPage = styled("div")(({ theme }) => ({
//   background: "#f5f5f5",
//   padding: "80px 0 210px",
//   minHeight: "70vh",
//   [theme.breakpoints.down("md")]: {
//     padding: "0",
//     ".MuiPaper-root": {
//       borderRadius: 0,
//       border: 0
//     }
//   }
// }))

// export const SignUpContent = styled(Grid)(({ theme }) => ({
//   width: "770px",
//   [theme.breakpoints.down("md")]: {
//     width: "auto"
//   }
// }))

// export const Title = styled(Box)(({ theme }) => ({
//   width: "830px",
//   alignItems: "center",
//   margin: "3rem 0 1rem",
//   [theme.breakpoints.down("md")]: {
//     display: "none"
//   }
// }))

// export const HeaderBackground = styled("div")(({ theme }) => ({
//   display: "none",
//   [theme.breakpoints.down("md")]: {
//     display: "block",
//     backgroundImage: "url('/images/background-header-sign-up.jpg')",
//     height: "9.5rem",
//     width: "100%",
//     position: "relative",
//     backgroundSize: "cover",
//     backgroundPosition: "50%",
//     button: {
//       color: "#fff",
//       padding: "20px 25px"
//     }
//   }
// }))

// export const HidenBackground = styled("div")(({ theme }) => ({
//   position: "absolute",
//   left: 0,
//   top: 0,
//   width: "100%",
//   height: "100%",
//   background: "#000000",
//   opacity: "0.6"
// }))

// const schema = yup.object({
//   username: yup.string().required("Please enter Username"),
//   email: yup
//     .string()
//     .email("Invalid email format")
//     .required("This field is required"),
//   password: yup
//     .string()
//     .required("This field is required")
//     .min(7, "Password should be longer than 7 chars"),
//   phone_number: yup
//     .string()
//     .required("This field is required")
//     .matches(
//       /^[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/? /\s/g, '']+$/,
//       "Phone number is not valid"
//     ),
//   first_name: yup.string().required("This field is required"),
//   last_name: yup.string().required("This field is required")
// })

// const Register: NextPageWithLayout = () => {
//   const { signUp } = useUser()
//   const router = useRouter()
//   const { t, lang } = useTranslation("register")

//   const theme = useTheme()
//   const isMobile = useMediaQuery(theme.breakpoints.up("sm"))
//   const [showPassword, setShowPassword] = useState(false)
//   const { enqueueSnackbar } = useSnackbar()

//   const methods = useForm({
//     defaultValues: {
//       username: "",
//       email: "",
//       password: "",
//       phone_number: "",
//       first_name: "",
//       last_name: "",
//       checked: true
//     },
//     resolver: yupResolver(schema)
//   })

//   const handleClickShowPassword = () => setShowPassword(!showPassword)

//   const handleSubmit = async (values: any) => {
//     try {
//       const result = await signUp(values)
//       if (result) router.push("/signin")
//       // let text = "Please confirm user from email  " + value.email
//       // enqueueSnackbar(text, { variant: "warning" })
//     } catch (e: any) {
//       console.log(e)
//       enqueueSnackbar(e?.message || "Something wrong. Please try again", {
//         variant: "error"
//       })
//     }
//   }

//   return (
//     <RegisterPage className='register-page'>
//       <HeaderBackground>
//         <HidenBackground>
//           <Box display='flex' justifyContent='space-between' height='50px'>
//             <Link href='/'>
//               <a>
//                 <Button startIcon={<ArrowBackIosNewIcon />}>Home</Button>
//               </a>
//             </Link>
//             <Link href='/signin'>
//               <a>
//                 <Button endIcon={<ArrowForwardIcon />}>Login</Button>
//               </a>
//             </Link>
//           </Box>
//         </HidenBackground>
//       </HeaderBackground>
//       <Grid container justifyContent='center'>
//         <Title display='flex' justifyContent='space-between'>
//           <Typography fontSize='20px' component='h1'>
//             {t("create-account")} Lati
//           </Typography>
//           <Typography fontSize='14px' component='p'>
//             {t("already-member")}
//             <Link href='/signin'>
//               <a style={{ color: "#1890ff" }}>{t("common:sign-in")}</a>
//             </Link>
//           </Typography>
//         </Title>
//       </Grid>
//       <Grid container justifyContent='center'>
//         <Card
//           variant='outlined'
//           sx={{
//             padding: "20px 40px"
//           }}
//         >
//           <FormProvider {...methods}>
//             <form onSubmit={methods.handleSubmit(handleSubmit)}>
//               <SignUpContent container spacing={2}>
//                 <Grid item xs={12} md={7}>
//                   <Grid container rowSpacing={2}>
//                     <Grid item xs={12}>
//                       <Box component='div'>
//                         <Typography component='p' fontSize='12px' mb='7px'>
//                           {t("username")}
//                         </Typography>
//                         <TextField name='username' fullWidth />
//                       </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Box component='div'>
//                         <Typography component='p' fontSize='12px' mb='7px'>
//                           {t("common:email")}
//                         </Typography>
//                         <TextField name='email' fullWidth />
//                       </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Box component='div'>
//                         <Typography component='p' fontSize='12px' mb='7px'>
//                           {t("signin:password")}
//                         </Typography>
//                         <TextField
//                           name='password'
//                           type={showPassword ? "text" : "password"}
//                           fullWidth
//                           InputProps={{
//                             endAdornment: (
//                               <InputAdornment position='end'>
//                                 <IconButton
//                                   size='small'
//                                   onClick={handleClickShowPassword}
//                                 >
//                                   {showPassword ? (
//                                     <Visibility />
//                                   ) : (
//                                     <VisibilityOff />
//                                   )}
//                                 </IconButton>
//                               </InputAdornment>
//                             )
//                           }}
//                         />
//                       </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Box component='div'>
//                         <Typography component='p' fontSize='12px' mb='7px'>
//                           Phone Number
//                         </Typography>
//                         <TextField
//                           // type='number'
//                           name='phone_number'
//                           fullWidth
//                         />
//                       </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Box component='div'>
//                         <Typography component='p' fontSize='12px' mb='7px'>
//                           {t("common:first-name")}
//                         </Typography>
//                         <TextField name='first_name' fullWidth />
//                       </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <Box component='div'>
//                         <Typography component='p' fontSize='12px' mb='7px'>
//                           {t("common:last-name")}
//                         </Typography>
//                         <TextField name='last_name' fullWidth />
//                       </Box>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <FormControlLabel
//                         control={<Checkbox name='checked' size='medium' />}
//                         label={`${t("description-checkbox")} Lati`}
//                       />
//                     </Grid>
//                   </Grid>
//                 </Grid>
//                 <Grid item xs={12} md={5}>
//                   <Grid container rowSpacing={1} mt='15px'>
//                     <Grid item xs={12}>
//                       <ButtonSignUp variant='contained' type='submit'>
//                         {t("common:sign-up")}
//                       </ButtonSignUp>
//                       <Typography component='div' fontSize='12px' mt='10px'>
//                         {t("by-clicking")}
//                         <Link href=''>
//                           <a style={{ color: "#1890ff" }}>
//                             {t("terms-of-use")}
//                           </a>
//                         </Link>
//                         &nbsp;{t("common:and")}&nbsp;
//                         <Link href=''>
//                           <a style={{ color: "#1890ff" }}>
//                             {t("privacy-policy")}
//                           </a>
//                         </Link>
//                       </Typography>
//                       <Typography component='div' fontSize='12px' mt='10px'>
//                         {t("signup-with")}
//                       </Typography>
//                     </Grid>
//                     <Grid item xs={12}>
//                       <ButtonFaceBook
//                         startIcon={
//                           <FacebookIcon style={{ fontSize: "22px" }} />
//                         }
//                       >
//                         Facebook
//                       </ButtonFaceBook>
//                       <ButtonGoogle
//                         startIcon={<GoogleIcon style={{ fontSize: "22px" }} />}
//                       >
//                         Google
//                       </ButtonGoogle>
//                     </Grid>
//                   </Grid>
//                 </Grid>
//               </SignUpContent>
//             </form>
//           </FormProvider>
//         </Card>
//       </Grid>
//     </RegisterPage>
//   )
// }

// Register.getLayout = (page) => <Layout pageName='register-page'>{page}</Layout>

// export const getStaticProps = () => ({ props: {} })

// export default Register