const db = require('../models')

class PartidaController {
    static async listarPartidas(req,res) {
        try {
            const listagem = await db.Partidas.findAll()
            return res.status(200).json(listagem)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar Partidas`})
        }
    }
    static async addPartida(req,res) {
        try {
            const dados = req.body
            const retorno = await db.Partidas.create({
                local_part: dados.local_part,
                data_part: dados.data_part,
                idtimecasa_part: dados.idtimecasa_part,
                idtimefora_part: dados.idtimefora_part,
                id_esporte: dados.id_esporte
            })
            return res.status(200).json(retorno)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar Partida`})
        }
    }
    static async attPartida(req,res) {
        try {
            const id_Partida = req.params.id
            const dados = req.body
            const retorno = await db.Partidas.update(dados, {
                where: {
                    id: id_Partida
                }
            })
            const cadastro = await db.Partidas.findOne({where: {id: id_Partida}})
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível atualizar Partida`})
        }
    }
    static async listarPartidaID(req,res) {
        try {
            const id_Partida = req.params.id
            const retorno = await db.Partidas.findOne({where: { id: id_Partida }})
            if(retorno == null) {
                return res.status(200).json({message: 'Esse ID não está cadastrado!'})
            } else {
                return res.status(200).json(retorno)
            }
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar Partida`})
        }
    }
    static async delPartida(req,res) {
        try {
            const id_Partida = req.params.id
            const retorno = await db.Partidas.destroy({where: {id: id_Partida}})
            return res.status(200).json({message: `Esporte de id ${id_Partida} foi excluído com sucesso`})
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível deletar Partida`})
        }
    }
}

module.exports = PartidaController