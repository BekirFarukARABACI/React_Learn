import { memo } from "react"

const Todos = ({todos, addTodo}) => {
    console.log("Child render")
    return(
        <>
            {todos.map((todo,index)  =>{
                return <p key={index}>{todo}</p>
            })}
            <button onClick={addTodo}>Add todo</button>
        </>
    )
}

export default memo(Todos);