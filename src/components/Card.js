
function Card(props){
    return(
        <div className="card" id={props.id} onClick={props.addToScore}>
            <img src={props.src} alt={props.id} />
        </div>

    )
}

export default Card;