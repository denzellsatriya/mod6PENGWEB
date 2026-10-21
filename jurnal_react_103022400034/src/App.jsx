import { useState } from 'react'
import './App.css'

function App() {
  const n=34;
  const jam = 9;
  const nama="Denzell"
  const [count, setCount] = useState(0)

  return (
    <>
      <div className ="Kantin">
        <style>


        </style>
      </div>
      <div>
        <h1>Kantin {nama}</h1>
        <p>{jam < 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
        <p>{'Saldo awal kartu kantin : Rp.'+(n*1000)}</p>
      </div>
      <button disabled type="button" className="btnBayar">
        Bayar
      </button>
    </>
  )
}

export default App
