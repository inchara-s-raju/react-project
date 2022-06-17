import React,{useEffect} from 'react'
import {fetchUsers} from './Redux/userAction'
import {connect} from 'react-redux'


function Users({userData,fetchUsers}) {
  useEffect(()=>{
    fetchUsers()
  },[])  
  return userData.loading ? (<h1>User data is loading</h1>)
    : userData.error ?
    (<h1>{userData.error}</h1>):
    (<div>
      <h2 style={{'textAlign':'center','marginTop':'5px'}}>User List</h2>
    <div style={{'display':'flex','justifyContent':'center','alignItems':'center'}}>
     
      <div>
         {userData &&
           userData.users&&
           userData.users.map(user=><p>Name:{user.name}<br/> Email:{user.email}</p>)}
      </div>
    </div>
    </div> )
}

const mapStateToProps = state=>{
  return{
    userData:state.users
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    fetchUsers:()=>dispatch(fetchUsers())
  }
}
export default connect(mapStateToProps,mapDispatchToProps) (Users)