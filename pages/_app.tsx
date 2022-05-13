import "styles/main.css"
import React from "react"
import type { AppProps } from "next/app"
import Head from "next/head"
import Layout from "components/Layout"
import Auth from "@aws-amplify/auth"
import { RecoilRoot } from "recoil"
import { SnackbarProvider } from "notistack"

import AdapterDateFns from "@mui/lab/AdapterDateFns"
// import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"

import { initiateAxios } from "utils"
import { theme } from "utils/theme"
import { NextPageWithLayout } from "types"
import ErrorBoundary from "components/ErrorBoundary"
import { AuthProvider } from "contexts/auth"

Auth.configure({
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOLS_ID,
  userPoolWebClientId: process.env.NEXT_PUBLIC_COGNITO_APP_CLIENT_ID,
  oauth: {
    domain: process.env.NEXT_PUBLIC_COGNITO_OAUTH_DOMAIN,
    scope: ["email", "phone", "openid", "profile"],
    redirectSignIn: process.env.NEXT_PUBLIC_COGNITO_SIGN_IN_REDIRECT,
    responseType: "code"
  }
})

initiateAxios()

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: React.FC<AppProps> = ({
  Component,
  pageProps
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <RecoilRoot>
      <Head>
        <title>Lusso Storefront</title>
        <link rel='shortcut icon' href='/favicon.png' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider>
          <ErrorBoundary>
            <AuthProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Layout>{getLayout(<Component {...pageProps} />)}</Layout>
              </LocalizationProvider>
            </AuthProvider>
          </ErrorBoundary>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}
export default App
