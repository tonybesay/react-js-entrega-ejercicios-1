import { useState } from "react";
import Layout from "../components/Layout";
import VolverBtn from "../components/VolverBtn"

export default function Jsx_ejercicio_1() {
    
    // Estado: color actual
    const [color, setColor] = useState("rgb(15, 23, 42")
    
    // Funcion Obtener Color Aleatorio
    function randomColor() {
        const red = Math.floor(Math.random() * 256)
        const green = Math.floor(Math.random()* 256)
        const blue = Math.floor(Math.random()* 256)    
        
        return `rgb(${red}, ${green}, ${blue})`
    }   

    // Cambiar color - Evento Click
    function cambiarColor(){
        setColor(randomColor())
    }

    return (
        <Layout>
            <div
                style={{ backgroundColor: color}}
                className="min-h-[inherit] min-w-full pt-10 flex flex-col items-center text-white transition-colors duration-300"
                >
                <div className="bg-slate-100 bg-opacity-90 shadow-xl p-10 text-slate-900 flex flex-col items-center rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">
                        Cambiador de color de fondo
                    </h2>

                    <button
                        onClick={cambiarColor}
                        className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-500 text-sm transition"
                    >
                            Cambiar color
                    </button>
                </div>

            </div>
        </Layout>
    )
}

