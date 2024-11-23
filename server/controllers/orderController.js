const Order = require('../models/Order');
const Product = require('../models/Product');

exports.createOrder = async (req, res) => {
  try {
    const { userId, products } = req.body;

    if (!Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ error: 'Produtos não fornecidos ou inválidos' });
    }

    const validProducts = await Product.findAll({
      where: {
        id: products.map(product => product.id)
      }
    });

    if (validProducts.length !== products.length) {
      return res.status(400).json({ error: 'Um ou mais produtos são inválidos' });
    }

    const order = await Order.create({
      userId,
      products: JSON.stringify(validProducts)
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Erro ao criar pedido' });
  }
};

exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar os pedidos' });
  }
};

exports.updateOrder = async (req, res) => {
  const { id } = req.params;
  const { userId, products } = req.body;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }

    order.userId = userId || order.userId;

  
    if (products) {
      const validProducts = await Product.findAll({
        where: { id: products.map(product => product.id) }
      });
      if (validProducts.length !== products.length) {
        return res.status(400).json({ error: 'Um ou mais produtos são inválidos' });
      }

      order.products = JSON.stringify(validProducts);
    }

    await order.save();

    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Erro ao atualizar pedido' });
  }
};

exports.deleteOrder = async (req, res) => {
  const { id } = req.params;

  try {
    const order = await Order.findByPk(id);

    if (!order) {
      return res.status(404).json({ error: 'Pedido não encontrado' });
    }

    await order.destroy();

    res.status(204).json();
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Erro ao excluir pedido' });
  }
};
