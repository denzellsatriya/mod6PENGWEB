import { useState } from 'react'
import './App.css'
import KartuMenu from "./components/KartuMenu"

function App() {

  const [count, setCount] = useState(0)

  return (
    <div>
      <KartuMenu nama="Nasi Ayam Geprek" kategori ="Makanan" harga="12000"/>
      <KartuMenu nama="Es Teh Lemon" kategori ="Minuman" harga="6000"/>
      <KartuMenu nama="Mie Goreng Telur" kategori ="Makanan" harga="12000"/>

    </div>
  )
}

export default App
