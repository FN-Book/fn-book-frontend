import { Routes, Route } from 'react-router-dom'
import { About, AdminArea, Home, Login, Register, QuizGame } from './pages'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/admin-area" element={<AdminArea />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz" element={<QuizGame />} />
      </Route>
    </Routes>
  )
}