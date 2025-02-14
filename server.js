import express from 'express'
import { enderecoController } from './src/controllers/endereco.controller.js'
import produtoRoutes from './src/routes/produtoRoutes.js'
import { syncModels } from './src/models/index.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use("", produtoRoutes)

app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})

enderecoController(app)

syncModels().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error("Erro ao iniciar o servidor:", err));