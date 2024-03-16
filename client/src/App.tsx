import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { routes } from "./router/routes";

import { Layout } from "@components/Layout";
import { Loader } from "./components";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<Loader />}>
            <Routes>
              {routes.map((route) =>
                <Route key={route.path} path={route.path} element={route.component} />
              )}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
