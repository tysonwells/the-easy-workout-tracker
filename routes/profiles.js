import { Router } from 'express'
import { isLoggedIn } from '../middleware/middleware.js'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

router.get("/", isLoggedIn, profilesCtrl.index)

router.get('/:id', isLoggedIn, profilesCtrl.show)

router.post('/:id/workouts', isLoggedIn, profilesCtrl.createWorkout)
// localhost:3000/profiles/profileId/workouts/workoutId
router.get('/:profileId/workouts/:workoutId', isLoggedIn, profilesCtrl.showWorkout)

// router.post("/:id/exercise", isLoggedIn, profilesCtrl.createExercise)

export {
  router
}
