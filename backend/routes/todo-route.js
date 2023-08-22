const { Router } = require("express")
const { getTodo, saveTodo, updateTodo, deleteTodo, getJSON} = require("../controllers/todo-controller")

const router = Router()

router.get('/', getTodo)
router.post('/save', saveTodo)
router.post('/update', updateTodo)
router.post('/delete', deleteTodo)
router.get('/jsonTest', getJSON)

module.exports = router