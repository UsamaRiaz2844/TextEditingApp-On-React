
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react' ;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [switchtext , setSwitchText]  = useState('Enable Dark Mode')
  const [mode , setMode] = useState(null)
  const [alert , setAlert] = useState(null); 



const removeclass = ()=>{
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-success')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')
  document.body.classList.remove('bg-primary')
}

  const tooglemode = (cls)=>{
    removeclass();
    document.body.classList.add("bg-" + cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#283f56"
      setSwitchText("Enable Light Mode")
      alertfunction("Dark Mode Enabled" , "success")
      document.title = "Text App - Dark Mode "; 
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      setSwitchText("Enable Dark Mode")
      alertfunction("Light Mode Enabled" , "success")
      document.title = "Text App - Light Mode " ; 
    }
  }

  const alertfunction = (message, type)=>{
    setAlert({
      message : message ,
      type : type
    })
   setTimeout(() => {
     setAlert(null)
   }, 1400);
}
  return (
    <>
    
    <Router>
   
    <Navbar title = "TextFormet" contactUs = "Contact Us "  mode = {mode} toglemode = {tooglemode} switchtext = {switchtext} />
    <Alert alert = {alert} />
<Routes>
          <Route exact path="/about" element = {<About mode = {mode}  />}>
            
          </Route>

          <Route exact path="/" element = {<TextForm title = "Enter Your Text Here"  mode = {mode}  alertfunction = {alertfunction}/>} >
          </Route>
        
</Routes>
</Router>




</>
  );
}

export default App;
