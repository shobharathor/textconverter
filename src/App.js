
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Background from './components/Background';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode () {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <Background darkMode={darkMode}/>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Body darkMode={darkMode}/>
      <Footer/>
    </>
  );
}

export default App;