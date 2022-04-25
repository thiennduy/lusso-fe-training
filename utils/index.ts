import axios from "axios"
import Auth from "@aws-amplify/auth"
import ProgressBar from "@badrap/bar-of-progress"
import Router from "next/router"

const isServer = typeof window === "undefined"

export const initiateAxios = () => {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_HOST
  axios.defaults.timeout = 60000

  if (!isServer) {
    axios.interceptors.request.use(async function (config: any) {
      const session = await Auth.currentSession()
      const idToken = session.getIdToken()
      config.headers["Authorization"] = "Bearer " + idToken.getJwtToken()
      return config
    })

    const progress = new ProgressBar({
      size: 2,
      color: "#ff890a",
      className: "z-50",
      delay: 100
    })

    Router.events.on("routeChangeStart", progress.start)
    Router.events.on("routeChangeComplete", progress.finish)
    Router.events.on("routeChangeError", progress.finish)
  }
}

export const getSidebarRoot = () => document?.getElementById("sidebar-root")

export const delay = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout))
