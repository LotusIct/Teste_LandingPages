import React from 'react';
import './App.css';
import IntroVideo from './components/IntroVideo'; // ✅ novo
import Header from './components/Header';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Projetos from './components/Projetos';
import Contato from './components/Contato';

function App() {
  return (
    <div className="App">
      <IntroVideo /> {/* ✅ novo */}
      <Header />
      <Sobre />
      <Servicos />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
