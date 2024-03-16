import { LazyExoticComponent, lazy } from "react";

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

const NotFound = lazy(
  () =>
    import(
      /* webpackChunkName: "NotFound" */ '../../pages/NotFound'
    ),
);

type Route = {
  path: string;
  component: LazyExoticComponent<() => JSX.Element>
}

export const routes: Route[] = [
    {
        path: paths.home,
        component: Results
    },
    {
        path: paths.items,
        component: Results
    },
    {
        path: paths.detail,
        component: Details
    },
    {
        path: paths.notFound,
        component: NotFound
    },
]