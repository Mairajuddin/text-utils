///import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React , {useState} from 'react';
function App() {
  const [mode, setMode] = useState('light')
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      }
      else{
        setMode('light') 
        document.body.style.backgroundColor='white';
      }
  }

  return (
    <>
        
  <Navbar title="Qazi-TextUtils" Abouttext="About" mode={mode} toggleMode={toggleMode} />
  <div className="container">
    <TextForm mode={mode} heading="Enter the text to analyze"/>
  </div>
          </>
  );
}

export default App;
