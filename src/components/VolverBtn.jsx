import { Link } from "react-router-dom"


export default function VolverBtn(){
    return (
        <div className="min-w-full mt-3">
            <Link to="/"
                className="text-sm px-3 py-2 rounded-lg bg-slate-500 hover:bg-slate-400 transition duration-500"
                >
                Inicio
            </Link>
        </div>
    )
}