import { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState("light"); //tells whether dark mode is enabled or not
  //it is the default mode

  const toggleMode = () => {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor="rgb(0 30 60)";
      document.body.style.color="white";
    }
    else
    {
      setMode("light");
      document.body.style.backgroundColor="white";
      document.body.style.color="black";
    }
  }

  
  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <TextForm mode={mode}/> 
    </>
  );
}

export default App;
