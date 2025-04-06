import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.js";
import Usuarios from "./usuarios.models.js";
import { defineUserRelation } from "../utils/defineUserRelation.js";

const Categoria = sequelize.define('Categoria', {
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios,
            key: "id"
        }
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
defineUserRelation(Categoria, Usuarios)

export default Categoria;