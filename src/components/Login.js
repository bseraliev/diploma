import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'

const Login = ({checkLogin}) => {
    const [loginInputValue, setLoginInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");


  return (
    <div style={{width:500, margin:'0 auto'}}>
        <form>
                <div class="form-outline mb-4">
            <input type="email" id="form2Example1"  class="form-control" value={loginInputValue} onChange={(e) => setLoginInputValue(e.target.value)}/>
            <label class="form-label" for="form2Example1">Email address</label>
        </div>

        <div class="form-outline mb-4">
            <input type="password" id="form2Example2" class="form-control" value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)}/>
            <label class="form-label" for="form2Example2">Password</label>
        </div>

        <div class="row mb-4">  
            <div class="col d-flex justify-content-center">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                <label class="form-check-label" for="form2Example31"> Remember me </label>
            </div>
            </div>

            <div class="col">
            <a href="#!">Forgot password?</a>
            </div>
        </div>

        <button type="button" class="btn btn-primary btn-block mb-4 w-100" onClick={() => checkLogin(loginInputValue, passwordInputValue)}>Sign in</button>

        <div class="text-center">
            <p>Not a member? <NavLink to="/register">Register</NavLink></p>
        </div>
        </form>
    </div>
  )
}

export default Login