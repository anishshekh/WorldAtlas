import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Country from '../pages/Country'
import CountryDetails from '../pages/CountryDetails'
import AppLayOut from '../layouts/AppLayOut'
import VisitAbout from '../pages/VisitAbout'


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayOut />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/about/:visit",
          element: <VisitAbout />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/country",
          element: <Country />,
        },
        {
          path: "/country/:id",
          element: <CountryDetails />,
        },
      ],
    },
  ]);

  return (<>
    <RouterProvider router={router} />
  </>
  )
}

export default App
