import { NextPage } from "next"
import { ReactElement, ReactNode } from "react"
import { CognitoUser } from "@aws-amplify/auth"

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

export interface AuthState {
  user: CognitoUser | null
  isAdmin: boolean
  isLoading: boolean
  signIn(username: string, pw?: string): Promise<any>
  signOut(): Promise<any>
  forgotPassword(username: string): Promise<any>
  completeNewPassword(password: string): Promise<any>
  forgotPasswordSubmit(username: string, code: string, pw: string): Promise<any>
  changePassword(oldPassword: string, newPassword: string): Promise<any>
  updateUserAttributes(attributes: Record<string, any>): Promise<any>
}
