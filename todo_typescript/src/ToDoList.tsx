import React, {useContext} from "react"
import {ListItem} from "./ListItem"
import {ToDoListContext} from "./Context"
import update from "immutability-helper"
import {useDrop} from "react-dnd"
import {ItemTypes} from "./Types"

export const ToDoList: React.FC = () => {
    const context = useContext(ToDoListContext)

    // function findToDo(id: string) {
    //     const todo_item = context.todos.filter(item => item.id === id)[0]
    //
    //     return {
    //         todo_item,
    //         index: context.todos.indexOf(todo_item)
    //     }
    // }
    //
    // function moveToDo(id: string, atIndex: number) {
    //     const {todo_item, index} = findToDo(id)
    //     context.setTodos(update(context.todos, {
    //         $splice: [
    //             [index, 1],
    //             [atIndex, 0, todo_item],
    //         ]
    //     }))
    // }

    //const [, drop] = useDrop({accept: ItemTypes.TODO_ITEM})

    // return (
    //     <div className="todolist" ref={drop}>
    //         <ul>
    //             {context.todos.map(item => {
    //                 return <ListItem id={item.id} data={item.data} done={item.done} key={item.id}
    //                                  moveToDo={moveToDo} findToDo={findToDo}/>
    //             })}
    //         </ul>
    //     </div>
    // )

    return (
        <div className="todolist">
            <ul>
                {context.todos.map(item => {
                    return <ListItem id={item.id} data={item.data} done={item.done} key={item.id}/>
                })}
            </ul>
        </div>
    )
}
