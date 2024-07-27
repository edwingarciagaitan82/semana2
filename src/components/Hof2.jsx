function Hof2(){

    const sayGoodbye =() => {
        return(  function(params){
                console.log(`Adios ${ params }`)
            }
        )
    }

    sayGoodbye()("Estudiante")

    return(<></>)
}
export default Hof2