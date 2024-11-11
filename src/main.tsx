import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { Home } from './pages/Home/Home.tsx'
import { Search } from './pages/Search/Search.tsx'
import { GlobalStyled } from './GlogalStyled.tsx'
import { Authentication } from './pages/Authentication/Authentication.tsx'
import { UserProvider } from './Context/UserContext.tsx'
import { Profile } from './pages/Profile/Profile.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <h1>Página não encontrada</h1>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/search/:title",
        element: <Search />
      }
    ]
  },
  {
    path: "/auth",
    element: <Authentication />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider >
      <RouterProvider router={router} />
    </UserProvider>
  </StrictMode>,
)