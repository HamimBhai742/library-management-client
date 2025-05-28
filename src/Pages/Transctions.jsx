import { useQuery } from '@tanstack/react-query';
import React from 'react';
import TransctionCard from './TransctionCard';

const Transctions = () => {
    const {data:TransctionBooks=[]}=useQuery({
    queryKey: ['borrowed'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/borrowed')
      if (!res.ok) {
        throw new Error('Network response was not ok')
      }
    return await res.json()
    }
  })
  console.log(TransctionBooks)
  return (
    <div>
<div className='grid grid-cols-3'>
  {
    TransctionBooks.map((book,idx)=><TransctionCard key={idx} book={book}/>)
  }
</div>
    </div>
  );
};

export default Transctions;