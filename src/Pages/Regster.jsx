import { useForm  } from "react-hook-form"
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const {register,handleSubmit}=useForm()
  const navigate=useNavigate()
const axiosPublic=useAxiosPublic()
  const onSubmit=async(data)=>{
// const userData={
//   ...data,
//   role:'member'
// }
try{
  const res =await axiosPublic.post('/api/auth/register',data)
console.log(res)
if(res.data){
  toast.success('✅ Registration successful! Please login.');
  // Redirect to login page or perform any other action
  navigate('/login');
}}catch(error){
  toast.error('❌ Registration failed. Please try again.');
  console.error("Registration error:", error.message);
}

  }
  return (
    <div className="min-h-screen flex items-center justify-center ">
        <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Register for Library</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
          </div>
  <div>
            <label className="block text-gray-700">Photo Url</label>
            <input
              type="url"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your photo url"
              {...register("photo", { required: true })}
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full border border-gray-300 rounded px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Create a password"
              {...register("password", { required: true, minLength: 6 })}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-600">
          Already have an account? <a href="/login" className="text-purple-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
