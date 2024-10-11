import { Routes, Route } from 'react-router-dom'
import { About, AdminArea, Home } from './pages'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <Routes>
      {/* <Route element={<Navbar />}> */}
        <Route path="/" element={<Home />} />
        <Route path="/admin-area" element={<AdminArea />} />
        <Route path="/about" element={<About />} />
      {/* </Route> */}
    </Routes>
  )
}