import { useBookContext } from "../../context/context"
import { useState } from 'react'
import BookItem from '../BookItem'
import { Container, ContainerBookList, ContainerFilter } from "./styles";

export default function BookList() {

  const { book, filterBook, resetBook } = useBookContext();
  const [selectedGenre, setSelectedGenre] = useState('');

  const initialGenre = book.map((book) => book.genre);
  const bookGenre = [...new Set(initialGenre)];

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <Container>
      <h1>LISTA DE LIVROS</h1>
      <ContainerFilter>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option />
          {bookGenre.map((genre) => (
            <option value={genre} key={genre}>{genre}</option>))}
        </select>
        <button onClick={() => filterBook(selectedGenre)}>Filtrar</button>
        <button onClick={resetBook}>Limpar</button>
      </ContainerFilter>
      <ContainerBookList>
        {book.map(({ title, author, details }) => (
          <BookItem title={title} author={author} details={details} key={title} />
        ))}
      </ContainerBookList>
    </Container>
  )
}