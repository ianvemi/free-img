import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Container from "./components/Container";
import Fullsize from "./components/Fullsize";
import "./App.css";
import "./font/flaticon/flaticon.css";

function App() {

  const [text, addText] = useState('');
  const [response, addResponse] = useState([]);
  const [error, setError] = useState(false);

  const [full, addFull] = useState(false);
  const [urlFull, addUrlFull] = useState('');

  const[totalpag, addTotalPag] = useState(0);
  const[currentpag, addCurrentPag] = useState(1);

 
  let page = currentpag;
  

  useEffect(()=>{
   
    const reqImg = async() => {
      const perPage = 15;
      const apikey = '22553841-10fbcb7824b9ed5ff00466b49';
      const url = `https://pixabay.com/api/?key=${apikey}&q=${text}&per_page=${perPage}`;
      const api =  await fetch(url);
      const data = await api.json();
      addResponse(data.hits);
      // console.log(data);

      const calcularPaginas = Math.ceil(data.totalHits/perPage);
      addTotalPag(calcularPaginas);
      

      if(data.hits.length === 0){
        setError(true);
    } else{
      setError(false);
    }
    }
    
    reqImg();
    addCurrentPag(1);
    
   
  },[text])

  useEffect(()=>{
   
    const reqImg = async() => {
      const perPage = 15;
      const apikey = '22553841-10fbcb7824b9ed5ff00466b49';
      const url = `https://pixabay.com/api/?key=${apikey}&q=${text}&per_page=${perPage}&page=${currentpag}`;
      const api =  await fetch(url);
      const data = await api.json();
      addResponse(data.hits);
      // console.log(data);

      const calcularPaginas = Math.ceil(data.totalHits/perPage);
      addTotalPag(calcularPaginas);
      

      if(data.hits.length === 0){
        setError(true);
    } else{
      setError(false);
    }
    }
    
    reqImg();
    const top = document.querySelector('#top');
    top.scrollIntoView({behavior:'smooth'});
  },[currentpag])


  const plusPag = () =>{
      const current = currentpag + 1;
      addCurrentPag(current);
    }
   

  const minusPag = () =>{
      const current = currentpag - 1;
      addCurrentPag(current);
    
  }

  return (
    <Fragment>
    <div className="screen" id="top">
    {full
    ?<Fullsize
      urlFull ={urlFull}
      addFull ={addFull}
    />
    :null
    

    }
    <div className="main">
        <h1>Free <span>img</span></h1>
        <div className="form">
          <Form 
            text = {text}
            addText = {addText}
          />
        </div>
        {error
        ? <div className="error">Oh no!, Your search was not found, try it with another words.</div>
        :null}
        <p className="page">{totalpag} pages</p>
        <h3>powered by pixabay</h3>
      </div>
      <div className="container">
        <Container
          response = {response}
          addFull = {addFull}
          addUrlFull ={addUrlFull}
        />
      </div>
      {full
      ?null
      :<div className="pagination">
      {currentpag <= 1
      ? null
      : <button className="prev"
        onClick={minusPag}
        >&larr;</button>
      }
      <p className="page">{page}/{totalpag}</p>
      {currentpag >= totalpag
        ? null
        :<button className="next"
        onClick={plusPag}
        >&rarr;</button>
      }
      </div>
      }      
    </div>
      
    </Fragment>
  );
}

export default App;
