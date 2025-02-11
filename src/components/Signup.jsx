import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const [form, setform] = useState({ name: "", email: "", password: "", cpassword: "" })
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  }
  let navigate = useNavigate()
  const handlesumbit = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:3000/api/auth/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ name: form.name,email: form.email, password: form.password })
    });

    const result = await response.json();
    console.log(result)
    if (result.succes) {
      // settoken in localstorage and redirect it to home page
      localStorage.setItem("jwttoken", result.jwttoken)
      navigate('/login')
    }

  }
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Sign in</h2>
        <form  onSubmit={handlesumbit}>
          <div className="mb-6">
            <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              name='name'

              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

              placeholder="name"
              onChange={handlechange}

            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleInputEmail1" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              name='email'
              type="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="email"

              placeholder="Enter email"
              onChange={handlechange}
            />
            <small id="emailHelp" className="text-xs text-gray-500">We'll never share your email with anyone else.</small>
          </div>
          <div className="mb-6">
            <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name='password'
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="password"
              placeholder="Password"
              onChange={handlechange}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="exampleInputPassword1" className="block text-sm font-medium text-gray-700"> Confirm Password</label>
            <input
              name='cpassword'
              type="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="cpassword"
              placeholder=" Confirm Password"
              onChange={handlechange}
            />
          </div>
          <button onClick={()=>{console.log("hello") 
          handlesumbit}
          }
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup
