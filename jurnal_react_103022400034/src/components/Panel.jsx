import { useState } from 'react'
import './App.css'

function Panel(children, judul){
    return (
        <>
            <div className="panel">
                {judul && <h2>{judul}</h2>}{children}
            </div>
        </>
    )
}

export default App;