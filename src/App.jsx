import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Home } from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
