// import { useState } from 'react'
import BookForm from './components/BookForm/index.tsx'
import BookList from './components/BookList'
import { BookProvider } from './context/context.tsx'

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <BookProvider>
      <BookForm />
      <BookList />
    </BookProvider>
  )
}

