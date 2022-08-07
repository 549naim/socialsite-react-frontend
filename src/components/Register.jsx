import React,{useState} from 'react'
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [username, setusername] = useState(null);
    const [password1, setpassword1] = useState(null);
    const [password2, setpassword2] = useState(null);
    const navigate=useNavigate()
    const registerNow= () => {
        if (password1===password2) {
            Axios ({
                method: 'POST',
                url: 'http://127.0.0.1:8000/register/',
                data: {
                    'username': username,
                    'password': password1,
                }
            }).then(response => {
                alert('user created Successfully')
                navigate("/login")
            })
        }
        else{
            alert('password dont match')
        }
    }


  return (
    <div>
        <div className="container">
    <div class="content-section">
        <fieldset class="form-group">
            <legend class="border-bottom mb-4">Register Now</legend>
            <div>
                <div class="form-group">
                    <label>Username</label>
                    <input onChange={(e)=>setusername(e.target.value)}  type="text" class="form-control" placeholder="Username" />
                </div>
                <div class="form-group">
                    <label >Password</label>
                    <input onChange={(e)=>setpassword1(e.target.value)} type="password" class="form-control" placeholder="Password" />
                </div>

                <div class="form-group">
                    <label>Confirm Password</label>
                    <input onChange={(e)=>setpassword2(e.target.value)} type="password"  class="form-control" placeholder="password" />
                </div>
            </div>
        </fieldset>
        <br />
        <div class="form-group">
            <p onClick={registerNow} class="btn btn-outline-info">Register</p>
        </div>
        <div class="border-top pt-3">
            <small class="text-muted">
                Have An Account?
                            {/* <Link class="ml-2" to="/">SignIn In Now</Link> */}
            </small>
        </div>
    </div>
</div >
Footer
© 2022 GitHub, Inc.
    </div>
  )
}

export default Register