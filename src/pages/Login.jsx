import React, { useState } from "react";
import{useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { signin , signout} from "../store/auth/auth.actions";


const Login = () => {
  
  const navigate = useNavigate()

  const dispatch= useDispatch();


 const [login,setLogin]=useState({
  email:"",
  password:""
 })

 const handleChange=(e)=>{
  const {name,value}=e.target;
  setLogin({
    ...login,
    [name]:value,
  })
 }
  
  const handleSubmit=(e)=>{
    e.preventDefault();

    dispatch(signin(login))
    navigate("/")
  }
  
  
  
  
  return (
    <div>
      <form>
        <input data-cy="login-email" 
        name="email" type="email"/>
        <input data-cy="login-password" />
        <button data-cy="login-submit" type="submit" ></button>
      </form>
    </div>
  );
};

export default Login;
