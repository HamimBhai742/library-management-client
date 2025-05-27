import { useQuery } from '@tanstack/react-query'
import BookCard from './BookCard'
import { Helmet } from 'react-helmet'

const Books = () => {
  const {data:books=[]}=useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/books')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    }
  })
  console.log(books)


  return (
    <div className='mx-10 mt-5'>
        <Helmet>
        <title>Books</title>
      </Helmet>
      <div className='grid grid-cols-3 gap-5'>
      {
    books.map((book,idx)=><BookCard key={idx} book={book}/>)}
    </div>
    {/* Modal */}


    </div>
  )
}

export default Books
