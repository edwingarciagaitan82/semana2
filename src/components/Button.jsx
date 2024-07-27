const Button = ({ onClick, children,  text  }) => {
    return(
        <button onClick={onClick}>
            { children }
        </button>
    )
}
export default Button