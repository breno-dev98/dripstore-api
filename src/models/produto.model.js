import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

const Produto = sequelize.define("Produto",{
    nome: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},
{
    tableName: "produto",
    timestamps: false
})

export default Produto;
