import { useBookContext } from "../../context/context"
import InputComponent from "./inputComponent";
import { ContainerForm, Form, Button } from "./styles";

export default function BookForm() {
  const { form, handleChange, handleSubmit } = useBookContext();
  const { title, author, genre, details } = form;

  return (
    <ContainerForm>
      <h1>ADICIONE UM LIVRO</h1>
      <Form onSubmit={handleSubmit}>
        <label>Nome do livro:</label>
        <InputComponent value={title} name="title" />
        <label>Nome do autor:</label>
        <InputComponent value={author} name="author" />
        <label>Genero do livro:</label>
        <InputComponent value={genre} name="genre" />
        <label>Descrição do livro:</label>
        <textarea value={details} name="details" onChange={e => handleChange(e)} maxLength={500} cols={40} rows={5} />

        <Button type="submit" disabled={!title || !author || !details}>ADICIONAR</Button>
      </Form>
    </ContainerForm>
  )
}