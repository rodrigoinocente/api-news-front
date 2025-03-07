import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.tsx'
import { Home } from './pages/Home/Home.tsx'
import { Search } from './pages/Search/Search.tsx'
import { GlobalStyled } from './GlogalStyled.tsx'
import { UserProvider } from './Context/UserContext.tsx'
import { Profile } from './pages/Profile/Profile.tsx'
import { NewsbyCategory } from './pages/NewsbyCategory/NewsbyCategory.tsx'
import { BackgroundProvider } from './Context/BackgroundContext.tsx'
import { News } from './pages/News/News.tsx'
import { NewsByJournalist } from './pages/NewsByJournalist/NewsByJournalist.tsx'
import { Column } from './pages/Column/Column.tsx'
import { ColumnbyCategory } from './pages/ColumnbyCategory/ColumnbyCategory.tsx'

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
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/category/:category",
    element: <NewsbyCategory />
  },
  {
    path: "/news/:newsId",
    element: <News />
  },
  {
    path: "/newsByJournalist/:journalistId",
    element: <NewsByJournalist />
  },
  {
    path: "/column/:columnId",
    element: <Column />
  },
  {
    path: "/columnByCategory/:category",
    element: <ColumnbyCategory />
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