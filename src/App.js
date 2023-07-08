import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
    Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const [buttonState, setButtonState] = useState("");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setButtonState("checked");
      document.body.style.backgroundColor = '#2C3333';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      setButtonState("");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} buttonState = {buttonState}/>
      <Alert alert={alert} />
      <div className="container my-3"></div>
    <Routes>
        <Route exact path="/about" element = {<About mode={mode} />}/>
        <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />}/>
    </Routes>
    </div>
  );
}

export default App;
