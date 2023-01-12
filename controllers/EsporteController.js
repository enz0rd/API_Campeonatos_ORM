const db = require('../models')

class EsporteController {
    static async listarEsportes(req,res) {
        try {
            const listagem = await db.Esportes.findAll()
            return res.status(200).json(listagem)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar esportes`})
        }
    }
    static async addEsporte(req,res) {
        try {
            const dados = req.body
            const retorno = await db.Esportes.create({
                descr_esp: dados.descr_esp,
                min_idade: dados.min_idade
            })
            return res.status(200).json(retorno)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar esporte`})
        }
    }
    static async attEsporte(req,res) {
        try {
            const id_esporte = req.params.id
            const dados = req.body
            const retorno = await db.Esportes.update(dados, {
                where: {
                    id: id_esporte
                }
            })
            const cadastro = await db.Esportes.findOne({where: {id: id_esporte}})
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível atualizar esporte`})
        }
    }
    static async listarEsporteID(req,res) {
        try {
            const id_esporte = req.params.id
            const retorno = await db.Esportes.findOne({where: { id: id_esporte }})
            if(retorno == null) {
                return res.status(200).json({message: 'Esse ID não está cadastrado!'})
            } else {
                return res.status(200).json(retorno)
            }
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar esporte`})
        }
    }
    static async delEsporte(req,res) {
        try {
            const id_esporte = req.params.id
            const retorno = await db.Esportes.destroy({where: {id: id_esporte}})
            return res.status(200).json({message: `Esporte de id ${id_esporte} foi excluído com sucesso`})
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível deletar esporte`})
        }
    }
}

module.exports = EsporteController