import React from 'react'
import '../Style/login.css'
import {Formik,Form,Field} from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login() {
const navigate = useNavigate();
  return (
    <Formik initialValues={{name:'',email:'',password:''}}
    onSubmit={(values)=>{
      let baseurl='http://localhost:3001/users';
      axios.post(baseurl,values).then((res)=>{
        console.log(res.data);});  
    }}>
    <div className='container'>
      <div className='child'>
     
    <h1 style={{'paddingTop':'60px','textAlign':'center','fontStyle':'italic'}}>Login Here</h1>
 
    <Form>
      <label>Name</label><br/>
      <Field type='text' name='name' className='input'/> <br/> 
      <label> email</label><br/>
      <Field type='email' name='email'className='input'/><br/>
      <label>password</label><br/>
      <Field type='password' name='password' className='input'/><br/>
      <button type='submit' className='btn btn-primary'>Submit</button>
      <button className='btn btn-primary' onClick={()=>navigate('/Users')}>Get</button>

    </Form>
   
    </div>
       </div>
       </Formik>
  
  )
}
