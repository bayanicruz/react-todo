import React from 'react'
//import {BiEdit,AiFillDelete} from "react-icons"
import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const todo = ({text, updateMode, deleteToDo}) => {
    return(
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <BiEdit className="icon"/>
                <AiFillDelete className="icon"/>
            </div>
        </div>
    )
}

export default todo