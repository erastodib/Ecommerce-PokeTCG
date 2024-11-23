const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar os produtos' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category } = req.body;
    const product = await Product.create({ name, description, price, stock, category });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao criar produto' });
  }
};

exports.updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, category } = req.body;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.stock = stock || product.stock;
    product.category = category || product.category;

    await product.save();

    res.json(product);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao atualizar produto' });
  }
};

exports.deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }

    await product.destroy();

    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Erro ao excluir produto' });
  }
};
