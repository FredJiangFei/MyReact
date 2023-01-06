import React from 'react'
import { Outlet } from 'react-router-dom'
const Auth: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <Outlet />
    </>
  )
}

export default Auth
