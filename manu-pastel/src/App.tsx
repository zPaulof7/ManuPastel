// src/App.tsx - NA RAIZ!
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/welcome/Welcome'    // ← Importa do pages/
import Home from './pages/home/Home'
import './App.css'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App