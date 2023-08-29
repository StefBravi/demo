import Card from "./card";

function CardList({props, clickHandler}){
    return(
        <div>
             {props.map((animals) => (
               <Card key={animals.id} animals={animals} clickHandler={clickHandler} />
     ))}
        </div>
    )
}

export default CardList

//01:41:00