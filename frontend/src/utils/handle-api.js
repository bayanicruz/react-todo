import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllToDo = (setTodo) => { //setTodo expects a function as an arg
    axios.get(baseUrl)
    .then(({data}) => {
        console.log('data from util', data)
        setTodo(data)
    })
}

const addTodo = (text, setText, setTodo) => {
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) => {
        console.log(data)
        setText("")
        getAllToDo(setTodo)
    })
}

export {getAllToDo, addTodo}