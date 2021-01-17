import React from 'react';
import GlobalStyle from './styles/global';
import Navbar from './components/Navbar';
import Home from './pages/Home';

const App: React.FC = () => (
  <>
    <Navbar />
    <Home />
    <GlobalStyle />
  </>
);

export default App;
