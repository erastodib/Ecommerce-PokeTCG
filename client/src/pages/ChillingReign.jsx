import React, { useEffect, useState } from 'react';
import { Container, Typography, Grid2, Card, CardContent, Button } from '@mui/material';
import { useCart } from '../context/CartContext';

const ChillingReign = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = [
        {
          id: 4,
          name: 'Zapdos de Galar V (Arte Especial)',
          description: 'Com uma paisagem árida e nuvens de poeira em estilo cartunesco, a versão em arte alternativa de Galarian Zapdos V, de Akira Komayama, faz referência ao personagem Road Runner dos Looney Tunes, outra ave que não se deve antagonizar.',
          price: 199.99,
          image: '/img/gZapdosV.png',
        },
        {
          id: 5,
          name: 'Calyrex Cavaleiro Espectral-VMAX (Arte Especial)',
          description: 'Shadow Rider Calyrex VMAX oferece o maior retorno para o tipo Psíquico. Sua habilidade de preparar Pokémon no banco com energia Psíquica, além de comprar cartas no processo, cria um fluxo consistente de recursos. Além disso, Max Geist pode facilmente nocautear Pokémon com toda a energia acumulada no seu banco.',
          price: 459.99,
          image: '/img/VmxCalyrexCE.jpg',
        },
        {
          id: 6,
          name: 'Moltres de Galar V (Arte Especial)',
          description: 'Uma das cartas mais populares de Chilling Reign, esta Galarian Moltres V em arte alternativa destaca o tipo Noturno da forma regional de Moltres em Galar com uma paleta de cores bastante restrita. Embora o Galarian Moltres sempre tenha uma aparência intimidadora, esta ilustração de Shibuzoh parece verdadeiramente ameaçadora.',
          price: 699.99,
          image: '/img/galMoltresV.jpg',
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
        Reinado Arrepiante (Chilling Reign)
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
                height: '100%',
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

export default ChillingReign;
