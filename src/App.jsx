import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Blogposts from './pages/Blogposts'

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/blogposts" element ={<Blogposts/>}/>
            <Route path="/blog" element={<Blog/>} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
