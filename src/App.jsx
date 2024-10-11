import { Routes, Route } from 'react-router-dom'
import { About, AdminArea, Home } from './pages'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin-area" element={<AdminArea />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}