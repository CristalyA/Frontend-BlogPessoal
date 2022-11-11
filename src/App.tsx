 import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Login from './paginas/login/Login';
import Home from './paginas/home/Home';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listaTema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import CadastroPost from './components/postagens/cadatroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastrousuario" element={<CadastroUsuario />} />
      <Route path="/temas" element={<ListaTema />} />
      <Route path="/posts" element={<ListaPostagem />} />
      <Route path="/formularioPostagem" element={<CadastroPost />} />
      <Route path="/formularioPostagem/:id" element={<CadastroPost />} />
      <Route path="/formularioTema" element={<CadastroTema />} />
      <Route path="/formularioTema/:id" element={<CadastroTema />} />
      <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
      <Route path="/deletarTema/:id" element={<DeletarTema />} />
      </Routes>
      <Footer/>
    </Router>

  );
}

export default App;
