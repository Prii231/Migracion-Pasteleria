import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="fondoCuerpo">
        <div className='col-lg-12'>
          <NavbarPrincipal />
        </div>
        <Routes>
          <Route path="/" element={<div><h1>Página de Inicio</h1></div>} />
          <Route path="/catalogo" element={<div><h1>Catálogo</h1></div>} />
          <Route path="/login" element={<div><h1>Login</h1></div>} />
          <Route path="/registro" element={<div><h1>Registro</h1></div>} />
          <Route path="/perfil" element={<div><h1>Perfil</h1></div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
