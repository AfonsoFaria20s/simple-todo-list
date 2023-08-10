import "../../styles/Content.css"

function Content(props) {
    return (
        <div className="content">
            <div className="create-task">
                <span className="add material-symbols-outlined" onClick={props.onClickAdd} >add</span>
                <hr />
                <input placeholder={props.placeholder} onChange={props.onInputChange} />
                <span className="focus-border"></span>
            </div>
        </div>
    )
}
export default Content;