import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as exercisesCtrl from '../controllers/exercises.js'

const router = Router()

router.get("/", isLoggedIn, exercisesCtrl.index)

router.get("/new", isLoggedIn, exercisesCtrl.new)

router.get('/:id', isLoggedIn, exercisesCtrl.show)

router.post("/", isLoggedIn, exercisesCtrl.create)

router.delete('/:id', isLoggedIn, exercisesCtrl.delete)

router.get('/:id/edit', isLoggedIn, exercisesCtrl.edit)

router.put('/:id', isLoggedIn, exercisesCtrl.update)



// router.post("/:id/exercise", isLoggedIn, exercisesCtrl.createExercise)

export {
  router
}
