
function Card(props){
    return(
        <div className="card" id={"card" + props.id}>
            <img src={props.src} alt={props.id} />
        </div>

    )
}

export default Card;