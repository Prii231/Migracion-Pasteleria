import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="">
      <div className='col-lg-12'>
        <NavbarPrincipal/>
      </div>
    </div>
  );
}

export default App;
