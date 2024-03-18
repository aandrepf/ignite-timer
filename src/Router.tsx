import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { DefaultLayout } from './layouts/DefaultLayout'

// Route que usa o elemento DefaultLayout se aplica para todas as rotas filhas
// que começam com o '/' exempo: /history, /, /about

// poderiamos ter um route AdminLayout que seria aplicado para todas as rotas filhas
// que começam com /admin exemplo: /admin/users, /admin/products

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
