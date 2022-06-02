import { Box, Typography, Button } from "@mui/material"
import { ReactNode, useEffect, useState } from "react"
import React from "react"
import InfoIcon from "@mui/icons-material/Info"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import TestMessage from "components/formControl/TestMessage"

type welcomePropsType = {
  id: number
  icon: ReactNode
  backgroundColor: string
  title: string
  description?: string
}

function Message({}: any) {
  const [list, setList] = useState<welcomePropsType[]>([])
  const [status, setStatus] = useState(true)
  console.log(list)
  let welcomeProps = null
  const addWelcomeMessage = () => {
    welcomeProps = {
      id: list.length,
      icon: <InfoIcon />,
      backgroundColor: "#0073bb",
      title: "Welcome to the new Amazon Cognito console",
      description:
        "We have redesigned the Amazon Cognito user pools console to make it easier to use. The new layouts and workflows are optimized for faster access to relevant infomation. Learn more about changes and let us know what you think. Or you can switch back to the old console"
    }
    setList([...list, welcomeProps])
  }
  const statusChangeMessage = () => {
    welcomeProps = {
      id: list.length,
      icon: <CheckCircleIcon />,
      backgroundColor: "#1d8102",
      title: `User access for 'phuong.pham' has been ${
        status === true ? "disabled" : "enabled"
      } successfully`
    }
    setStatus(!status)
    setList([...list, welcomeProps])
  }
  return (
    <>
      <TestMessage list={list} setList={setList} />
      <Box sx={{ position: "absolute", bottom: "0", left: "0" }}>
        <Button onClick={addWelcomeMessage}>Welcome</Button>
        <Button onClick={statusChangeMessage}>
          {status === true ? "Disable" : "Enabled"}
        </Button>
      </Box>
    </>
  )
}

export default Message
