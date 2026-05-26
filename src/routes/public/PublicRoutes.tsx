import React, { Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import BazarsLayout from '../../features/bazars/pages/bazars-layout/BazarsLayout'
import RegularBazars from '../../features/bazars/pages/regular-bazars/RegularBazars'

const PublicRoutes = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <BazarsLayout />,
      children: [

        // default redirect
        {
          index: true,
          element: <Navigate to="/regular" replace />
        },

        {
          path: 'regular',
          element: <RegularBazars />
        }
      ]
    }
  ])

  return (
    <Suspense fallback={<div>loading</div>}>
      {routes}
    </Suspense>
  )
}

export default PublicRoutes