// Hooks
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

// Utils
import authUtils from '@/utils/authUtils';
import assets from '@/assets'

// Components
import Loading from '@/components/common/Loading'
import { Box, Container } from '@mui/material';

const AuthLayout = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  /* Ao cair na página checa se tem algum token na sessionStorage
  SE SIM: checa se esse token é válido lá no backend, se for válido manda pra Home
  SE NÃO: continua aqui na página de autenticação */
  useEffect(() =>{
    const checkAuth = async () =>{
      const isAuth = await authUtils.isAuthenticated()
      if ( !isAuth ) {
        setLoading(false)
      } else {
        navigate('/')
      }
    }

    checkAuth();
  }, [navigate])

  return (
    loading ? (
      <Loading fullHeight/>
    ) : (
      <Container component='main' maxWidth='xs'>
        <Box sx={{
          marginTop: '8',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <img src={assets.images.iconWhite} style={{ width: '75px' , marginBlock: '10% 20px'}} alt='app logo'/>
          <Outlet/>
        </Box>
      </Container>
    )
  )
}

export default AuthLayout