const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

// Definindo o modelo Order
const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Aguardando Pagamento', 'Enviado', 'Entregue'),
    defaultValue: 'Aguardando Pagamento',
  },
  products: {
    type: DataTypes.JSON,
    allowNull: false,
  }
});

module.exports = Order;
