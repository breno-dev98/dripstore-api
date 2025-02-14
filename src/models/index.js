import { sequelize } from "../config/db.js";
import Endereco from "./endereco.model.js";
import Produto from "./produto.model.js";

const models = {Endereco, Produto};

const syncModels = async () => {
    try {
        await sequelize.sync();
        console.log("Todos os modelos foram sincronizados com o banco!");
    } catch (error) {
        console.error("Erro ao sincronizar modelos:", error);
    }
};

export {models, syncModels};