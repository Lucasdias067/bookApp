import BookForm from './components/BookForm/index.tsx'
import BookList from './components/BookList'
import { BookProvider } from './context/context.tsx'

export default function App() {

  return (
    <BookProvider>
      <BookForm />
      <BookList />
    </BookProvider>
  )
}

