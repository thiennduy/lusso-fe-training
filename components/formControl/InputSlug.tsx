import InputField from "./InputField"
import { useWatch } from "react-hook-form"
import { useEffect, memo } from "react"
type InputSlugSchema = {
  control: any
  onChangeName: Function
}
function InputSlug(props: InputSlugSchema) {
  const { control, onChangeName } = props
  const enName = useWatch({
    control,
    name: "name.en"
  })
  useEffect(() => {
    onChangeName(enName)
  }, [enName])
  return (
    <>
      <InputField name='slug' label='Slug' />
    </>
  )
}
export default InputSlug
