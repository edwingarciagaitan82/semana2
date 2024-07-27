const withAlertOnClick = (WrappedComponent) => {
    return function (props) { console.log("props", props)
        const handleClick = () =>{
            alert("texto: " + props.text)
        }
        return <WrappedComponent {...props} onClick={ handleClick }  ></WrappedComponent>
     }
}

export default withAlertOnClick