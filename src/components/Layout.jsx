import VolverBtn from "./VolverBtn"

export default function Layout({ children}){
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col">
            <header className="bg-indigo-600 px-8 py-6">
                <h1 className="text-4xl font-bold">
                    React JS – Entrega de ejercicios 1
                </h1>
                <p className="text-indigo-200 mt-2">
                    Landing de ejercicios
                </p>
                <VolverBtn ></VolverBtn>
            </header>
            <main className="flex-grow flex">
                {children}
            </main>

            <footer className="font-mono border-t border-slate-800 py-4 text-center text-sm text-slate-500">
                <p className="text-slate-100">Tony Mendoza Hernández</p>
                <p>Master Full Stack</p>
                <p>React JS</p>
            </footer>

        </div>
    )
}