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
import { Category } from './pages/Category/Category.tsx'
import { BackgroundProvider } from './Context/BackgroundContext.tsx'
import { News } from './pages/News/News.tsx'
import { NewsByJournalist } from './pages/NewsByJournalist/NewsByJournalist.tsx'

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
  },
  {
    path: "/category/:category",
    element: <Category />
  },
  {
    path: "/news/:newsId",
    element: <News />
  },
  {
    path: "/newsByJournalist/:journalistId",
    element: <NewsByJournalist />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyled />
    <UserProvider >
      <BackgroundProvider>
        <RouterProvider router={router} />
      </BackgroundProvider>
    </UserProvider>
  </StrictMode>,
)