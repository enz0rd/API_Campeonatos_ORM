const db = require('../models')

class TimeController {
    static async listarTimes(req,res) {
        try {
            const listagem = await db.Times.findAll()
            return res.status(200).json(listagem)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar times`})
        }
    }
    static async addTime(req,res) {
        try {
            const dados = req.body
            const retorno = await db.Times.create({
                nome_time: dados.nome_time,
                id_esporte: dados.id_esporte,
                treinador_time: dados.treinador_time,
            })
            return res.status(200).json(retorno)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar time`})
        }
    }
    static async attTime(req,res) {
        try {
            const id_time = req.params.id
            const dados = req.body
            const retorno = await db.Times.update(dados, {
                where: {
                    id: Number(id_time),
                }
            })
            const cadastro = await db.Times.findOne({
                where: {
                    id: Number(id_time),
                }
            })
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível atualizar o time`})
        }
    }
    static async listarTimeID(req,res) {
        try {
            const id_time = req.params.id
            const retorno = await db.Pessoas.findAll({where: { id_time: Number(id_time) }})
            if (retorno !== null || []) {
                return res.status(200).json(retorno)
            } else {
                return res.status(200).json({message: `Esse time ainda não tem jogadores cadastrados`})
            }
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar Time`})
        }
    }
    static async delTime(req,res) {
        try {
            const id_time = req.params.id
            const retorno = await db.Times.findOne({where: {id: id_time}})
            if(retorno !== null || []) {
                return res.status(200).json({message: `O time ${id_time} foi tem jogadores, desvincule-os antes de excluir o time!`})
            } else {
                const retorno = await db.Times.destroy({where: {id: id_time}})
                return res.status(200).json({message: `O time ${id_time} foi excluído com sucesso`})
            }
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível deletar Time`})
        }
    }
}

module.exports = TimeController