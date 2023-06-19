import { useBookContext } from "../../context/context"
import { ContainerForm, Form, Button } from "./styles";

export default function BookForm() {
  const { form, handleChange, handleSubmit } = useBookContext();
  const { title, author, genre, details } = form;

  return (
    <ContainerForm>
      <h1>ADICIONE UM LIVRO</h1>
      <Form onSubmit={handleSubmit}>
        <label>Nome do livro:</label>
        <input type="text" value={title} name="title" onChange={e => handleChange(e)} minLength={3} />

        <label>Nome do autor:</label>
        <input type="text" value={author} name="author" onChange={e => handleChange(e)} minLength={3} />

        <label>Genero do livro:</label>
        <input type="text" value={genre} name="genre" onChange={e => handleChange(e)} minLength={3} />

        <label>Descrição do livro:</label>
        <textarea value={details} name="details" onChange={e => handleChange(e)} maxLength={120} cols={40} rows={5} />

        <Button type="submit" disabled={!title || !author || !details}>ADICIONAR</Button>
      </Form>
    </ContainerForm>
  )
}