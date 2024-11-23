import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid2, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const FusionStrike = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 7,
          name: 'Espeon VMAX (Arte Especial)',
          description: 'A carta alt-art Espeon VMAX é a última carta de Eeveelution VMAX em arte alternativa lançada em inglês e a única disponível em Fusion Strike. As demais foram lançadas em Evolving Skies ou em coleções premium.',
          price: 1109.99,
          image: '/img/espeonVMAX.jpg',
        },
        {
          id: 8,
          name: 'Gengar VMAX (Arte Especial)',
          description: 'A carta alt-art Gengar VMAX é uma das mais desejadas de Fusion Strike, graças à encantadora, mas arrepiante, representação de Gengar Gigantamax pelo ilustrador sowsow. De acordo com a Pokédex de Pokémon Shield, se você ficar perto de sua boca, ouvirá as vozes de seus entes queridos chamando por você.',
          price: 1099.99,
          image: '/img/gengarVMAX.jpg',
        },
        {
          id: 9,
          name: 'Mew VMAX (Arte Especial)',
          description: 'Mew VMAX está claramente se divertindo muito nesta variante de arte secreta alternativa. Observar este enorme Mew brincando por uma paisagem urbana suaviza um pouco o impacto enquanto ele está ocupado esmagando os Pokémon do seu oponente.',
          price: 599.99,
          image: '/img/mewVMAX.jpg',
        },
      ];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
  };

  return (
    <Container sx={{ py: 8, backgroundColor: '#1A1A1A' }}>
      <Typography variant="h4" component="h1" gutterBottom className="text-center text-3xl font-semibold text-white mb-12">
        Golpe Fusão (Fusion Strike)
      </Typography>

      <Grid2 container spacing={3}>
        {products.map((product) => (
          <Grid2 item xs={12} sm={6} md={4} key={product.id}>
            <Card 
              sx={{ 
                backgroundColor: '#222', 
                color: '#fff', 
                boxShadow: 3, 
                borderRadius: 2, 
                '&:hover': { boxShadow: 6 }, 
                maxWidth: 350, 
                margin: 'auto', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%' 
              }}
            >
              <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-contain rounded-lg mb-4 border-2 border-gray-600"
                  style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }}
                />
                <Typography variant="h5" className="font-semibold">
                  {product.name}
                </Typography>
                <Typography variant="body2" className="mt-2" sx={{ flexGrow: 1 }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" className="mt-2">
                  R$ {product.price.toFixed(2)}
                </Typography>
              </CardContent>

              <Button
                variant="contained"
                onClick={() => handleAddToCart(product)}
                className="mt-4"
                sx={{
                  backgroundColor: '#333',
                  color: 'white',
                  '&:hover': { backgroundColor: '#555', color: 'white' },
                  padding: '10px',
                }}
              >
                Adicionar ao Carrinho
              </Button>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default FusionStrike;
