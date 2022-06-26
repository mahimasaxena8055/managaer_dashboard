import React, { useState } from 'react'
import axios from 'axios';
import "./app.css";


function Login(props) {
  const [uemail, setUserEmail] = useState("");
  const [upass, setUserPass] = useState("");;
  const [msg, setMessage] = useState("");;

  const onChangeUserEmail = (e) => setUserEmail(e.target.value);
  const onChangeUserPass = (e) => setUserPass(e.target.value);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    console.log(`EMAIL: ${uemail}`);
    console.log(`PASS: ${upass}`);

    const userlogininfo = {
      email: uemail,
      password: upass
    }

    axios.post('http://localhost:27017/logindetails', userlogininfo)
      .then(res => {
        console.log(res.data)
        console.log(res.data[0].email)
        console.log(res.data[0].name)
        sessionStorage.setItem("Key_Veriable", 'USER')
        sessionStorage.setItem("useremail", res.data[0].email)
        sessionStorage.setItem("username", res.data[0].name)
        // props.history.push('/userafterlogin')
      })
      .catch(err => {
        console.log(err)
        setMessage('Invalid Credentials')
      })

    setUserEmail('')
    setUserPass('')
  }

  return (
    <div>
      
      <br />
      <div class="wrapper">
      <div class="form-wrapper">
      <h1 >USER LOGIN</h1>
      <b style={{ color: "red" }}> {msg} </b>
      <form onSubmit={handleSubmit}>
        <input type="email" value={uemail}
          onChange={onChangeUserEmail}
          placeholder="Enter Email"
          required />
        <br /><br />

        <input type="password" value={upass}
          placeholder="Enter Password"
          onChange={onChangeUserPass}
          required />
        <br /><br />
        <input type="submit" value="LOGIN" className="btn btn-success" />
      </form>
      </div>
      </div>
    </div>
  )
}

export default Login
