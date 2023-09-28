import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import useAuth from '@/hooks/useAuth';

const Login: FC = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const onClick = () => {
    signIn();
    navigate('/', { replace: true });
  };

  return (
    <Box sx={{ width: 200, height: 200, pt: 10, pl: 10 }}>
      <Button onClick={onClick}>Login</Button>
    </Box>
  );
};

export default Login;
