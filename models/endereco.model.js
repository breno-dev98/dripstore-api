import { Sequelize, DataTypes, Model } from 'sequelize'
const sequelize = new Sequelize('sqlite::memory');

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
    tableName: 'endereco'
});

sequelize.sync().then(() => {
    console.log("Modelo Endereco sincronizado com a tabela existente!");
});

export default Endereco;