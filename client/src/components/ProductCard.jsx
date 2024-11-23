import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card
      style={{
        margin: '1rem',
        width: '200px',
        backgroundColor: '#1a1a1a',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
      }}
    >
      <CardContent>
        <Typography variant="h5" style={{ color: '#e0e0e0' }}> 
          {product.name}
        </Typography>
        <Typography variant="body2" style={{ color: '#a0a0a0' }}> 
          {product.description}
        </Typography>
        <Typography variant="h6" style={{ color: '#c0c0c0' }}> 
          R$ {product.price}
        </Typography>
        <Button
          variant="contained"
          style={{
            backgroundColor: '#292cc9',
            color: '#ffffff',
            marginTop: '1rem',
            transition: 'background-color 0.3s ease'
          }}
          onClick={handleAddToCart}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#3643f4')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#292cc9')}
        >
          Adicionar ao Carrinho
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
