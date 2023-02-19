import React, { useState, useEffect } from 'react'
import	axios from 'axios'

import './App.css'

const App = () =>{

  const [inputvalor,setInputvalor]= useState('');  
  const [imagenes, setImagenes] = useState([]);
  const API_KEY='7mdmq8E6PgLgqdaAXeKm2EGvkwE05mu3-WyxWJb2WEM';
  const URL =`https://api.unsplash.com/search/photos?page=1&query=${inputvalor}&client_id=${API_KEY}`;

 useEffect(()=>{
    const BuscarImagenes = async()=>{
      const response = await axios.get(URL)
      setImagenes(response.data.results)
    }
    BuscarImagenes()
 })

 /*
  const BuscarResultados = async ()=>{
    const API_KEY='7mdmq8E6PgLgqdaAXeKm2EGvkwE05mu3-WyxWJb2WEM';
    const URL =`https://api.unsplash.com/search/photos?page=1&query=${inputvalor}&client_id=${API_KEY}`;
    const URL =`https://api.unsplash.com/search/photos?page=1&query=coding&client_id=${API_KEY}`;
    const response= await fetch(URL);
    const data= await response.json();
    setRes(data.results);
    console.log(data);
  }*/

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
          <input type="text" autoComplete='off' onChange={(e) => setInputvalor(e.target.value)}/>
        </label>
      </div>
      <div>
        <button type='submit' onClick={()=> BuscarResultados()}>Buscar</button>
      </div>
      </form>

      <div className='container'>
          <div className='grilla'>
          {imagenes.map(imagen=>(
              <div key={imagen.id}>            
                <img src={imagen.urls.regular} alt="" />
              </div>
            ))
          }
          </div>
      </div>
    </div>
  )
  }

export default App
