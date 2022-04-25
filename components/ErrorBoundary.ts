import React from "react"
import axios from "axios"
import { withSnackbar, ProviderContext } from "notistack"

class ErrorBoundary extends React.Component<ProviderContext> {
  responseInterceptor = 0

  componentDidMount() {
    const { enqueueSnackbar } = this.props

    this.responseInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        if (error?.response) {
          const message = error.response.data?.message || error.response.data
          enqueueSnackbar(message, {
            preventDuplicate: true
          })
          if (error.response?.status === 401) {
            //
          }
          return Promise.reject(error.response)
        }
        return Promise.reject(error)
      }
    )
  }

  componentWillUnmount() {
    axios.interceptors.response.eject(this.responseInterceptor)
  }

  render() {
    return this.props.children
  }
}

export default withSnackbar(ErrorBoundary)
