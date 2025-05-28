import React, { useState } from 'react';
import toast from 'react-hot-toast';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useForm } from 'react-hook-form';

const BorrowedBookCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data, id) => {
    console.log('Submitted:', data, id);
    const res = await axiosPublic.put(`/return/${id}`, data);
    if (res.data) {
      toast.success('✅ Book returned successfully!');
      setShowModal(false);
      reset();
    }

    // Optional: Send POST request to backend API here
  };
  const handelReturnBtn = (id) => {
    console.log(id);
    setShowModal(true);
  };
  return (
    <div>
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
              Borrowed On: {new Date(book.borrow_date).toLocaleDateString()}
            </p>
            <p className='text-sm text-gray-700'>
              Due Date: {new Date(book.due_date).toLocaleDateString()}
            </p>
            <p className='text-sm text-red-600 font-semibold'>
              Status: {book.status}
            </p>
          </div>
          <div>
            <button
              className='btn btn-error mx-auto mt-3'
              onClick={() => handelReturnBtn(book?.transaction_id)}
            >
              Return Book
            </button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-xl w-96'>
            <h3 className='text-xl font-bold mb-4'>Return Book</h3>

            <form
              onSubmit={handleSubmit((data) =>
                onSubmit(data, book?.transaction_id)
              )}
              className='space-y-4'
            >
              <div>
                <label className='block text-sm font-medium'>Status</label>
                <select {...register('status')} className='select select-ghost'>
                  <option value='returned'>Returned</option>
                  <option value='overdue'>Over Due</option>
                </select>
              </div>

              <div>
                <label className='block text-sm font-medium'>Return Date</label>
                <input
                  type='date'
                  {...register('return_date')}
                  className='w-full border rounded-md p-2'
                />
                {/* {errors.due_date && (
                  <p className='text-red-500 text-sm'>Due date is required</p>
                )} */}
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

export default BorrowedBookCard;
