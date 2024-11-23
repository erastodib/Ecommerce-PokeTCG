import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid2, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext'; 

const LostOrigin = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();  

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 1,
          name: 'Pikachu V (Galeria de Treinadores)',
          description: 'Uma carta que não foi originalmente lançada na coleção Origem Perdida, mas faz parte da sua Galeria de Treinadores. Esse reprint da carta Pikachu V ao lado de um dos Treinadores mais icônicos dos jogos Pokémon, Red, deixou a carta altamente colecionável. A Galeria de Treinadores é um belo upgrade para as coleções de Pokémon TCG atuais, então algumas de suas cartas chegam valorizando e muito a coleção.',
          price: 179.99,
          image: '/img/pikachuV.jpg',
        },
        {
          id: 2,
          name: 'Aerodactyl V (Arte Especial)',
          description: 'Outra Arte Especial belíssima de Origem Perdida! Assim como o Rotom V, Aerodactyl V também possui versões mais simples da carta da coleção, mas essa por possuir uma ilustração diferenciada, com uma tiragem bem mais baixa que as regulares, é natural estar entre as primeiras posições das cartas mais cobiçadas da coleção.',
          price: 256.99,
          image: '/img/aerodactylV.png',
        },
        {
          id: 3,
          name:  'Giratina V (Arte Especial)',
          description: 'Giratina V-ASTRO tem que evoluir do seu básico, Giratina V, que possui versões de mais fácil acesso dentro dos pacotes de Origem Perdida, mas Arte Especial tem um charme diferenciado. Medalha de bronze para a Giratina V, que fica com a melhor posição de Arte Especial mais cobiçada de Origem Perdida.',
          price: 284.99,
          image: '/img/giratinaV.png',
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
        Origem Perdida (Lost Origin)
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

export default LostOrigin;
