import express from 'express'
import Endereco from "../models/endereco.model";

const router = express.Router()

export const enderecoController = app => {
    router.get('/endereco', async (req, res) => {
        const enderecos = await Endereco.findAll()
        res.json(enderecos)
    })

    app.use('/api', router)
}