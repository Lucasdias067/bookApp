import { useBookContext } from "../../../context/context";

export default function InputComponent({ value, name }: { value: string, name: string }) {

  const { handleChange } = useBookContext();

  return (
    <>
      <input type="text" value={value} name={name} onChange={e => handleChange(e)} minLength={3} />
    </>
  )
}