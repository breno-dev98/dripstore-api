import express from 'express'
import cors from 'cors'
import routes from './src/routes/routes.js'
import { syncModels } from './src/models/index.js'
const app = express()
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use(cors({origin: "http://localhost:5173"}))
app.use("", routes)


app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})


syncModels().then(() => {
    app.listen(PORT, '0.0.0.0', () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.error("Erro ao iniciar o servidor:", err));