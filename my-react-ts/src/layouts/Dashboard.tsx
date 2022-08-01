import React from 'react'
import { Outlet } from 'react-router-dom'
import { CssBaseline } from '@mui/material'
import Navbar from '../components/navbar/Navbar'
import Settings from './../components/Settings';

const Dashboard: React.FC = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      {children}
      <Outlet />
      <Settings />
    </>
  )
}

export default Dashboard
