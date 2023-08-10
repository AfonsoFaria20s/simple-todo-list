import "../../styles/Task.css"

function Task(props) {
    return(
        <div className="task-box container">
            <span className="task-name" style={props.style}>{props.task}</span>
            <span className="material-symbols-outlined remove right" onClick={() => props.deleteTask(props.id)}>close</span>
        </div>
    )
}
export default Task;