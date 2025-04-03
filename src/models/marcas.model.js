import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import Usuarios from "./usuarios.models.js";
import { defineUserRelation } from "../utils/defineUserRelation.js";

const Marcas = sequelize.define("Marcas",{
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuarios,
            key: "id"
        }
    }
},
{
    tableName: "marcas",
    timestamps: true
})

defineUserRelation(Marcas, Usuarios)
export default Marcas;
