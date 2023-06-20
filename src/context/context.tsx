import { createContext, useContext, useState } from "react";
import booksLists from '../booksLists.json'
import { IBook, IBookForm, IBookProviderProps } from "../types/BookList";

interface createContextValue {
  book: IBook[],
  setBook: React.Dispatch<React.SetStateAction<IBook[]>>,
  form: IBookForm,
  setForm: React.Dispatch<React.SetStateAction<IBookForm>>,
  initialBooks: IBook[],
}

export const BookContext = createContext({} as createContextValue);
const initialBooks: IBook[] = booksLists;

export const BookProvider = ({ children }: IBookProviderProps) => {

  const [book, setBook] = useState(initialBooks);
  const [form, setForm] = useState<IBookForm>({ title: '', author: '', genre: '', details: '' });

  return (
    <BookContext.Provider value={{ book, setBook, form, setForm, initialBooks }}>
      {children}
    </BookContext.Provider>
  )
}

export const useBookContext = () => {
  const {
    book,
    setBook,
    form,
    setForm,
    initialBooks
  } = useContext(BookContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value })
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isBookExist = book.some(book => book.title === form.title || book.details === form.details)
    if (isBookExist) return alert('Livro já existe');

    setBook([...book, form]);
    setForm({ title: '', author: '', genre: '', details: '' })
    return alert('Livro adicionado com sucesso!');
  }

  function removeBook(title: string) {
    const updatedBook = book.filter(book => book.title !== title);
    setBook(updatedBook)
  }

  function filterBook(genre: string) {
    const filteredBook = book.filter(book => book.genre === genre);
    const initialFilteredBook = initialBooks.filter(book => book.genre === genre);
    if (filteredBook.length === 0) return setBook(initialFilteredBook)

    setBook(filteredBook)
  }

  function resetBook() {
    setBook(initialBooks)
  }

  return {
    book,
    setBook,
    form,
    setForm,
    handleChange,
    handleSubmit,
    removeBook,
    filterBook,
    resetBook,
    initialBooks
  }
}