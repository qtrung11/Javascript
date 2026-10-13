import React from "react";
import axios from 'axios';
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const bodyData = {
        data: {
          "email": "test12345@gmail.com",
          "password": "123456"
        }
      };
      const res = await axios.post('https://tony-auth-express-vdee.vercel.app/api/user/signin', bodyData, {
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (res.data.isSucess) {
        const access_token = res.data.data.access_token;
        window.localStorage.setItem('access_token', access_token);
        navigate("/");
      }
      console.log("res: ", res)
    } catch (e) {
      // TODO: show popup error
      console.log('Fail login: ', e)
    }

  }
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white">
      <p className="text-2xl font-medium m-auto">
          <span className="text-indigo-500">User</span> Login
      </p>
      <div className="w-full ">
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="test12345@gmail.com" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="email" required />
      </div>
      <div className="w-full ">
          <p>Password</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="123456" className="border border-gray-200 rounded w-full p-2 mt-1 outline-indigo-500" type="password" required />
      </div>
      <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 transition-all text-white w-full py-2 rounded-md cursor-pointer">
          Login
      </button>
  </form>
  )
}

export default Login