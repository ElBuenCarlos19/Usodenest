'use client'

import { Square } from "../components/loginsquare.jsx"
import { fetchData } from "../_scripts/script.jsx"
import { useState, useEffect, SetStateAction } from "react"
import { json } from "stream/consumers"

export default function Login() {
    const [data, setData] = useState({})
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        fetchData().then(response => {
            
            setData(response)
        }).catch(error => {
            console.error("Error al obtener los datos:", error)
            setData('Error al cargar los datos')
        })
    }, []) 

    const handleLoginSubmit = (email: SetStateAction<string>, password: SetStateAction<string>) => {
        // Aquí puedes manejar los valores de email y password
        setEmail(email);
        setPassword(password);
        // Por ejemplo, enviarlos a un API o guardarlos en el estado
      };
    

        
    return (
        <div className="">
            <Square onSubmit={handleLoginSubmit}>
            </Square>
            <div className="text-black">
                {email} <br />
                {password}
                
            </div>
        </div>
    )
}
