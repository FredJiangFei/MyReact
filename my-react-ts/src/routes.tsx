import React from 'react'
import DashboardLayout from './layouts/Dashboard'
import AuthLayout from './layouts/Auth'

import Default from './pages/dashboards/Default'
import Analytics from './pages/dashboards/Analytics'
import Page404 from './pages/auth/Page404'

import SignIn from "./pages/auth/SignIn";
import AuthGuard from './components/guards/AuthGuard'

const routes = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '',
        element: <Default />,
      },
      {
        path: 'analytics',
        element: <Analytics />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "404",
        element: <Page404 />,
      },
    ],
  },
  {
    path: '*',
    element: <AuthLayout />,
    children: [
      {
        path: '*',
        element: <Page404 />,
      },
    ],
  },
]

export default routes
