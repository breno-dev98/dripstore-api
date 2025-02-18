import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";

const Categoria = sequelize.define('Categoria', {
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imagem: {
        type: DataTypes.TEXT,
        defaultValue: "https://placehold.co/400"
    }
}, {
    tableName: "categoria",
})

export default Categoria;