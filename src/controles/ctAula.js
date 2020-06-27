// -------------------------------------------------
// CONTROLE = Módulo com as funções para acesso 
// aos registros da tabela:
// listar; buscar; editar e apagar 
// -------------------------------------------------

'use strict'

const Aula = require('../modelos/mdAula');

module.exports = {

    async lista(req, res) {
        try {
            const aulas = await Aula.findAll();
            return res.json(aulas);
        } catch (error) {
            console.log("aulas NAO listadas");
            console.log(error);
            return res.json("Erro ao listar aulas");
        }
    },

    async grava(req, res) {
        try {
            const {
                data,
                codHabilidade,
                descricao,
                entrega
            } = req.body;
            const aula = await Aula.create({
                data,
                codHabilidade,
                descricao,
                entrega
            });
            return res.json(aula);
        } catch {
            console.log("aula NAO gravada");
            console.log(error);
            return res.json("Erro ao gravar aulas");
        }
    }
};