import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Components/Layout/Layout'
import Home from './Components/Home/Home'
import { useState } from 'react'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contacts from './Components/Contacts/Contacts'


function App() {



const router = createBrowserRouter([
    { path: '/', element: <Layout /> ,children:[
      {index : true, element: <Home/> },
      {path: '/about', element: <About/> },
      {path: '/Portfolio', element: <Portfolio/> },
      {path: '/contact', element: <Contacts/> },
      {path:'*', element:<div className='w-screen h-screen flex justify-center items-center text-9xl text-red-700 font-bold italic'>Error 404</div>}
    ]},
    
  ])

  return (
    <>
      <main className='min-h-screen flex flex-col'>
        <RouterProvider router={router}/>
      </main>
    </>
  )
}

export default App
