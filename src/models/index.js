import { sequelize } from "../config/db.js";
import Endereco from "./endereco.model.js";
import Produto from "./produto.model.js";
import Marcas from "./marcas.model.js";
import Categoria from "./categoria.model.js";
import Usuarios from './usuarios.models.js'

const models = { Endereco, Produto, Marcas, Categoria, Usuarios };

const syncModels = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log("Todos os modelos foram sincronizados com o banco!");
    } catch (error) {
        console.error("Erro ao sincronizar modelos:", error);
    }
};

export { models, syncModels };