import { IBook } from "../../types/BookList";
import { useBookContext } from "../../context/context"
import { Author, CloseButton, ContainerBook, DetailButton, Details, Modal, Title } from "./styles";
import { useState } from "react";

export default function BookItem({ title, author, details, genre }: IBook) {

  const { removeBook } = useBookContext();
  const [showDetails, setShowDetails] = useState(false);

  function displayModal() {
    setShowDetails(!showDetails)
  }

  return (
    <ContainerBook>
      <CloseButton onClick={() => removeBook(title)}>
        <span className="material-symbols-outlined">close</span>
      </CloseButton>
      <Title>{title}</Title>
      <Author>{author}</Author>
      <DetailButton onClick={displayModal}>Detalhes</DetailButton>
      {showDetails && (
        <Modal>
          <Title>Titulo do livro: {title}</Title>
          <Author>Nome do autor: {author}</Author>
          <h5>Gênero do livro: {genre}</h5>
          <Details>{details}</Details>
          <button type="button" onClick={displayModal}>X</button>
        </Modal>
      )}
    </ContainerBook>
  )
}