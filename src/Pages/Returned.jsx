import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import useUser from '../hooks/useUser';
import ReturnBookCard from './ReturnBookCard';

const Returned = () => {
  const [user] = useUser();
  const { data: returnBooks = [] } = useQuery({
    queryKey: ['borrowed'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/borrowed');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const bo = await res.json();
      console.log(bo);
      const returned = bo.filter(
        (b) => b.email === user?.email && b.status === 'returned'
      );
      return returned;
    },
  });
  console.log(returnBooks);
  return (
    <div className=' mx-10 mt-5'>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className='grid grid-cols-3 gap-5'>
        {returnBooks.map((book, idx) => (
          <ReturnBookCard book={book} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Returned;
