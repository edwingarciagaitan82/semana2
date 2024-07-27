function Hof3(){

    function concat(){
        return( 
            function(a,b,c){
            return "$ "+a + b  + c 
        })
    }

    const concatenar = concat()

    // console.log(concatenar("hola", 2, 3))
    console.log(concat()("edwin", "garcia", "tech"))
    return(<></>)
}
export default Hof3