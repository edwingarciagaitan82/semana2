export const UserList = ({ dataList }) =>{
    return(
        <div className="row">
            { dataList?.map((user)=>(
                <UserCard key={ user.id } user={ user} ></UserCard>
            )) }
        </div>
    )
}

function UserCard({ user }){
    const { name,email, phone } = user
    return(
        <div className="col-3">
            <div className="card"  style={ {width:'14rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{ name }</h5>
                    <p>{ email }</p>
                    <span>{ phone}</span>
                </div>
            </div>
        </div>
    )
}