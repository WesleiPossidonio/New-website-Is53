import { Routes, Route} from 'react-router-dom'
import { Dashboard, Home, Login, UpdatePassword } from '../pages'
import { PrivateRoutes } from './PrivateRoutes'

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/atualizar-senha' element={<UpdatePassword />} />
    
      <Route path="/dashboard" element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}


