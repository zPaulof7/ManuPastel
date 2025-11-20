import { useEffect, useState } from 'react'
import logo from '../../assets/logo.jpg'
import '../../styles/Welcome.css'
import '../../styles/Welcome.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  const handleHomeClick = (): void => {
    navigate('/Home')
  }

  useEffect(() => {
    document.title = 'Bem-vindo - Pastel da Manu!'
  }, [])

  return (
    <>
      <div className='divLogo'>
        <img src={logo} className="logo react" alt="React logo" />
      </div>
      <p className='bemvindo'>Bem-vindo ao</p>
      <h2>Pastéis da Manu!</h2>
      <p>Sua loja de salgados favorita agora online!</p>
      <div className="card">
        <button className='login' onClick={handleHomeClick}>
          Entrar
        </button>
      </div>
      <p className="read-the-docs">
        Não tem conta ainda? <a href=''>Clique aqui</a> para se cadastrar.
      </p>
    </>
  )
}

export default App
