import express from 'express'
import { createTodo, getTodos } from '../controllers/todoController.js'

const router = express.Router()

router.get('/', getTodos)

router.post('/', createTodo)

router.delete('/:id')

export default router