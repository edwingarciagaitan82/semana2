function Hof4(){

    const add =(x,y) =>{
        return (x+y)
    }

    const multiply = (x,y) =>{
        return (x * y) 
    }

    const log = (callback) =>{
        return (
            function(x,y){
                const result = callback(x,y)
                console.log(result)
                return result
            }
        )
    }

    const sumar = log(add)
    console.log("sumar",sumar(5,5))


    const multiplicar = log(multiply)
    console.log("multiplicar", multiplicar(5,5) )

}
export default Hof4