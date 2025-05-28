import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import toast from 'react-hot-toast';
import useUser from '../hooks/useUser';

const Navbar = () => {
  const [user] = useUser();
  const token = localStorage.getItem('token');
  const handelLogOutBtn = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    toast.error('LogOut Success');
    window.location.reload();
  };
  console.log(user);
  return (
    <nav className='bg-indigo-700 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
        {/* Logo */}
        <Link
          to='/'
          className='text-xl font-bold tracking-wide hover:text-gray-200'
        >
          📚 LibraryMS
        </Link>

        {/* Menu */}
        <div className='space-x-4 hidden md:flex items-center'>
          <NavLink to='/' className='hover:text-gray-300'>
            Home
          </NavLink>
          <NavLink to='/books' className='hover:text-gray-300'>
            Books
          </NavLink>
          <NavLink to='/members' className='hover:text-gray-300'>
            Members
          </NavLink>
          <NavLink to='/borrowed' className='hover:text-gray-300'>
            Borrowed
          </NavLink>
          <NavLink to='/returned' className='hover:text-gray-300'>
            Returned
          </NavLink>

          <div className='dropdown dropdown-end text-black'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div className='w-10 rounded-full'>
                <img
                  alt='Tailwind CSS Navbar component'
                  src={
                    token
                      ? `${user?.photo}`
                      : 'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  }
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              {user?.role === 'admin' && (
                <li>
                  <NavLink to={'/add-books'}>Add Books</NavLink>
                </li>
              )}
              {user?.role === 'admin' && (
                <li>
                  <NavLink to={'/my-book'}>My Book</NavLink>
                </li>
              )}
              {user?.role === 'admin' && (
                <li>
                  <NavLink to='/transctions' className='hover:text-gray-300'>
                    Transctions
                  </NavLink>
                </li>
              )}

              <li>
                {token ? (
                  <button onClick={handelLogOutBtn}>LogOut</button>
                ) : (
                  <Link to='/login' className='hover:text-gray-300'>
                    Login
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
