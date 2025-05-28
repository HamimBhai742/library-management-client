import React from 'react';
import dayjs from 'dayjs';
import toast from 'react-hot-toast';
const TransctionCard = ({ book }) => {
  const return_date_fr = dayjs(book?.return_date).format('DD-MM-YYYY');
  const due_date_fr = dayjs(book?.due_date).format('DD-MM-YYYY');
  const borrowed_date_fr = dayjs(book?.borrow_date).format('DD-MM-YYYY');

  const handelReturnBtn = (status) => {
    console.log(status);
    if (status === 'returned') {
      toast.success('The Book has been returned');
    } else if (status === 'borrowed') {
      toast.error('The Book has not been returned yet');
    }
  };
  // console.log(d)
  return (
    <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-4'>
      <img
        className='w-full h-56 object-cover rounded-xl'
        src={book.book_img}
        alt={book.title}
      />
      <div className='py-4'>
        <h2 className='text-xl font-bold text-gray-800 mb-1'>{book.title}</h2>
        <p className='text-sm text-gray-600'>
          by {book.author} ({book.published_year})
        </p>
        <p className='text-sm text-gray-600'>
          Category: <span className='font-medium'>{book.category}</span>
        </p>
        <p className='text-sm text-gray-600'>Publisher: {book.publisher}</p>
        <p className='text-sm text-gray-600 mt-1'>ISBN: {book.isbn}</p>

        <div className='mt-3'>
          <p className='text-sm text-gray-700'>
            Borrowed By: <span className='font-semibold'>{book.name}</span>
          </p>
          <p className='text-sm text-gray-700'>Email: {book.email}</p>
          <p className='text-sm text-gray-700'>
            Borrowed On: {borrowed_date_fr}
          </p>
          <p className='text-sm text-gray-700'>Due Date: {due_date_fr}</p>
          <p className='text-sm text-gray-700'>
            Returned Date:{' '}
            {return_date_fr === 'Invalid Date' ? 'No Return' : return_date_fr}
          </p>
          <p
            className={`text-sm  font-semibold ${
              book?.status === 'returned' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            Status: {book.status}
          </p>
        </div>
        <div>
          <button
            onClick={() => handelReturnBtn(book?.status)}
            className={`btn ${
              book?.status === 'returned' ? 'btn-success' : 'btn-error'
            } mx-auto mt-3`}
          >
            {book?.status === 'returned' ? 'Returned Book' : 'Return Book'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransctionCard;
