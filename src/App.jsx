
import './App.css'
import { Calculator, Paper } from './component/calculator/calculator'
import Avatar from './component/shared-component/card/Avatar'
import Youtube from './component/youtube'
import Image from './assets/KMC_Logo.jpg'
import { useContext, useState } from 'react'
import { ThemeContext } from './context/themeContext'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Laptop from './laptop'
import ConditionalRendering from './component/conditional-rendering.js'
import Uncontrolled from './component/uncontrolled/index.jsx'
import StateUp from './component/state-up/index.jsx'
import BlogPost from './component/posts/index.jsx'
import Product from './component/product/index.jsx'
import Counter from './component/counter/index.jsx'
import Login from './component/login/index.jsx'


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


  return (
    <>
      {/* <ThemeContext.Provider value={mode}> */}
      {/* <StateUp /> */}
      {/* <BlogPost /> */}

      {/* <Product name='Dhanus' /> */}
      <RouterProvider router={router} />
      {/* <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
        Dark mode
      </button> */}
      {/* <ConditionalRendering /> */}

      {/* </ThemeContext.Provider> */}
    </>
  )
}

export default App


