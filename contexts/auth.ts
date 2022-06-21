import React, { useCallback, useEffect, useMemo, useState } from "react"
import { AuthState } from "types"
import Auth, { CognitoUser } from "@aws-amplify/auth"
import { useSnackbar } from "notistack"
import { useRouter } from "next/router"
import {
  AdminDeleteUserCommand,
  CognitoIdentityProviderClient,
  ListUsersCommand,
  AdminGetUserCommand
} from "@aws-sdk/client-cognito-identity-provider"

// exports.handler = async (event, context, callback: Function) => {
//   const { userAttributes, clientMetadata } = event.request
//   const { userPoolId } = clientMetadata
//   const region = userPoolId.split("_")[0]
//   // foo
//   const client = new CognitoIdentityProviderClient({
//     region
//   })
//   // let command = new ListUsersCommand({
//   //   UserPoolId: userPoolId,
//   //   Filter: `phone_number='${userAttributes.phone_number}'`
//   // })

//   // let result = await client.send(command)

//   // if (result && Array.isArray(result.Users) && result.Users.length) {
//   //     const error = new Error(1)

//   //     return callback(error, event);
//   // }
//   let command = new ListUsersCommand({
//     UserPoolId: userPoolId,
//     Filter: `email='${userAttributes.email}'`
//   })

//   let result = await client.send(command)

//   if (result && Array.isArray(result.Users) && result.Users.length) {
//     let getUserCommand = new AdminGetUserCommand({
//       Username: result.Users[0].Username,
//       UserPoolId: userPoolId
//     })
//     let resultUserCheck = await client.send(getUserCommand)
//     if (resultUserCheck.UserStatus === "UNCONFIRMED" || "ARCHIVED") {
//       let deleteUserCommand = new AdminDeleteUserCommand({
//         Username: result.Users[0].Username,
//         UserPoolId: userPoolId
//       })
//       await client.send(deleteUserCommand)
//     } else {
//       const error = new Error(2)
//       return callback(error, event)
//     }
//   }
//   callback(null, event)
// }

export const AuthContext = React.createContext<AuthState>({
  user: null,
  isAdmin: false,
  isLoading: false,
  signIn: async (input) => {},
  signOut: async () => {},
  completeNewPassword: async (input) => {},
  forgotPassword: async (input) => {},
  forgotPasswordSubmit: async (
    username: string,
    code: string,
    pw: string
  ) => {},
  changePassword: async (oldPassword: string, newPassword: string) => {},
  updateUserAttributes: async (attributes: Record<string, any>) => {}
})

interface AuthProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState<CognitoUser | null>(null)
  const [isLoading, setLoading] = useState<boolean>(true)
  const { enqueueSnackbar } = useSnackbar()
  const router = useRouter()

  useEffect(() => {
    setLoading(true)
    Auth.currentAuthenticatedUser()
      .then((user) => {
        console.log(user)
        setUser(user)
        setLoading(false)
      })
      .catch((e) => {
        console.log(e)
        enqueueSnackbar(router.pathname)
        setLoading(false)
        if (!["/login"].includes(router.pathname)) router.replace("login")
      })
  }, [])

  const isAdmin = useMemo(() => {
    if (user) {
      const payload = user.getSignInUserSession()?.getIdToken().decodePayload()
      if (payload && Array.isArray(payload["cognito:groups"])) {
        return payload["cognito:groups"].includes("Admin")
      }
    }
    return false
  }, [user])

  const signIn = useCallback(
    async (email: string, password: string) => {
      const user = await Auth.signIn(email, password)
      setUser(user)

      return user
    },
    [setUser]
  )
  const signOut = useCallback(async () => {
    const result = await Auth.signOut()
    setUser(null)
    return result
  }, [setUser])

  const forgotPassword = useCallback(
    async (username: string) => {
      const result = await Auth.forgotPassword(username)
      return result
    },
    [setUser]
  )

  const forgotPasswordSubmit = useCallback(
    async (username: string, code: string, password: string) => {
      const result = await Auth.forgotPasswordSubmit(username, code, password)
      return result
    },
    [setUser]
  )

  const completeNewPassword = useCallback(
    async (newPassword: string) => {
      if (!user) {
        throw new Error("no user in context")
      }
      const result = await Auth.completeNewPassword(user, newPassword)
      return result
    },
    [setUser, user]
  )

  const changePassword = useCallback(
    async (oldPassword: string, newPassword: string) => {
      if (!user) {
        throw new Error("no user in context")
      }
      const result = await Auth.changePassword(user, oldPassword, newPassword)
      return result
    },
    [setUser, user]
  )

  const updateUserAttributes = useCallback(
    async (attributes: Record<string, any>) => {
      if (!user) {
        throw new Error("no user in context")
      }
      const result = await Auth.updateUserAttributes(user, attributes)
      return result
    },
    [setUser, user]
  )

  return React.createElement(
    AuthContext.Provider,
    {
      value: {
        user,
        isLoading,
        isAdmin,
        signIn,
        signOut,
        completeNewPassword,
        forgotPassword,
        forgotPasswordSubmit,
        changePassword,
        updateUserAttributes
      }
    },
    children
  )
}
