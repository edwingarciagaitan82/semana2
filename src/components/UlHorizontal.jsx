function UlHorizontal({ list }){

    return(<>
    <ul className="navbar-nav flex-row ml-md-auto d-flex">
        { list.map((item)=>(
            <li key={ item.id }> { item.icon }</li>
        ))  }
    </ul>
    </>)
}
export default UlHorizontal