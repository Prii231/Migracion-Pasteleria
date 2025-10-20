import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatalogoProductos from './Components/Catalogo';
<<<<<<< HEAD



import Home from './Components/Home'; 
import Footer from './Components/Footer';

=======
import Home from './Components/Home'; 
import Footer from './Components/Footer';
import Carrusel from './Components/Carrusel';
import Cards from './Components/Card';
import Login from './Components/InicioSesion';
import Registro from './Components/Registro';
import Perfil from './Components/ActualizarPerfil';
>>>>>>> 0d74a6f5bc6a14a6db18d9e4e860ab6e557c1858

function App() {
  return (
    <BrowserRouter>
      <div className="fondoCuerpo">
        <div className='col-lg-12'>
          <NavbarPrincipal />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/catalogo" element={<CatalogoProductos/>} />
          <Route path="/login" element={<div><h1>Login</h1></div>} />
          <Route path="/registro" element={<div><h1>Registro</h1></div>} />
          <Route path="/perfil" element={<div><h1>Perfil</h1></div>} />
=======
          <Route path="/catalogo" element={<CatalogoProductos />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
>>>>>>> 0d74a6f5bc6a14a6db18d9e4e860ab6e557c1858
        </Routes>
        
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
