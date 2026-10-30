import React from 'react';
import { Navigate } from 'react-router';

function GuestRoute({ children }: React.PropsWithChildren) {
  const access_token = window.localStorage.getItem("access_token");

  if (access_token) {
    return <Navigate to="/" />
  }

  return (
    <>{children}</>
  )
}

export default GuestRoute