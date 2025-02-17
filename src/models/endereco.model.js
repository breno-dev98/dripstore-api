import { DataTypes } from 'sequelize'
import { sequelize } from '../config/db.js';

const Endereco = sequelize.define('Endereco', {
    cep: {
        type: DataTypes.CHAR(8),
        allowNull: false
    },
    numero: DataTypes.INTEGER,
    complemento: DataTypes.TEXT(255),
    estado: {
        type: DataTypes.TEXT(50),
        allowNull: false
    },
    cidade: {
        type: DataTypes.TEXT(150),
        allowNull: false
    },
    logradouro: {
        type: DataTypes.TEXT(255),
        allowNull: false
    }

},{
    tableName: 'endereco',
    timestamps: false
});

export default Endereco;