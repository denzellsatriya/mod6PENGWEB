import { useState } from 'react'
import './App.css'

function CardMahasiswa(props){
    return (
        <div className="card">
            kategori="Makanan"
            <h3>{props.nama}</h3>
            <p>{props.kategori}</p>
            <p>Harga : {props.harga}</p>
        </div>
    )
}

export default KartuMenu
