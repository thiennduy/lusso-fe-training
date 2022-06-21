import { useContext, useEffect } from "react"
import { AuthContext } from "contexts/auth"
import { AuthState } from "types"
import { useRouter } from "next/router"

type UseUserOptions = {
  redirectTo?: string
}
export const useUser = (options: UseUserOptions = {}): AuthState => {
  const router = useRouter()
  const authContext = useContext(AuthContext)
  const { user, isLoading } = authContext

  useEffect(() => {
    if (options.redirectTo) {
      if (!(user || isLoading)) router.replace(options.redirectTo)
    }
  }, [user, isLoading])

  return authContext
}
