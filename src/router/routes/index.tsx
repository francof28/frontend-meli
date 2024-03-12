import { lazy } from "react";
import { paths } from "../paths";

const Results = lazy(
    () =>
      import(
        /* webpackChunkName: "Results" */ '../../pages/Results'
      ),
);

const ItemDetailContainer = lazy(
    () =>
      import(
        /* webpackChunkName: "ItemDetailContainer" */ '../../pages/ItemDetailContainer'
      ),
);

export const routes = [
    {
        path: paths.home,
        component: <Results />
    },
    {
        path: paths.items,
        component: <Results />
    },
    {
        path: paths.items,
        component: <ItemDetailContainer />
    },
]