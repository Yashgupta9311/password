import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Blocks from './components/Blocks';
import Front from './components/front';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Front />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/login",
      element: <Login />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
