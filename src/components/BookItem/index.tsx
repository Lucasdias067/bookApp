import { IBook } from "../../types/BookList";
import { useBookContext } from "../../context/context"
import { Author, CloseButton, ContainerBook, DetailButton, Details, Modal, Title } from "./styles";
import { useState } from "react";
export default function BookItem({ title, author, details }: IBook) {

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
        <Modal >
          <Details>{details}</Details>
          <button type="button" onClick={displayModal}>X</button>
        </Modal>
      )}
    </ContainerBook>
  )
}