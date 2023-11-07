import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom"
import Layout from "./Layout.jsx"
import Home from "./componets/Home/Home.jsx"
import About from "./componets/About/About.jsx"
import Contact from './componets/Contect/Contect.jsx'
import User from './componets/User/User.jsx'
import Github, { GithubLoader } from './componets/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "about",
//         element: <About />
//       },
//       {
//         path: "contect",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contect' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route
      loader={GithubLoader}
       path='github'
        element={<Github />} 
        />
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
