import md5 from "md5";
import axios from "axios";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import React,{useState} from "react";
import './App.css'
import Characters from "./Characters";
import Inputs from "./Inputs";
import Header from "./Header";
import Navibar from "./Navibar";
import { useEffect } from "react/cjs/react.development";


function App() {
//const ts = Number(new Date());
const pv = '6a7d5ef012eee437a969ff58fa70c37f8b58bf8e';
const pub = 'eaa3e55abde93e3dc7c7b2b32fce2799';
const hash = md5(1+pv+pub);
const [result, setResult] = useState([]);
const [offset, setOffset] = useState(0);

  function gethero(){
    axios.get(`https://gateway.marvel.com./v1/public/characters?&offset=${offset}&ts=1&apikey=${pub}&hash=${hash}`)
    .then(res=>
      {
        setResult(res.data.data.results)
        console.log(result)
      })
  }
  function plus (){
    setOffset(offset+20);
    gethero()
  }
  function any(){

    if(offset <= 0){
      setOffset(0);

    }else if (offset > 0){

      setOffset(offset-20) ;
      gethero()
    }
  }
  useEffect(()=>{
    gethero()
  },[])
  

  return (
    <main className="App">

        <Header/>
        <Navibar/>
  <BrowserRouter>
      <Routes>   
          <Route path="/" element={<Characters result={result} />}/>
          <Route/>
          <Route/>

       </Routes> 
   </BrowserRouter>   
        
        <Inputs plus={plus} any={any} />
         
       
    </main>
  );
}

export default App;
