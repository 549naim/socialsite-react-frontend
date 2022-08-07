import Axios from "axios"
import React,{useState} from 'react'


const Login = () => {

  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);
  const loginNow = async ()=> {
    Axios({
      method: 'POST',
      url: 'http://127.0.0.1:8000/login/',
      data: {
        'username': username,
        'password': password
      }
    }).then(response=> {
      
      window.localStorage.setItem('token', response.data['token']);
      window.location.href="/"
    }).catch(()=> {
      alert("Your password oe username is incorrect")
    })
  }

  return (
    <div className="container">
        <div class="wrapper fadeInDown">
  <div id="formContent">
   

  
    <div class="fadeIn first">
     <h3>Please Enter your Username and Password</h3>
    </div>

   
    <form >
      <input onChange={(e)=>setusername(e.target.value)} type="text" id="login" class="form-control mb-3 " name="login" placeholder="username"/>
      <br />
      <input onChange={(e)=>setpassword(e.target.value)} type="password" id="password" class="form-control mb-3" name="login" placeholder="password"/>
      <br />
      <button onClick={loginNow} type="button" class="btn btn-primary">Log in</button>
    </form>

   
    <div id="formFooter">
      {/* <a class="underlineHover" href="#">Forgot Password?</a> */}
    </div>

  </div>
</div>
    </div>
  )
}

export default Login