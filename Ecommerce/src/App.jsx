import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'
import CheckOut from './pages/ChackOut'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='cart' element={<Cart />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
