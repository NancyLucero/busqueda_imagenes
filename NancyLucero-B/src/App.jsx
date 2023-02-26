import React, { useState, useEffect } from 'react'
import	axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import InfiniteScroll from "react-infinite-scroll-component";
import './App.css'

const App = () =>{

  const [inputvalor,setInputvalor]= useState('');  
  const [imagenes, setImagenes] = useState([]);
  const [page, setPage] = useState(0);

  const API_KEY='7mdmq8E6PgLgqdaAXeKm2EGvkwE05mu3-WyxWJb2WEM';
  /*const URL =`https://api.unsplash.com/search/photos?page=1&per_page=20&query=${inputvalor}&client_id=${API_KEY}`;  */

  

  const BuscarImagenes = async(nropage,busqueda)=>{
    const URL =`https://api.unsplash.com/search/photos?page=${nropage}&per_page=20&query=${busqueda}&client_id=${API_KEY}`;
    const response = await axios.get(URL)
    setImagenes(response.data.results)
    let aux = imagenes.concat(response.data.results)
    setImagenes(aux)
  }
  
  useEffect(()=>{
      setTimeout(()=>{
        BuscarImagenes(page+1,inputvalor)
      },100)
  },[])

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

  const estilocard = {
    with: '18rem',
    overflow:'auto'
  }; 

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
      <form action="" className=''>
      <div>
        <label className='label'>
          <span>buscar imagenes...</span>
          <input type="text" autoComplete='off' onChange={(e) => setInputvalor(e.target.value)}/>
        </label>
      </div>
      {/*<div>
        <button type='submit' onClick={()=> BuscarResultados()}>Buscar</button>
  </div>*/}
      </form>
   
      <div className='container fondo'id='ScrollInfinito'>  
        <InfiniteScroll
          dataLength={imagenes.length}
          next={()=>{
             BuscarImagenes(page+1,inputvalor);
          }}
          hasMore={true}
          loader={<h4>Esperar .....</h4>}
          scrollableTarget="ScrollInfinito"
          >
          <div className='card' style={{estilocard}}>
            <div className='row' >
                {imagenes.map(imagen=>(
                    <> 
                    {
                      imagen.height<5000
                      ?
                      <div className='col-md-4'>            
                        <img key={imagen.id} className='card-img-top' src={imagen.urls.small_s3} alt={imagen.likes} />                
                          <div className='card-body margen'>
                              <h4 className='card-title'>{imagen.alt_description}</h4>
                              <p className='card-text text-secondary'>
                                {
                                  imagen.user.location
                                  ?
                                  imagen.user.location
                                  :
                                  "not location"
                                }
                              </p>
                              <p className='card-text text-danger'>Likes: {imagen.likes}</p>
                             {/* <p className='card-text text-danger'>Ancho: {imagen.width}</p>
                              <p className='card-text text-danger'>Alto: {imagen.height}</p>  */}             
                          </div>    
                      </div>
                      :
                      <>
                      </>
                    }
                    </>          
                  ))
                }
                </div>
              </div>
            </InfiniteScroll>            
      </div>        
    </div>
  )
  }

export default App
