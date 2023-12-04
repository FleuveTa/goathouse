
export default function GoatComponent (props) {
    return (
        <div className="goat-com-container">
            <img  src={props.image}/>
            <h1 className="goatcom-header">{props.heading}</h1>
            <p className="goatcom-descript">{props.descript}</p>
        </div>
    )
}