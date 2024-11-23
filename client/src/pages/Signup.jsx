import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Container, CircularProgress } from '@mui/material';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!email.includes('@')) {
      setError('Por favor, insira um e-mail válido');
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres');
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setName('');
      setEmail('');
      setPassword('');
      setLoading(false);

      navigate('/login');
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#1c1c1c' }}>
      <Container maxWidth="xs" className="p-8 rounded-lg shadow-lg" style={{ backgroundColor: '#161616' }}>
        <Typography variant="h4" component="h1" className="text-center font-bold text-3xl text-white mb-6">
          Crie sua Conta
        </Typography>

        <form onSubmit={handleSignup} className="space-y-4">
          <TextField
            label="Nome"
            variant="outlined"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

          {error && (
            <Typography variant="body2" color="error" align="center" className="mt-2">
              {error}
            </Typography>
          )}

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
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Registrar'}
          </Button>

          <div className="text-center mt-4">
            <Typography variant="body2" className="text-gray-400">
              Já tem uma conta?{' '}
              <a href="/login" className="text-white hover:text-gray-400 font-semibold">
                Faça login
              </a>
            </Typography>
          </div>
        </form>
      </Container>
    </div>
  );
};

export default Signup;
