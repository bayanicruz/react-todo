const todoModel = require('../models/todo-model')

module.exports.getJSON = (req,res) => {
    //res.send({"hello":"world"})
    const {name, text } = req.body
    console.log(text)
    console.log({name})
    res.send(text)
}

module.exports.getTodo = async(req,res) => {
    const todo = await todoModel.find()
    res.send(todo)
}

module.exports.saveTodo = async(req,res) => {
    const { text } = req.body

    todoModel.create({ text }).then((data) => {
        console.log("Added Successfully...")
        console.log(data)
        res.send(data)
    })
}

module.exports.updateTodo = async (req,res) => {
    const {_id, text } = req.body

    todoModel.findByIdAndUpdate(_id, {text})
    .then((data)=> {
        res.send("Updated Successfully...")
        console.log("Updated Successfully...")
        console.log(data)
    })
    .catch((err) => console.log(err))
}

module.exports.deleteTodo = async (req,res) => {
    const {_id } = req.body

    todoModel.findByIdAndDelete(_id)
    .then((data)=> {
        res.send("Deleted Successfully...")
        console.log("Deleted Successfully...")
        console.log(data)
    })
    .catch((err) => console.log(err))
}