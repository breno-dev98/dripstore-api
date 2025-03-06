import express from 'express'
import cors from 'cors'
import routes from './src/routes/routes.js'
import { syncModels } from './src/models/index.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use("", routes)


app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})


syncModels().then(() => {
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error("Erro ao iniciar o servidor:", err));