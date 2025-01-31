import express from 'express'
import { sequelize } from './db.js'
import { QueryTypes, Sequelize } from 'sequelize'
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Servidor funcionando!')
})

app.get('/produtos', async(req, res) => {
    try {
        const result = await sequelize.query("SELECT * FROM produto", {
            type: QueryTypes.SELECT
        });
        res.json(result)
    } catch (error) {
        console.error('Erro ao buscar produto', error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})