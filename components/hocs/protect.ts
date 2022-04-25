import React from "react"
import { useUser } from "hooks/user"
import hoistNonReactStatics from "hoist-non-react-statics"

const protect = (Component: React.FunctionComponent | React.ComponentClass) => {
  const EnhancedComponent = (props: any) => {
    const { user } = useUser({ redirectTo: "/login" })

    if (!user) return null

    return React.createElement(Component, props)
  }
  hoistNonReactStatics(EnhancedComponent, Component)

  return EnhancedComponent
}

export default protect
