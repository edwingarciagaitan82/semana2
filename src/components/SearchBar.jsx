function SearchBar({setQuery }){
    return(
        <div className="form-group" >
            <input className="form-control  search" placeholder="Buscar..." 
            onChange={ (e)=>setQuery(e.target.value.toLocaleLowerCase()) }
        ></input>
        </div>
    )
}
export default SearchBar   