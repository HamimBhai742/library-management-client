import React from 'react';

const BorrowedBookCard = ({ book }) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-4">
      <img className="w-full h-56 object-cover rounded-xl" src={book.book_img} alt={book.title} />
      <div className="py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h2>
        <p className="text-sm text-gray-600">by {book.author} ({book.published_year})</p>
        <p className="text-sm text-gray-600">Category: <span className="font-medium">{book.category}</span></p>
        <p className="text-sm text-gray-600">Publisher: {book.publisher}</p>
        <p className="text-sm text-gray-600 mt-1">ISBN: {book.isbn}</p>

        <div className="mt-3">
          <p className="text-sm text-gray-700">Borrowed By: <span className="font-semibold">{book.name}</span></p>
          <p className="text-sm text-gray-700">Email: {book.email}</p>
          <p className="text-sm text-gray-700">Borrowed On: {new Date(book.borrow_date).toLocaleDateString()}</p>
          <p className="text-sm text-gray-700">Due Date: {new Date(book.due_date).toLocaleDateString()}</p>
          <p className="text-sm text-red-600 font-semibold">Status: {book.status}</p>
        </div>
        <div>
          <button className='btn btn-error mx-auto mt-3'>Return Book</button>
        </div>
      </div>
    </div>
  );
};

export default BorrowedBookCard;
