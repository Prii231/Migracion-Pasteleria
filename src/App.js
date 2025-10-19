import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CatalogoProductos from './Components/Catalogo';
import Home from './Components/Home'; 
import Footer from './Components/Footer';
import Carrusel from './Components/Carrusel';
import Cards from './Components/Card';


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
          <Route path="/login" element={<div><h1>Login</h1></div>} />
          <Route path="/registro" element={<div><h1>Registro</h1></div>} />
          <Route path="/perfil" element={<div><h1>Perfil</h1></div>} />
        </Routes>
        
        <Footer />
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
