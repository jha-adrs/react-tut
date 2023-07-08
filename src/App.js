import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

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
      showAlert("Dark mode has been enabled", "dark");
    }
    else {
      setMode('light');
      setButtonState("");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "danger");
    }
  }
  return (
    <div>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} key={new Date()} buttonState = {buttonState}/>
      <Alert alert={alert} />
      <div className="container my-3"></div>
    
    <TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />

    </div>
  );
}

export default App;
