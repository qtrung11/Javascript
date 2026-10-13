import React from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router';

function AuthRoute({ children }: React.PropsWithChildren) {
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const access_token = window.localStorage.getItem("access_token");

  async function checkAuthenticate() {
    try {
      const res = await axios.post('https://tony-auth-express-vdee.vercel.app/api/auth', {}, {
        headers: {
          "x-auth-token": access_token
        }
      });
      const isSuccess = res.data.isSuccess;
      console.log('checkAuthenticate: ', res)
      if(isSuccess) {
        setUser(res.data.user.user)
      }
    } catch (e) {
      navigate('/error-401')
    }
  }

  React.useEffect(() => {
    if (!access_token) return;
    checkAuthenticate();
  }, [access_token])

  if (!access_token) {
    return <Navigate to="/login" />
  }

  if (!user) {
    return <>Authenticate ...</>
  }

  return (
    <>{children}</>
  )
}

export default AuthRoute;