import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as exercisesCtrl from '../controllers/exercises.js'

const router = Router()

router.get("/", isLoggedIn, exercisesCtrl.index)

router.get('/:id', isLoggedIn, exercisesCtrl.show)

router.get("/new", isLoggedIn, exercisesCtrl.new)

router.post("/", exercisesCtrl.create)

// router.post("/:id/exercise", isLoggedIn, exercisesCtrl.createExercise)

export {
  router
}
