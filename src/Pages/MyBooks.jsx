import { useQuery } from '@tanstack/react-query';

import MyBookCard from './MyBooksCard';
import { Helmet } from 'react-helmet';
import useAxiosPublic from '../hooks/useAxiosPublic';
import toast from 'react-hot-toast';

const MyBooks = () => {
  const axiosPublic = useAxiosPublic();
  const { data: books = [] } = useQuery({
    queryKey: ['books'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/books');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    },
  });
  console.log(books);
  const handelDeleteBtn = async (id) => {
    console.log(id);
   try{
     const res = await axiosPublic.delete(`/my-book-admin/${id}`);
    if(res.data){
      toast.success("Book Delete Successful")
    }
   }catch(err){
    toast.error(err.message)
   }
  };
  return (
    <div className='mx-10 mt-5'>
      <Helmet>
        <title>My Books</title>
      </Helmet>
      <div className='grid grid-cols-3 gap-5'>
        {books.map((book, idx) => (
          <MyBookCard key={idx} book={book} handelDeleteBtn={handelDeleteBtn} />
        ))}
      </div>
    </div>
  );
};

export default MyBooks;
