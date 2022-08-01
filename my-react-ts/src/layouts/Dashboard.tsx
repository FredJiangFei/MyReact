import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Navbar from '../components/navbar/Navbar'
import Settings from './../components/Settings';

const Dashboard: React.FC = ({ children }) => {
  const handleDrawerToggle = () => console.log('123')

  return (
    <>
      <CssBaseline />
      <Navbar onDrawerToggle={handleDrawerToggle} />
      {children}
      <Outlet />
      <Settings />
    </>
  )
}

export default Dashboard
