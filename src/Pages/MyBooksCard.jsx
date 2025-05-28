// BookCard.jsx
import React from 'react';

const MyBookCard = ({ book, handelDeleteBtn }) => {
  return (
    <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300'>
      <img
        className='w-full h-60 object-cover'
        src={book.book_img}
        alt={book.title}
      />
      <div className='px-4 py-4'>
        <h3 className='text-xl font-bold mb-1 text-gray-800'>{book.title}</h3>
        <p className='text-gray-600 text-sm'>by {book.author}</p>
        <p className='mt-2 text-gray-700 text-sm'>Category: {book.category}</p>
        <p className='text-gray-700 text-sm'>Publisher: {book.publisher}</p>
        <p className='text-gray-700 text-sm'>
          Published: {book.published_year}
        </p>
        <p className='text-gray-700 text-sm'>
          Available: {book.available_copies}
        </p>
      </div>
      <div className='p-3 flex justify-between items-center'>
        <button onClick={()=>handelDeleteBtn(book?.book_id)} className='btn btn-accent'>
          Delete
        </button>
        <button className='btn btn-info'>Update</button>
      </div>
    </div>
  );
};

export default MyBookCard;
