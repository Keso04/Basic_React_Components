const Book = (props) => {
    return <div>
        <img src= {props.link}/>
        <h1 className="header"> {props.title} </h1>
        <p className="info"> {props.info} </p>
        <h2>Actors:</h2>
        <p className="list">{props.actors.map((actors) => <div><li>{actors}</li></div>)}</p>
        <button onClick={printInformation} className="btn">Button</button>
    </div>

function printInformation(){
    console.log(props.title, props.actors.map((actors) => actors));
}
}

export default Book;