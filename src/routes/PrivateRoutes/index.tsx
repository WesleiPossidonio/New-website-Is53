import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRoutes = () => {
  const companies = localStorage.getItem('is53:userData1.0')

  return companies ? (
    <>
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}

