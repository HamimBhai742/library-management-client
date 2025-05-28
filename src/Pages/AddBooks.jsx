import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddBook = () => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await axiosPublic.post('/add-books', data);
      console.log(res);
      if (res.data) {
        toast.success('✅ Book added successfully!');
        reset();
      }
      // await axios.post('http://localhost:5000/api/books', data);
      // alert('✅ Book added successfully!');
      // reset();
    } catch (error) {
      console.error(error);
      alert('❌ Failed to add book');
    }
  };

  return (
    <div className='max-w-3xl mx-auto mt-10 px-6 py-8 bg-white rounded-2xl shadow-lg'>
      <h2 className='text-3xl font-bold text-center text-blue-700 mb-8'>
        <Helmet>
          <title>Add Book</title>
        </Helmet>
        📚 Add New Book
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid gap-4 grid-cols-2'
      >
        {/* Book Title */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Book Title
          </label>
          <input
            {...register('title', { required: 'Title is required' })}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter book title'
          />
          {errors.title && (
            <p className='text-red-500 text-sm mt-1'>{errors.title.message}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>Author</label>
          <input
            {...register('author', { required: 'Author is required' })}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter author name'
          />
          {errors.author && (
            <p className='text-red-500 text-sm mt-1'>{errors.author.message}</p>
          )}
        </div>

        {/* Category */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Category
          </label>
          <input
            {...register('category')}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='E.g., Fiction, Science, Biography'
          />
        </div>

        {/* ISBN */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>ISBN</label>
          <input
            {...register('isbn')}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter ISBN number'
          />
        </div>

        {/* Publisher */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Publisher Name
          </label>
          <input
            type='text'
            {...register('publisher')}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='publisher name'
          />
        </div>

        {/* Published Year */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Published Year
          </label>
          <input
            type='number'
            {...register('published_year')}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='E.g., 2022'
          />
        </div>

        {/* Total Copies */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Total Copies
          </label>
          <input
            type='number'
            {...register('total_copies', {
              required: 'Total copies is required',
            })}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Enter total copies'
          />
          {errors.total_copies && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.total_copies.message}
            </p>
          )}
        </div>

        {/* Book Image */}
        <div>
          <label className='block text-gray-700 font-medium mb-1'>
            Book Image URL
          </label>
          <input
            {...register('book_img')}
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder='Paste book image URL'
          />
        </div>

        {/* Submit Button */}
        <div className='text-center mt-3 col-span-2'>
          <button
            type='submit'
            className='bg-blue-600 w-full  hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-200'
          >
            ➕ Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
