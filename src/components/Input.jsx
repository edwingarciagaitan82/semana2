const Input = ({ onClick, children,  text  }) => {
    return(
        <input onClick={onClick} placeholder={ children }></input>
    )
}
export default Input