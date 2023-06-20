
const Lesson = require('../models/Lesson')

const createLesson = (req, res) => {
    
    // 1st validate the req.body

    Lesson.create(req.body)
    res.send("Lesson created!")
}
const findLessons = async (req, res) => {
    
   let responseFromDatabase = await Lesson.find()
    res.json(responseFromDatabase);
}

const updateLesson = async (req, res) => {
    let databaseResponse = await Lesson.findByIdAndUpdate(req.params.lessonId, { topic: "node.js" }, { new: true })
    res.send(databaseResponse)
}
const deleteLesson = async (req, res) => {
    try {
        let databaseResponse = await Lesson.findByIdAndDelete(req.params.lessonId);
        console.log(databaseResponse);
        if (databaseResponse) {
            res.status(200).send("delete was good")
        } else {
            res.status(400).send("Delete was bad, no delete, sorry.")
        }
    } catch(err) {
        console.log(err);
    }

}



module.exports = {
    createLesson,
    findLessons,
    updateLesson,
    deleteLesson
}