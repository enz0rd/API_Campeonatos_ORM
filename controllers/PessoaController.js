const db = require('../models')

class PessoaController {
    static async listarPessoas(req,res) {
        try {
            const listagem = await db.Pessoas.findAll()
            return res.status(200).json(listagem)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar pessoas`})
        }
    }
    static async addPessoa(req,res) {
        try {
            const dados = req.body
            const retorno = await db.Pessoas.create({
                nome: dados.nome,
                status: dados.status,
                cpf: dados.cpf,
                id_esporte: dados.id_esporte,
                id_time: dados.id_time
            })
            return res.status(200).json(retorno)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível cadastrar Pessoa`})
        }
    }
    static async attPessoa(req,res) {
        try {
            const id_Pessoa = req.params.id
            const dados = req.body
            const retorno = await db.Pessoas.update(dados, {
                where: {
                    id: id_Pessoa
                }
            })
            const cadastro = await db.Pessoas.findOne({where: {id: id_Pessoa}})
            return res.status(200).json(cadastro)
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível atualizar Pessoa`})
        }
    }
    static async listarPessoaID(req,res) {
        try {
            const id_Pessoa = req.params.id
            const retorno = await db.Pessoas.findOne({where: { id: id_Pessoa }})
            if(retorno == null) {
                return res.status(200).json({message: 'Esse ID não está cadastrado!'})
            } else {
                return res.status(200).json(retorno)
            }
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível listar Pessoa`})
        }
    }
    static async delPessoa(req,res) {
        try {
            const id_Pessoa = req.params.id
            const retorno = await db.Pessoas.destroy({where: {id: id_Pessoa}})
            return res.status(200).json({message: `Cadastro de id ${id_Pessoa} foi excluído com sucesso`})
        } catch (error) {
            return res.status(500).json({message: `${error.message} - Não foi possível deletar cadastro`})
        }
    }
}

module.exports = PessoaController