import express from 'express'
import produtoRoutes from './src/routes/produtoRoutes.js'
import enderecoRoutes from './src/routes/enderecoRoutes.js'
import marcaRoutes from './src/routes/marcaRoutes.js'
import { syncModels } from './src/models/index.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use("", produtoRoutes)
app.use("", enderecoRoutes)
app.use("", marcaRoutes)

app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})


syncModels().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error("Erro ao iniciar o servidor:", err));