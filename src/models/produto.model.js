import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import Categoria from './categoria.model.js'

const Produto = sequelize.define("Produto",{
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    avaliacao: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    tamanho: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cor: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    categoriaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Categoria,
            key: 'id'
        }
    }
},
{
    tableName: "produto"
})

Produto.belongsTo(Categoria, {foreignKey: 'categoriaId'});
Categoria.hasMany(Produto, {foreignKey: 'categoriaId'})

export default Produto;
