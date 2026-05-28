import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Contact from '../pages/Contact'
import SeeOurWork from '../pages/SeeOurWork'
import Reviews from '../pages/Reviews'
import BathRemodeling from '../pages/What we do/BathRemodeling'
import Carpentry from '../pages/What we do/Carpentry'
import KitchenRemodeling from '../pages/What we do/KitchenRemodeling'
import PressureWashing from '../pages/What we do/PressureWashing'
import Painting from '../pages/What we do/Painting'
import NotFound from '@/pages/NotFound'

const services = [
  { path: 'bath-remodeling', component: <BathRemodeling /> },
  { path: 'carpentry', component: <Carpentry /> },
  { path: 'kitchen-remodeling', component: <KitchenRemodeling /> },
  { path: 'pressure-washing', component: <PressureWashing /> },
  { path: 'painting', component: <Painting /> },
]

const AppRoutes = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/see-our-work" element={<SeeOurWork />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/bath-remodeling" element={<BathRemodeling />} />
    {services.map((service, index) => (
      <Route
        key={index}
        path={`/${service.path}`}
        element={service.component}
      />
    ))}
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default AppRoutes
