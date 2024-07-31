import { catUpdate } from "../redux/categoriesSlice"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
function CategoryUpdater(){
    const dispatch = useDispatch();

    const fetchCategories =() =>{
        // fetch('https://fakestoreapi.com/products/categories')
        fetch("http://127.0.0.1:3000/")
        .then(response=> response.json())
        .then(data =>{ console.log(data);
                        dispatch(catUpdate(data))
          }   )
    }
    // 3103790781
    useEffect( ()=>{
        fetchCategories()

        const interval = setInterval(() => {
            fetchCategories()
            }, 1 * 60 * 1000);
            console.log("ejecutado")
            return () => clearInterval(interval)
    } ,[dispatch])

}

export default CategoryUpdater