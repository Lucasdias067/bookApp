import { useBookContext } from "../../context/context"
import { useState } from 'react'
import BookItem from '../BookItem'
import { Container, ContainerBookList, ContainerFilter } from "./styles";

export default function BookList() {

  const { book, filterBook, resetBook, initialBooks } = useBookContext();
  const [selectedGenre, setSelectedGenre] = useState('');

  const initialGenre = book.map((book) => book.genre);
  const initialGenre2 = initialBooks.map((book) => book.genre);
  const bookGenre = [...new Set([...initialGenre, ...initialGenre2])];

  const handleGenreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(event.target.value);
  };

  return (
    <Container>
      <h1>LISTA DE LIVROS</h1>
      <ContainerFilter>
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option disabled />
          {bookGenre.map((genre) => (
            <option value={genre} key={genre}>{genre}</option>))}
        </select>
        <div>
          <button onClick={() => filterBook(selectedGenre)} disabled={selectedGenre === ''}>Filtrar</button>
          <button onClick={resetBook}>Limpar</button>
        </div>
      </ContainerFilter>
      <ContainerBookList>
        {book.map(({ title, author, details, genre }) => (
          <BookItem title={title} author={author} details={details} genre={genre} key={title} />
        ))}
      </ContainerBookList>
    </Container>
  )
}