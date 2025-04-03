import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Travel from './Pages/Travel.jsx'
import HomeInsurance from './Pages/HomeInsurance.jsx'
import AutoMobileInsurance from './Pages/AutoMobileInsurance.jsx'
import RestaurantInsurance from './Pages/RestaurantInsurance.jsx'
import Warehouse from './Pages/Warehouse.jsx'
import GeneralLiability from './Pages/GeneralLiability.jsx'
import Auto from './Pages/Auto.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import Faq from './Pages/Faq.jsx'
import Contact from './Pages/Contact.jsx'
import BoilerPlate from './Pages/BoilerPlate.jsx'
import Sitemap from './Pages/SiteMap.jsx'
import HowIt from './Pages/HowIt.jsx'
import LifeInsurance from './Pages/LifeInsurance.jsx'
import Home from './Pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/lifeInsurance',
        element: <LifeInsurance/>
      },
      {
        path: '/travel',
        element: <Travel/>,
      },
      {
        path: '/homeinsurance',
        element: <HomeInsurance/>
      },
      {
        path: '/automobileinsurance',
        element: <AutoMobileInsurance/>
      },
      {
        path: '/restaurantinsurance',
        element: <RestaurantInsurance/>
      },
      {
        path: '/warehouse',
        element: <Warehouse/>
      },
      {
        path: '/general',
        element: <GeneralLiability/>
      },
      {
        path: '/auto',
        element: <Auto/>
      },
      {
        path: '/about',
        element: <AboutUs/>
      },
      {
        path: '/faq',
        element: <Faq/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/careers',
        element: <Contact/>
      },
      {
        path: '/boiler',
        element: <BoilerPlate/>
      },
      {
        path: '/site',
        element: <Sitemap/>
      },
      {
        path: '/how',
        element: <HowIt/>
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
