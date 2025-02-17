import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Marcas = sequelize.define("Marcas",{
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
    }
},
{
    tableName: "marcas",
    timestamps: false
})

export default Marcas;
