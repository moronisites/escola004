//  ---------------------------------------------------
//   módulo de configuração das rotas
//   .
//  ---------------------------------------------------
 
'use strict'

const express = require('express');

const ctAluno = require("../controles/ctAluno");
const ctTurma = require("../controles/ctTurma");
const ctAula = require("../controles/ctAula");
const ctTarefaAluno = require("../controles/ctTarefaAluno");

const rotas = express.Router();


//rotas.get("/alunos", ctAluno.listaAlunos);
rotas.get("/turma/:id", ctAluno.listaAlunosTurma);
rotas.get("/aluno/:id", ctAluno.listaNumero);
rotas.post("/aluno", ctAluno.gravaAluno);

rotas.get("/aulas", ctAula.listaAula);
rotas.post("/aulas", ctAula.gravaAula);

rotas.get("/turmas", ctTurma.listaTurma);
rotas.post("/turmas", ctTurma.gravaTurma);

rotas.get("/tarefasAlunos", ctTarefaAluno.listaTarefasAlunos);
rotas.post("/tarefaAluno", ctTarefaAluno.tarefaAlunoNova);
rotas.post("/tarefaAluno/:id", ctTarefaAluno.tarefaAlunoEdita);
rotas.delete("/tarefaAluno/:id", ctTarefaAluno.tarefaAlunoExclui);

//rotas.get("/tarefas", ctTarefaAluno.gravaTarefa('2020-01-01',7,'observa',21,8));


//rotas.delete("/turmas", ctTurma.apaga);

//rotas.get('/report', ReportController.show);

module.exports = rotas;

