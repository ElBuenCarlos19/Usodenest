'use client'

import { square } from "../components/loginsquare.jsx"
import { fetchData } from "../_scripts/script.jsx"
import { useState, useEffect } from "react"

export default function Login() {
    const [data, setData] = useState('Cargando...')

    useEffect(() => {
        fetchData().then(response => {
            
            setData(JSON.stringify(response))
        }).catch(error => {
            console.error("Error al obtener los datos:", error)
            setData('Error al cargar los datos')
        })
    }, []) 

    return (
        <div className="">
            {square()}
            <div className="text-black">
                Algo
                {data}
            </div>
        </div>
    )
}
