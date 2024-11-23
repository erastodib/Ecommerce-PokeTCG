import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container } from '@mui/material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <Container maxWidth="xs" className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#161616' }}>
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-white mb-6">
          Bem-vindo de volta!
        </Typography>

        <form onSubmit={handleLogin} className="space-y-4">
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-[#1c1c1c] text-white border-2 border-gray-600 focus:ring-2 focus:ring-gray-500 rounded-md"
            InputLabelProps={{
              style: { color: '#ccc' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />

          <TextField
            label="Senha"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-[#1c1c1c] text-white border-2 border-gray-600 focus:ring-2 focus:ring-gray-500 rounded-md"
            InputLabelProps={{
              style: { color: '#ccc' },
            }}
            InputProps={{
              style: { color: '#fff' },
            }}
          />

<Button
  type="submit"
  variant="contained"
  fullWidth
  sx={{
    backgroundColor: '#131F38', 
    color: 'white', 
    fontWeight: '600',
    '&:hover': {
      backgroundColor: '#131F46',
    },
    padding: '10px',
    borderRadius: '8px',
    boxShadow: 'none',
    '&:active': {
      backgroundColor: '#1f2937',
    },
  }}
>
  Entrar
</Button>




          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-400">
              Não tem uma conta?{' '}
              <a href="/signup" className="text-white hover:text-gray-400 font-semibold">
                Cadastre-se
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Login;