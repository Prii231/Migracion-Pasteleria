import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatalogoProductos from './Components/Catalogo';
import Home from './Components/Home'; 
import Footer from './Components/Footer';
import Carrusel from './Components/Carrusel';
import Cards from './Components/Card';
import Login from './Components/InicioSesion';
import Registro from './Components/Registro';
import Perfil from './Components/ActualizarPerfil';

function App() {
  return (
    <BrowserRouter>
      <div className="fondoCuerpo">
        <div className='col-lg-12'>
          <NavbarPrincipal />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<CatalogoProductos />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
        
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
