
function Search({searchInputRef,handleSearch}){
    return(<div className="search-container flex container">

<div className="search-box ">
    <input type="text" placeholder="Search for country" ref={searchInputRef} onChange={handleSearch}></input>
</div>
<div className="options">
    <select className="filter-by-region" name="region" id="region" aria-placeholder="Filter by Region">
    <option value="">Filter by Region</option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
    </select>
</div>

    </div>)
}
export default Search