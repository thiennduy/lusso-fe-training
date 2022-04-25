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
