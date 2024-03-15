import { lazy } from "react";

import { paths } from "../paths";

const Results = lazy(
    () =>
      import(
        /* webpackChunkName: "Results" */ '../../pages/Results'
      ),
);

const Details = lazy(
    () =>
      import(
        /* webpackChunkName: "Details" */ '../../pages/Details'
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
        path: paths.detail,
        component: <Details />
    },
]