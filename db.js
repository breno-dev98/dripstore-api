import { Sequelize } from "sequelize";

// Certifique-se de que o dotenv foi carregado antes de acessar a variável de ambiente
import * as dotenv from 'dotenv';
dotenv.config();

// Criar a conexão com o banco de dados utilizando a string de conexão armazenada em DB_POSTGRES
export const sequelize = new Sequelize(process.env.DB_POSTGRES);


try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export { Sequelize }
