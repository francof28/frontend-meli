import { Link } from "react-router-dom";

import { paths } from "@router/paths";

import './errorPage.scss';

export const ErrorPage = () => {
    return (
        <section className="errorpage__container">
            <h1>Ups! Parece que hubo un error 🔧</h1>
            <Link to={paths.home}>Ir a la página principal</Link>
        </section>
    )
}