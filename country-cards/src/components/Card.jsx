function Card(props){
const change={
    color:props.dark ? "#fff" : "#000",
}
    const appStyle = {
        
        backgroundColor: props.dark && "grey", 
        transition: "background-color 0.3s, color 0.3s" 
      };
    return (<div className="card" style={appStyle} >
        <div className="flag">
            <img src={props.img} alt="country-img"></img>
        </div>
        <div className="info">
        <h4 style={change}>{props.country}</h4>
        <p style={change}>Population: {props.population}</p>
        <p style={change}>Region: {props.region}</p>
        <p style={change}>Capital: {props.capital}</p>
        </div>
    </div>)


}

export default Card;