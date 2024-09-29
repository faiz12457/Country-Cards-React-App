import Card from "./Card"
function CountryCard({ countries,dark }) {
    return (
      <div className="container card-container">
        {countries && countries.map((info) => (
          <Card
            key={info.name.common} 
            dark={dark}
            img={info.flags.png}
            country={info.name.common}
            population={info.population}
            region={info.region}
            capital={info.capital ? info.capital[0] : "N/A"}
          />
        ))}
      </div>
    );
  }
  
  export default CountryCard;
  