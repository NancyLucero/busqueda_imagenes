import React, { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [valor,setValor]= useState('');
  const [res, setRes] = useState([]);

  const BuscarResultados = async ()=>{
    const API_KEY='7mdmq8E6PgLgqdaAXeKm2EGvkwE05mu3-WyxWJb2WEM';
    const URL =`https://api.unsplash.com/photos/?client_id=${API_KEY}&query=${valor}`;
    const response= await fetch(URL);
    const data= await response.json();
    setRes(data.results);
    console.log(data);
  }

  const entradas= document.querySelectorAll('input');
  entradas.forEach( entrada =>{
    entrada.onfocus = ( )=>{
            entrada.previousElementSibling.classList.add('top');
            entrada.previousElementSibling.classList.add('focus');
            entrada.parentNode.classList.add('focus');
        }
    entrada.onblur = ( )=>{
            if(entrada.value.trim( ).length == 0 ){
            entrada.previousElementSibling.classList.remove('top');
            }
            entrada.previousElementSibling.classList.remove('focus');
            entrada.parentNode.classList.remove('focus');
        }
  });

  return (
    <div className="container">
      <form action="" className='principal'>
      <div>
        <label className='label'>
          <span>buscar imagenes...</span>
          <input type="text" autoComplete='off' onChange={(e) => setValor(e.target.value)}/>
        </label>
      </div>
      <div>
        <button type='submit' onClick={()=> BuscarResultados()}>Buscar</button>
      </div>
      </form>

      <div className='container'>
          <div className='grilla'>
          {
            res.map((elemento,indice) =>{
              return(
                <img key={indice} src={elemento.urls.regular} alt="" />
              )                          
          })          
        }
        </div>
      </div>
    </div>
  )
}

export default App
