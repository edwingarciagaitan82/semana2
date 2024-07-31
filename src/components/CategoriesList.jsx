import { useSelector } from "react-redux" 

function CategoriesList(){

    const categories = useSelector((state)=> state.categories.list)
    console.log("categories", categories)
    return(<>
        <ul>
        { categories.map( (category, i) =>(
            <li key={i} >{ category } </li>
        ) ) }
        </ul>
    </>)
}

export default CategoriesList