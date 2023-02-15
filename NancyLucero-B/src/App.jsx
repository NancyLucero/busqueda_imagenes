import { useState } from 'react'

import './App.css'

function App() {
  const [valor,setValor]= useState('');
  return (
    <div className="principal">
      <div>
        <label className='label'>
          <span>buscar imagenes...</span>
          <input type="text" autoComplete='off' onChange={e => setValor(e.target.value)}/>
        </label>
      </div>
      <div>
        <button type='submit'>Buscar</button>
      </div>
    </div>
  )
}

export default App
