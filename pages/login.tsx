import { useUser } from "hooks/user"
import { useRouter } from "next/router"
import { useSnackbar } from "notistack"
import React, { useState } from "react"

const Login = () => {
  const { enqueueSnackbar } = useSnackbar()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { signIn } = useUser()
  const router = useRouter()

  const handleChange = (event: any) => {
    const { value, name } = event.target
    if (name === "username") setUsername(value)
    else setPassword(value)
  }

  const handSubmit = async (event: any) => {
    event.preventDefault()
    try {
      const user = await signIn(username, password)
      router.push("/")
    } catch (error: any) {
      enqueueSnackbar(error.message)
    }
  }
  const signUp = useCallback(
    async (input: RequestSignUpData) => {
      const phone_number = phoneRegex(input.phone_number)
      const result = await Auth.signUp({
        username: input.username,
        password: input.password,
        attributes: {
          email: input.email,
          family_name: input.first_name,
          given_name: input.last_name,
          phone_number
        },
        clientMetadata: {
          userPoolId
        }
      }).catch((e: any) => {
        let text = "PreSignUp failed with error 1."
        if (e.message === text) {
          enqueueSnackbar("Phone number already exists", { variant: "error" })
        }
      })
      // if (result.user) {
      //   setUser(result.user)
      //   return result.user
      // }
      return result
    },
    [setUser]
  )

  return (
    <form onSubmit={handSubmit}>
      <div>
        <span>username</span>
        <input
          onChange={handleChange}
          name='username'
          type='text'
          value={username}
        />
      </div>
      <div>
        <span>password</span>
        <input
          onChange={handleChange}
          name='password'
          type='password'
          value={password}
        />
      </div>
      <button type='submit'>submit</button>
    </form>
  )
}

export default Login
