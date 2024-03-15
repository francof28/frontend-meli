import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Navbar } from "./components"
import { Suspense } from "react"
import { routes } from "./router/routes"

function App() {

  return (
  <>
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
  </>
  )
}

export default App
