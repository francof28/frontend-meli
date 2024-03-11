import { lazy } from "react";
import { paths } from "../paths";

const ItemListContainer = lazy(
    () =>
      import(
        /* webpackChunkName: "ItemListContainer" */ '../../pages/ItemListContainer'
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
        component: <ItemListContainer />
    },
    {
        path: paths.items,
        component: <ItemListContainer />
    },
    {
        path: paths.items,
        component: <ItemDetailContainer />
    },
]