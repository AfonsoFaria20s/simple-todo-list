import "../../styles/Header.css"

function Header(props) {
    
    return(
        <div className="header-container">
            <h1 id="logo-title">To-Do List</h1>
            <div className="current-data">
                <span id="time">{props.time}</span>
                <span id="date">{props.date}</span>
            </div>
        </div>
    )
}
export default Header;