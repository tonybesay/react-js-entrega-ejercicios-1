import { useState } from "react"
import Layout from "../components/Layout"

export default function Jsx_ejercicio_2() {

    // Estado contador: inicial = 0
    const [contador, setContador] = useState(0)

    function incrementContador(){
        setContador(contador + 1)
    }
    function resetearContador(){
        setContador(0)
    }    

    return (
        <Layout>
            <div className="mt-10 flex flex-col gap-5 items-center m-auto p-10 bg-slate-200 text-slate-900 rounded-lg min-w-[50%] shadow-lg">
                <h2 className="text-3xl font-semibold">Contador de Clicks</h2>
                <p className="text-xl">
                    Total Clicks
                    <span className="text-2xl ml-2"> {contador}</span>
                </p>
                <div className="buttons flex gap-6">
                    <button
                        onClick={incrementContador}
                        className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-500 text-sm transition"
                    >
                        Incrementar
                    </button>
                    <button
                        onClick={resetearContador}
                        className="bg-red-700 text-white p-2 rounded-lg hover:bg-red-500 text-sm transition"
                    >
                        Resetear
                    </button>
                </div>
            </div>
        </Layout>
    )
}