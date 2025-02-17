import { sequelize } from "../config/db.js";
import Endereco from "./endereco.model.js";
import Produto from "./produto.model.js";
import Marcas from "./marcas.model.js";
import Categoria from "./categoria.model.js";

const models = {Endereco, Produto, Marcas, Categoria};

const syncModels = async () => {
    try {
        await sequelize.sync();
        console.log("Todos os modelos foram sincronizados com o banco!");
    } catch (error) {
        console.error("Erro ao sincronizar modelos:", error);
    }
};

export {models, syncModels};