import { useState } from "react"
import Layout from "../components/Layout"

export default function Jsx_ejercicio_3(){
    // Estado: lista de elementos
    const [items, setItems] = useState([])

    // Estado: valor del input
    const [inputValue, setInputValue] = useState("")

    // Funcion añadir elemento
    function handleSubmit(event){
        event.preventDefault()

        const value = inputValue.trim()
        if (!value) return

        setItems([...items, value])
        setInputValue("")
    }

    // Función eliminar elemento
    function deleteItem(index) {
        setItems(items.filter((_, i)=> (i !== index)))
    }

    return (
        <Layout>
        <div className="mt-10 flex flex-col gap-5 items-center m-auto p-10 bg-slate-200 text-slate-900 rounded-lg min-w-[50%] shadow-lg">
        <h2 className="text-3xl font-semibold">
            Lista Dinámica
        </h2>
        
        <form 
            onSubmit={handleSubmit}
            className="flex flex-row gap-3">
            <input 
                className="px-2 py-1 rounded-md text-sm"
                type="text" 
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Escribe un elemento..." 
            />
            <button 
                type="submit" 
                className="bg-indigo-600 text-white px-2 py-1 rounded-md hover:bg-indigo-400 text-sm"
            >
                    Agregar
            </button>
        </form>

        <ul className="space-y-2 min-w-full">
            {items.map((item, index) =>(
                <li className="flex justify-between items-center bg-slate-400 px-3 py-2 rounded"
                    key={index}
                >
                    <span>{item}</span>
                    <button className="p-1 bg-red-600  hover:bg-red-500 text-white text-sm rounded"
                            onClick={() => deleteItem(index)}>
                        Eliminar
                    </button>
                </li>
            ))}
        </ul>

        </div>
            
        </Layout>
    )
}