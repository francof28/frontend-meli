import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Suspense } from "react"
import { QueryClient, QueryClientProvider } from "react-query"

import { routes } from "./router/routes"

import { Navbar } from "./components"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        {/* TODO: Create fallback Loader component */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) =>
              <Route key={route.path} path={route.path} element={route.component} />
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
