import { Sequelize } from "sequelize";

// Certifique-se de que o dotenv foi carregado antes de acessar a variável de ambiente
import * as dotenv from 'dotenv';
dotenv.config();

// Verificar se a variável DB_POSTGRES está definida
if (!process.env.DB_POSTGRES) {
  console.error('A variável de ambiente DB_POSTGRES não foi encontrada.');
  process.exit(1);  // Encerra a aplicação com erro
}
if (!process.env.JWT_SECRET) {
  console.error('A variável de ambiente JWT_SECRET não foi encontrada.');
  process.exit(1);  // Encerra a aplicação com erro
}

// Criar a conexão com o banco de dados utilizando a string de conexão armazenada em DB_POSTGRES
export const sequelize = new Sequelize(process.env.DB_POSTGRES);


try {
  await sequelize.authenticate();
  console.log('Conexão com o banco bem sucedida.');
} catch (error) {
  console.error('Não foi possível se contectar com o banco:', error);
}

export { Sequelize }
