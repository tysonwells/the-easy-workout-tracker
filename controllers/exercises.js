import { Exercise } from '../models/exercise.js'

function index(req, res){
  console.log('It works!')
  Exercise.find({})
  .then(exercises => {
    res.render('exercises/index', {
      title: 'Excercises', 
      exercises
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/exercises')
  })
}

function show(req, res) {
  console.log('Working!')
}

function newExercise(req,res) {
  res.render('exercises/new', {
    title: 'New Exercies'
  })  
}

function create(req, res) {
  console.log('Jesus!')
    Exercise.create(req.body, function(error, exercise){
    if (error) {
      console.log(error)
      return res.redirect("/exercises/new")
    }
    res.redirect(`/exercises/${exercise._id}`)
  })
}

export {
index,
show,
newExercise as new,
create,
}