// BookCard.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import useUser from '../hooks/useUser';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const BookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const [user] = useUser();
  const onSubmit = async (data) => {
    console.log('Submitted:', data);
    const borrowData = {
      ...data,
      book_id: book?.book_id,
      id: user?.id,
    };
    const res = await axiosPublic.post('transactions', borrowData);
    if (res.data) {
      toast.success('✅ Book borrowed successfully!');
      setShowModal(false);
      reset();
    }

    // Optional: Send POST request to backend API here
  };
  const handelBorrowed = async () => {
    // const checkRole=
    if (user?.role === 'admin') {
      toast.error('Admin cannot borrowed any books');
      return
    }
    const res = await axiosPublic.get(`transactions?book_id=${book?.book_id}`);
    console.log(res.data.length);
    if (res.data.length === 0) {
      setShowModal(true);
    } else {
      toast.error('❌ This book is already borrowed!');
    }
  };

  return (
    <div>
      <div className='max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300'>
        <img
          className='w-full h-60 object-cover'
          src={book.book_img}
          alt={book.title}
        />
        <div className='px-4 py-4'>
          <h3 className='text-xl font-bold mb-1 text-gray-800'>{book.title}</h3>
          <p className='text-gray-600 text-sm'>by {book.author}</p>
          <p className='mt-2 text-gray-700 text-sm'>
            Category: {book.category}
          </p>
          <p className='text-gray-700 text-sm'>Publisher: {book.publisher}</p>
          <p className='text-gray-700 text-sm'>
            Published: {book.published_year}
          </p>
          <p className='text-gray-700 text-sm'>
            Available: {book.available_copies}
          </p>
        </div>
        <button
          onClick={handelBorrowed}
          className='my-2 mx-auto flex justify-center  bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
        >
          Borrow
        </button>
      </div>
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-xl w-96'>
            <h3 className='text-xl font-bold mb-4'>Borrow Book</h3>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
              <div>
                <label className='block text-sm font-medium'>Borrow Date</label>
                <input
                  type='date'
                  {...register('borrow_date', { required: true })}
                  className='w-full border rounded-md p-2'
                />
                {errors.borrow_date && (
                  <p className='text-red-500 text-sm'>
                    Borrow date is required
                  </p>
                )}
              </div>

              <div>
                <label className='block text-sm font-medium'>Due Date</label>
                <input
                  type='date'
                  {...register('due_date', { required: true })}
                  className='w-full border rounded-md p-2'
                />
                {errors.due_date && (
                  <p className='text-red-500 text-sm'>Due date is required</p>
                )}
              </div>

              <div className='flex justify-end gap-2'>
                <button
                  type='button'
                  onClick={() => {
                    setShowModal(false);
                    reset();
                  }}
                  className='px-4 py-2 bg-gray-300 rounded-md'
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookCard;
