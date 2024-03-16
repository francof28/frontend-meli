import { Link } from "react-router-dom";

import { paths } from "@router/paths";

import './notFound.scss';

const NotFound = () => {
    return (
        <section className="notfound__container">
            <h1>Parece que esta página no existe 🧐</h1>
            <Link to={paths.home}>Ir a la página principal</Link>
        </section>
    )
}

export default NotFound;