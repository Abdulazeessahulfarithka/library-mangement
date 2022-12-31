import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState(null);
  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };
  const handleClick = () => {
    if (input === null) {
      alert("Please Enter Email and Password");
    } else {
      navigate("/home");
    }
  };
  return (
    <div class="box-form">
      <div class="left">
        <div class="overlay">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et est sed felis aliquet sollicitudin
          </p>
          <span>
            <p>login with social media</p>
            <a href="#">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter" aria-hidden="true"></i> Login with
              Twitter
            </a>
          </span>
        </div>
      </div>

      <div class="right">
        <h5>Login</h5>

        <div class="inputs">
          <input type="text" placeholder="user name" onChange={handleChange} />
          <br />
          <input
            type="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>

        <br />

        <div class="remember-me--forget-password">
          {/* <label>
            <input type="checkbox" name="item" checked />
          </label> */}
          <p>forget password?</p>
        </div>

        <br />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
