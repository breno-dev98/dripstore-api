import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Usuarios = sequelize.define("Usuarios",{
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    cpf: {
        type: DataTypes.STRING(15),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(15),
        allowNull: false
    },
},
{
    tableName: "usuarios",
    timestamps: true
})

export default Usuarios;
