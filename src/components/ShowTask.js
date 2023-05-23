const ShowTask=({taskList,setTaskList,task,setTask})=>{
    const handleDelete=(id)=>{
        const updatedTaskList=taskList.filter(todo=>todo.id!==id);
        setTaskList(updatedTaskList);
    }

    const handleEdit=(id)=>{
        const selectedTask=taskList.find(todo=>todo.id===id);
        setTask(selectedTask);
        console.log(selectedTask);
    }

    
    return(
        <section className="showTask">
            <div className="head">
                <div>
                    <span className="title">Todo</span>
                    <span className="count">{ taskList && taskList.length}</span>
                </div>
                <button  onClick={()=>setTaskList([])} className="clearAll">Clear all</button>
            </div>
            <ul>
                {taskList && taskList.map((todo)=>(
                    <li key={todo.id}>
                    <p>
                        <span className="name">{todo.name}</span>
                        <span className="time">{todo.time}</span>
                    </p>
                    <i onClick={()=>handleEdit(todo.id)} className="bi bi-pencil-square"></i>
                    <i onClick={()=>handleDelete(todo.id)} className="bi bi-trash"></i>
                </li>

                ))}
                
            </ul>
        </section>
    )
    }

    export default ShowTask;