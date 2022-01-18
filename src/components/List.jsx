import React, { useState } from 'react'

const List = () => {
    const [todo, setTodo] = useState('')
    const [checked, setChecked] = useState(false)
    const [todoList, setTodoList] = useState([])
    const createItem = (e) => {
        e.preventDefault();
        let todoObj = {
            todo: todo,
            checked: checked
        };
        let updateTodo = [...todoList, todoObj];
        setTodoList(updateTodo);
        setTodo('');
    }
    const deleteItem = (i) => {
        let copy = todoList.filter((todo, idx) => idx !== i)
        setTodoList(copy);
    }
    const check=(i)=> {
        let [...copy] = todoList;
        copy[i].checked=!copy[i].checked;
        setTodoList(copy);
    }
    return (
        <div>
            <div>
                <h1>Todo List</h1>
                <form onSubmit={createItem}>
                    <input className='form_input' type="text" name='todo' value={todo} id='todoInput' onChange={(e) => setTodo(e.target.value)} />
                    <input className='btn' type="submit" value="Create" />
                </form>
            </div>
            <div>
                {
                    todoList.map((item, i) => {
                        return (
                            <div>
                                <h4 style={{display: 'inline', textDecoration: item.checked? 'line-through':''}} key={i}>{item.todo}</h4>
                                <input type="checkbox" name="" id="" onClick={()=>check(i)}/>
                                <input className='delete btn' type="button" value="Delete" onClick={()=>deleteItem(i)}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default List;