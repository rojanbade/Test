
import './App.css'
import { Calculator, Paper } from './component/calculator/calculator'
import Avatar from './component/shared-component/card/Avatar'
import Youtube from './component/youtube'
import Image from './assets/KMC_Logo.jpg'
import { useContext, useState, useRef } from 'react'
import { ThemeContext } from './context/themeContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Laptop from './laptop'
import ConditionalRendering from './component/conditional-rendering.js'
import Uncontrolled from './component/uncontrolled/index.jsx'
import StateUp from './component/state-up/index.jsx'
// import BlogPost from './component/posts/index.jsx'
import Product from './component/product/index.jsx'
import Counter from './component/counter/index.jsx'
import Login from './component/login/index.jsx'
import FriendList from './component/friend/friend-list.jsx'
import FriendStatus from './component/friend/friend-status.jsx'
import { createPortal } from 'react-dom'
import PostData from './component/postData.jsx'
import BlogPost from './component/blog-post/index.jsx'


const profile = {
  firstName: 'Ram',
  lastName: 'Thapa',
  imageUrl: Image,
  email: 'ram@gmail.com',
  contact: 9808456733
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Laptop />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/youtube",
    element: <Youtube />,
  },
  {
    path: "/calculator",
    element: <Calculator />,
  },
  {
    path: "/avatar",
    element: <Avatar user={profile} />,
  },
  {
    path: "/signup",
    element: <Uncontrolled />,
  },
]);

function App() {
  const theme = useContext(ThemeContext);
  const [mode, setMode] = useState(theme);
  const fileUpload = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('file name is :' + fileUpload.current.files[0].name)
  }

  return (
    <>
      <ThemeContext.Provider value={mode}>
        {/* <StateUp /> */}
        {/* <BlogPost /> */}

        <BlogPost />

        {/* <PostData /> */}

        {/* <Product name='Ganus' />
        <br />
        <hr />
        <form onSubmit={handleSubmit}>

          <input type="file" ref={fileUpload} />
          <input type='submit' />
        </form> */}

        {/* <h1>testing Fragment</h1>
        {
          createPortal(
            <p>This is children of portal</p>,
            document.body
          )
        } */}

        {/* <RouterProvider router={router} /> */}
        {/* <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`btn-${mode}`}>
          Dark mode
        </button> */}
        {/* <ConditionalRendering /> */}

      </ThemeContext.Provider>

      {/* <FriendList />
      <FriendStatus /> */}
    </>
  )
}

export default App


