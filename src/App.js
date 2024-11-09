import React, { useState } from 'react';

import NavBar from './Components/NavBar';
import FormText from './Components/FormText';
import Alert from './Components/Alert';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Components/About';

const App = () => {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState('dark');
  const [alert, setAlert] = useState(null);

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      setText("light");
      document.body.style.backgroundColor = "gray";
      handleAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      setText("dark");
      document.body.style.backgroundColor = "white";
      handleAlert("Light mode has been enabled", "success");
    }
  };

  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <div>
          <NavBar mode={mode} text={text} toggle={toggle} />
          <Alert alert={alert} />
          <div className='container'>
            <Routes>
              <Route 
                path='/' 
                element={<FormText title="Enter the text below to analyze" handleAlert={handleAlert} mode={mode} />} 
              />
              <Route 
                path='/about' 
                element={<About mode={mode}/>} 
              />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
