import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const [mode, setMode] = useState('light');
  const [btnmode, setBtnMode] = useState('Enable dark mode')
  const tMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtnMode('Disable dark mode')
      document.body.style.backgroundColor = '#001f3f'
      showAlert("success", "Dark mode enabled")
      document.title = 'TextUtils - Enable dark mode'
    }
    else {
      setMode('light')
      setBtnMode('Enable dark mode')
      document.body.style.backgroundColor = 'white'
      showAlert("success", "Dark mode disabled")
      document.title = 'TextUtils - Enable light mode'
    }
  }


  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={tMode} btnMode={btnmode} />

        <Alert alert={alert} />

        <div className="container my-4">

          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter text here" mode={mode} />
            {/* </Route> */}

          {/* </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
