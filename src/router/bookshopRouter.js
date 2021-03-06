const express = require('express')
const router = express.Router()

const controller = require('../controller/bookshopController')

router.get('/livros', controller.getAllBooks)
router.get('/colaboradores', controller.getAllCollaborators)
// router.get('/livros/:genre', controller.getBookByGenre)
// router.get('/colaboradores/id', controller.getIDs)
router.get('/colaborador/idade/:id', controller.getAgeByID)
router.post('/adicionarlivro', controller.postBook)
router.post('/adicionarcolaborador', controller.postCollaborator)
router.delete('/excluirlivro/:id/', controller.deleteBook)
router.delete('/excluircolaborador/:id', controller.deleteCollaborator)
router.put('/editarlivro/:id/', controller.putBook)
router.put('/editarcolaborador/:id', controller.putCollaborator)
router.patch('/atualizarlivros/:genre/', controller.patchBook)
router.patch('/atualizarcolaboradores/:occupation', controller.patchCollaborator)

module.exports = router