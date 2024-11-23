import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useAuth } from '../context/AuthContext';

const AddProduct = ({ onAdd }) => {
  const { isAdmin } = useAuth();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      description,
      price: parseFloat(price),
    };
    onAdd(newProduct);
    setName('');
    setDescription('');
    setPrice('');
  };

  if (!isAdmin()) {
    return (
      <Typography variant="h6" className="text-center text-gray-400">
        Acesso Negado: Somente administradores podem adicionar produtos.
      </Typography>
    );
  }

  return (
    <Container className="bg-[#121212] text-white p-8 rounded-lg shadow-lg">
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        className="text-center font-bold text-3xl mb-6"
        style={{ color: '#c0c0c0' }}
      >
        Adicionar Produto
      </Typography>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <TextField
          label="Nome do Produto"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="bg-[#333] text-white border-2 border-[#130081] focus:ring-2 focus:ring-[#5d4aff] rounded-md"
          InputLabelProps={{
            style: { color: '#c0c0c0' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          fullWidth
          margin="normal"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="bg-[#333] text-white border-2 border-[#130081] focus:ring-2 focus:ring-[#5d4aff] rounded-md"
          InputLabelProps={{
            style: { color: '#c0c0c0' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
        />
        <TextField
          label="Preço"
          type="number"
          variant="outlined"
          fullWidth
          margin="normal"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="bg-[#333] text-white border-2 border-[#130081] focus:ring-2 focus:ring-[#5d4aff] rounded-md"
          InputLabelProps={{
            style: { color: '#c0c0c0' },
          }}
          InputProps={{
            style: { color: 'white' },
          }}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          className="bg-[#292cc9] hover:bg-[#3643f4] text-white font-semibold py-2 rounded-md shadow-md transition duration-300 transform hover:scale-105"
        >
          Adicionar
        </Button>
      </form>
    </Container>
  );
};

export default AddProduct;
