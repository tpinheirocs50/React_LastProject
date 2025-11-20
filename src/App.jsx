import './App.css'

// pages
import Homepage from './pages/Homepage'
import DeletePage from './pages/DeletePage'
import MateriaReactPage from './pages/MateriaReactPage'
import DiscountPage from './pages/DiscountPage'
import LoginPage from './pages/LoginPage'
import RandomPage from './pages/RandomPage'
import OtherPage from './pages/OtherPage'
import ErrorPage from './pages/ErrorPage'
import CoursesPage from './pages/CoursesPage'
import Course from './pages/Course'
import AvailablePlaces from './pages/AvailablePlaces'
import StarWarsPeople from './pages/StarWarsPeople'
import StarWarsMovies from './pages/StarWarsMovies'
import ComponentsList from './pages/ComponentsList'
import Signup from './pages/Signup'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layouts/rootLayout'

// Sem usar layouts
// const router = createBrowserRouter([
//   { path: '/', element: <Homepage /> },
//   { path: '/contactos', element: <Contactos />},
// ]);

// A usar layout distribuido por algumas paginas
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Homepage /> },
      { path: '/deletepage', element: <DeletePage /> },
      { path: '/materiareactpage', element: <MateriaReactPage /> },
      { path: '/discountpage', element: <DiscountPage /> },
      { path: '/loginpage', element: <LoginPage /> },
      { path: '/randompage', element: <RandomPage /> },
      { path: '/otherpage', element: <OtherPage /> },
      { path: '/coursespage', element: <CoursesPage /> },
      { path: '/course/:course_name', element: <Course /> }, // o :course_name absorve o nome que passamos em /CoursesPage/<este_nome>
      { path: '/componentslist', element: <ComponentsList /> },
      { path: '/availableplaces', element: <AvailablePlaces />},
      { path: '/starwarspeople', element: <StarWarsPeople />},
      { path: '/starwarsmovies', element: <StarWarsMovies />},
      { path: '/signup', element: <Signup />},
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />
}

export default App
