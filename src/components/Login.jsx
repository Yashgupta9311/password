import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


const Login = () => {
  const [form, setform] = useState({ email: "", password: "" })

  let navigate = useNavigate()
  const handlesumbit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/auth/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ email: form.email, password: form.password })
    });

    const result = await response.json();
    console.log(result)
    if (result.succes) {
      // settoken in localstorage and redirect it to home page
      localStorage.setItem("jwttoken", result.jwttoken)
      navigate('/home')
    }

  }
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handlesumbit} method='POST'>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700">Email address</label>
            <input onChange={handlechange}
              value={form.email}
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='email'
              id="email"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="text-xs text-gray-500">We'll never share your email with anyone else.</small>
          </div>
          <div className="mb-6">
            <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700">Password</label>
            <input onChange={handlechange}
              type="password"
              value={form.password}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name='password'
              id="password"
              placeholder="Password"
            />
          </div>
          <div className='mb-4'>
            <small className=" text-xs text-gray-500">Not registred yet ? <b><Link to="/signup">Sign in</Link></b> today</small>
          </div>
          <button
            type="submit"
            className="w-full py-2  px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >

            Submit
          </button>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
