import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    district: '',
    city: '',
    state: '',
    zip: '', 
    paymentMethod: '',
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleZipChange = async (e) => {
    const { value } = e.target;
    const formattedZip = value
      .replace(/\D/g, '')
      .replace(/^(\d{5})(\d{0,3})$/, '$1-$2');

    setFormData({ ...formData, zip: formattedZip });

    if (formattedZip.replace('-', '').length === 8) {
      setIsLoading(true);
      try {
        const response = await axios.get(`https://viacep.com.br/ws/${formattedZip.replace('-', '')}/json/`);
        if (response.data.erro) {
          setErrors((prev) => ({ ...prev, zip: 'CEP não encontrado!' }));
          setFormData({ ...formData, address: '', district: '', city: '', state: '' });
        } else {
          setFormData({
            ...formData,
            address: response.data.logradouro,
            district: response.data.bairro,
            city: response.data.localidade,
            state: response.data.uf,
          });
          setErrors((prev) => ({ ...prev, zip: '' }));
        }
      } catch (error) {
        setErrors((prev) => ({ ...prev, zip: 'Erro ao buscar o CEP' }));
        setFormData({ ...formData, address: '', district: '', city: '', state: '' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Nome é obrigatório';
    if (!formData.address) newErrors.address = 'Endereço é obrigatório';
    if (!formData.district) newErrors.district = 'Bairro é obrigatório';
    if (!formData.city) newErrors.city = 'Cidade é obrigatória';
    if (!formData.state) newErrors.state = 'Estado é obrigatório';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Método de pagamento é obrigatório';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const order = {
        ...formData,
        status: 'Aguardando Pagamento',
        date: new Date().toLocaleString(),
      };
      const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
      existingOrders.push(order);
      localStorage.setItem('orders', JSON.stringify(existingOrders));
      console.log('Compra finalizada', formData);
      navigate('/order-history');
    }
  };

  return (
    <Container maxWidth="sm" className={`checkout-container ${isVisible ? 'fade-in' : ''}`} sx={{ bgcolor: '#121212', borderRadius: 2, p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom className="checkout-title" sx={{ color: '#fff', textAlign: 'center' }}>
        Finalizar Compra
      </Typography>

      <form onSubmit={handleSubmit} className="checkout-form">

        <TextField
          label="Nome Completo"
          variant="outlined"
          fullWidth
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#888',
              '&:hover fieldset': {
                borderColor: '#dcdcdc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dcdcdc',
              },
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            },
          }}
        />

        <TextField
          label="CEP"
          variant="outlined"
          fullWidth
          name="zip"
          value={formData.zip}
          onChange={handleZipChange}
          error={Boolean(errors.zip)}
          helperText={errors.zip}
          inputProps={{ maxLength: 10 }}
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#888',
              '&:hover fieldset': {
                borderColor: '#dcdcdc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dcdcdc',
              },
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            },
          }}
        />

        <TextField
          label="Endereço"
          variant="outlined"
          fullWidth
          required
          name="address"
          value={formData.address}
          onChange={handleChange}
          error={Boolean(errors.address)}
          helperText={errors.address}
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#888',
              '&:hover fieldset': {
                borderColor: '#dcdcdc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dcdcdc',
              },
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            },
          }}
        />

        <TextField
          label="Bairro"
          variant="outlined"
          fullWidth
          required
          name="district"
          value={formData.district}
          onChange={handleChange}
          error={Boolean(errors.district)}
          helperText={errors.district}
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#888',
              '&:hover fieldset': {
                borderColor: '#dcdcdc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dcdcdc',
              },
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            },
          }}
        />

        <TextField
          label="Cidade"
          variant="outlined"
          fullWidth
          required
          name="city"
          value={formData.city}
          onChange={handleChange}
          error={Boolean(errors.city)}
          helperText={errors.city}
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#888',
              '&:hover fieldset': {
                borderColor: '#dcdcdc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dcdcdc',
              },
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            },
          }}
        />

        <TextField
          label="Estado"
          variant="outlined"
          fullWidth
          required
          name="state"
          value={formData.state}
          onChange={handleChange}
          error={Boolean(errors.state)}
          helperText={errors.state}
          sx={{
            marginBottom: 2,
            '& .MuiInputLabel-root': {
              color: '#fff',
            },
            '& .MuiOutlinedInput-root': {
              borderColor: '#888',
              '&:hover fieldset': {
                borderColor: '#dcdcdc',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#dcdcdc',
              },
              '& .MuiInputBase-input': {
                color: '#fff',
              },
            },
          }}
        />

        <FormControl fullWidth required error={Boolean(errors.paymentMethod)} sx={{ marginBottom: 2 }}>
          <InputLabel id="payment-method-label" style={{ color: '#fff' }}>Método de Pagamento</InputLabel>
          <Select
            labelId="payment-method-label"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            label="Método de Pagamento"
            sx={{
              '& .MuiInputLabel-root': {
                color: '#fff',
              },
              '& .MuiOutlinedInput-root': {
                borderColor: '#fff',
                '&:hover fieldset': {
                  borderColor: '#dcdcdc',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#dcdcdc',
                },
              },
            }}
          >
            <MenuItem value="credit-card">Cartão de Crédito</MenuItem>
            <MenuItem value="bank-slip">Boleto Bancário</MenuItem>
          </Select>
          {errors.paymentMethod && <FormHelperText>{errors.paymentMethod}</FormHelperText>}
        </FormControl>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          sx={{
            padding: '10px 0',
            marginTop: 2,
            backgroundColor: '#292cc9',
            '&:hover': {
              backgroundColor: '#1f239a',
            },
          }}
        >
          Finalizar Compra
        </Button>
      </form>
    </Container>
  );
};

export default Checkout;
