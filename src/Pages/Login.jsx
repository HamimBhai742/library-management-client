import React from 'react';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
const Login = () => {
    const {register,handleSubmit}=useForm()
const axiosPublic=useAxiosPublic()
  const onSubmit=async(data)=>{
console.log(data)
const res =await axiosPublic.post('/api/auth/login',data)
console.log(res)
if(res.data.token){
  localStorage.setItem('token', res.data.token);
  localStorage.setItem('email', res.data.email);

  Swal.fire({
  icon: "success",
  title: "Your work has been saved",
  showConfirmButton: false,
  timer: 1500
});
  // navigate('/')
   window.location.replace("/");
}
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
        <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">Login to Library</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              placeholder="Enter your password"
              {...register("password", { required: true, minLength: 6 })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account? <a href="/register" className="text-indigo-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
