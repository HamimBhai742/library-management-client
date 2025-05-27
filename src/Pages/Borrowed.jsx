import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Helmet } from 'react-helmet'
import BorrowedBookCard from './BorrowedCard'

const Borrowed = () => {
  const {data:borrowedBooks=[]}=useQuery({
    queryKey: ['borrowed'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/borrowed')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
      return res.json()
    }
  })
  console.log(borrowedBooks)
  return (
    <div className=' mx-10 mt-5'>
        <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='grid grid-cols-3 gap-5'>
        {
        borrowedBooks.map((book,idx)=><BorrowedBookCard book={book} key={idx}/>)
      }
      </div>
    </div>
  )
}

export default Borrowed
