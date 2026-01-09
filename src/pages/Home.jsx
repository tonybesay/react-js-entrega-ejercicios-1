import { Link } from "react-router-dom"
import Layout from "../components/Layout"

export default function Home({ ejercicios }) {
    return (
        <Layout>
            <section className="max-w-5xl mx-auto p-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ejercicios.map((e) => (
                    <Link
                    key={e.id}
                    to={`/ejercicio/${e.id}`}
                    className="block rounded-xl border border-slate-700 p-6 hover:border-indigo-400 transition"
                    >
                    <h2 className="text-lg font-semibold mb-2">
                    {e.titulo}
                    </h2>
                    <p className="text-slate-400 text-sm">
                    Abrir ejercicio
                    </p>
                </Link>
                ))}
            </section>
        </Layout>
    )
}