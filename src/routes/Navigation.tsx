import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import HomePage from '../pages/HomePage/HomePage'
// import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<h1>About Page</h1>} />
        <Route path="users" element={<h1>Users Page</h1>} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
