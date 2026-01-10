import { useState } from "react"
import Layout from "../components/Layout"

// Array de animales
const animals = [
  'Perro',
  'Gato',
  'Pez',
  'Conejo',
  'Caballo',
  'Vaca',
  'Oveja',
  'Cerdo',
  'Gallina',
  'Pato',
  'León',
  'Tigre',
  'Elefante',
  'Jirafa',
  'Cebra',
  'Mono',
  'Gorila',
  'Chimpancé',
  'Rinoceronte',
  'Hipopótamo',
  'Cocodrilo',
  'Serpiente',
  'Lagarto',
  'Tortuga',
  'Iguana',
  'Águila',
  'Halcón',
  'Búho',
  'Paloma',
  'Flamenco',
  'Pingüino',
  'Delfín',
  'Ballena',
  'Tiburón',
  'Pulpo',
  'Calamar',
  'Estrella de mar',
  'Cangrejo',
  'Langosta',
  'Caracol',
  'Mariposa',
  'Abeja',
  'Hormiga',
  'Araña',
  'Escorpión',
  'Ratón',
  'Murciélago',
  'Zorro',
  'Lobo'
]

export default function Jsx_ejercicio_4() {

    const [inputValue, setInputValue] = useState("")

    const filteredAnimals = animals.filter(animal => (
        animal.toLowerCase().includes(inputValue.toLowerCase())
    ))

    return (
        <Layout>
            <div className="mt-10 flex flex-col gap-6 items-center m-auto p-10 bg-slate-200 text-slate-900 rounded-lg min-w-[50%] shadow-lg">
                <h2 className="text-3xl font-semibold">
                    Filtro de Búsqueda en Tiempo Real
                </h2>

                <form className="flex flex-col gap-2 items-center">
                    <input
                        className="px-2 py-1 rounded text-sm"
                        type="text" 
                        placeholder="Escribre para filtrar..."
                        value={inputValue}
                        onChange={(event) => (setInputValue(event.target.value))}
                    />
                </form>
                
                <ul className="space-y-2 min-w-full flex flex-col gap-2 text-center">
                    {filteredAnimals.length === 0 && (
                        <li className="px-3 py-2 text-sm text-slate-700">
                            No hay resultados para <strong>"{inputValue}"</strong>
                        </li>
                    )}
                    {filteredAnimals.map((animal, index) => (
                        <li key={index}
                            className="px-3 py-2 bg-white rounded shadow-sm text-sm"
                        >
                            {animal}
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    )
}

