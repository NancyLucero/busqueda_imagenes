import React from 'react'
import './Header.css'
const Header=()=>{
    /* sector de */
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

    return(
        <>
        <header>
            <form action="" className='principal'>
                <div>
                    <label className='label'>
                    <span>buscar imagenes...</span>
                    <input type="text" autoComplete='off' onChange={e => setValor(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <button type='submit'>Buscar</button>
                </div>
            </form>
        </header>
        </>
    )
}

export default Header