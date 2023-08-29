


function Card({animals,clickHandler}){

    const{name, place} = animals
    return(
        <div>
            <h2>{name}</h2>
            <p>{place}</p>
            <button onClick={clickHandler}>Clickeame</button>
        </div>
    )
}

export default Card