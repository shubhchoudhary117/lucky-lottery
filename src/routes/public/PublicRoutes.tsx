import React, { Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import RegularBazars from '../../features/regular/pages/regular-bazars/RegularBazars'
import RegularBetArena from '../../features/regular/pages/regular-bet-arena/RegularBetArena'
import BazarsLayout from '../../features/bazars/bazars-layout/BazarsLayout'
import RegularPlaceBet from '../../features/regular/pages/regular-place-bet/RegularPlaceBet'

const PublicRoutes = () => {

  const routes = useRoutes([
    {
      path: '/',
      element: <BazarsLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/regular" replace />
        },
        {
          path: 'regular',
          element: <RegularBazars />
        },
      ]
    },
     {
          path: 'regular/regular-arena',
          element: <RegularBetArena />
        },
         {
          path: 'regular/place-bet',
          element: <RegularPlaceBet />
        }
  ])

  return (
    <Suspense fallback={<div>loading</div>}>
      {routes}
    </Suspense>
  )
}

export default PublicRoutes