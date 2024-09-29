import React,{useRef,useEffect,useState} from "react";
import CountryCard from "./components/countryCard";
import Header from "./components/header";
import Search from "./components/searchBox";
import country from "./components/api"; 
function App() {
  const searchInputRef = useRef();

  const[countries,setCountries]=useState();
  const[filter,filterCountry]=useState();
  const[dark,isDark]=useState(false);
  const[select,selectedRegion]=useState()

  useEffect(()=>{
    country().then((list)=>{
      setCountries(list);
      filterCountry(list);
    
    })
  },[])

  const handleSearch = () => {
    const query = searchInputRef.current.value.toLowerCase();
    const search = countries.filter((country) => 
      country.name.common.toLowerCase().includes(query) );
    filterCountry(search);
  };

  let  toggleMode=()=>{
    isDark(!dark);
  }

  const appStyle = {
    color: dark ? "#fff" : "#000", 
    backgroundColor: dark ? "#121212" : "#ffffff", 
    transition: "background-color 0.3s, color 0.3s" 
  };

  /*function handleSelect(evt){
    let value=evt.target.value.toLowerCase();
    selectedRegion(value);
    const search = countries.filter((country) => 
     country.name.common.toLowerCase().includes(select) );
    filterCountry(search);


  }*/
  return (
    <div style={appStyle}>
    <Header  handleMode={toggleMode} dark={dark}/>
    <Search searchInputRef={searchInputRef} handleSearch={handleSearch} />
    <CountryCard countries={filter} dark={dark} />
    </div>
  )
}

export default App;







