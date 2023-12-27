import { Routes, Route} from 'react-router-dom'
import { Home } from '../pages/Home'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { PrivateRoutes } from './PrivateRoutes'


export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
    
      <Route path="/dashboard" element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}


