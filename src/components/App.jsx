import Header from "./Header/Header";
import Content from "./TasksContent/Content";
import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';
import DefaultText from "./DefaultText/AddTaskText";
import Task from "./TasksContent/Task";

function App(props) {

    // const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

    function seconds(secs) {
        return secs*1000;
    }

    let DV = new Date();

    let date = `${DV.getDate()},${monthsShort[DV.getMonth()]},${DV.getFullYear()}`;

    function formatAMPM(date_) {
        var hours = date_.getHours();
        var minutes = date_.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
        return strTime;
    }

    const [cTime, setTime] = useState(formatAMPM(new Date()));
    const [cDate, setDate] = useState(date)

    useEffect(() => {
        setInterval(() => {
            setTime(formatAMPM(new Date()))
        }, seconds(1));
        setInterval(() => {
            setDate(date)
        }, seconds(60))
    });

    const [todoList, setTodoList] = useState([]);
    const [text, setText] = useState("")

    const [hasTask, setHasTask] = useState(todoList.length!==0)
    useEffect(() => {setInterval(setHasTask(todoList.length!==0),1000)})

    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    const handleAdd = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: text,
            completed: false,
        };
        setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
    }

    const handleRemoveTask = (id) => {
        setTodoList(todoList.filter((task) => task.id !== id));
    }

    return(
        <div className="App" style={props.style}>
            <Header time={cTime} date={cDate}/>
            <Content placeholder="add a task..." onClickAdd={handleAdd} onInputChange={handleChange} />
            {!hasTask ? <DefaultText/> : todoList.map((task) => {return(
                <Task task={task.taskName} deleteTask={handleRemoveTask} id={task.id} />
            )})}
        </div>
    )
}
export default App;