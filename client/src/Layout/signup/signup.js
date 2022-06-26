import React, { Fragment,useState } from 'react';
import "./app.css";
import { Link } from 'react-router-dom';
// import login from '../login/login';

import axios from 'axios';


function Registration() {

    const [ename, setEmpName] = useState("");
    const [eemail, setEmpEmail] = useState("");;
    const [emobile, setEmpmobile] = useState("");
    const [edob, setEmpDOB] = useState("");;
    const [epass, setEmpPass] = useState("");
   
    const [msg, setMessage] = useState("");;

    const onChangeEmpName = (e) => setEmpName(e.target.value);
    const onChangeEmpEmail = (e) => setEmpEmail(e.target.value);
    const onChangeEmpMobile = (e) => setEmpmobile(e.target.value);
    const onChangeEmpDOB = (e) => setEmpDOB(e.target.value);
    const onChangeEmpPass = (e) => setEmpPass(e.target.value);
    
    

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Form submitted:`);
        console.log(`NAME: ${ename}`);
        console.log(`EMAIL: ${eemail}`);

        const empinfo = {
            empname: ename,
            empemail: eemail,
            empmobile: emobile,
            empdob: edob,
            emppass: epass,
          
        }

        axios.post('http://localhost:27017/logindetails', empinfo)
            .then(res => {
                console.log(res.data)
                setMessage('REGISTRATION SUCCESSFUL')
            });

        setEmpName('')
        setEmpEmail('')
        setEmpmobile('')
        setEmpDOB('')
        setEmpPass('')


    }

    return (
          <div>
            <br/>
            <div class="wrapper">
            <div class="form-wrapper">
            <h1 style={{color:"white"}}>Registration Form</h1>
            <h4 style={{ color: "brown" }}> {msg}</h4>
            <form onSubmit={handleSubmit}>
                <input type="text" value={ename}
                className="firstName"
                    onChange={onChangeEmpName} placeholder="Enter Name"
                    required />
                <br /><br />

                <input type="email" value={eemail}
                
                    onChange={onChangeEmpEmail} placeholder="Enter Email"
                    required />
                <br /><br />

                <input type="number" value={emobile}
                
                    onChange={onChangeEmpMobile} placeholder="Enter Mobile No"
                    required />
                <br /><br />

                <input type="date" value={edob}
                    onChange={onChangeEmpDOB}
                    placeholder="Enter date of birth" />
                <br /><br />

                <input type="password" value={epass}
                    onChange={onChangeEmpPass} placeholder="Enter Password"
                    required />
                <br /><br />
                {/* <label className='gender'>
                Gender:
                <br/>
                <input type="radio" name="gender" value="MALE"
                    checked={egender === 'MALE'}
                    onChange={onChangeEmpGender} />
                <label className='gender1'>Male</label>
                <input type="radio" name="gender" value="FEMALE"
                    checked={egender === 'FEMALE'}
                    onChange={onChangeEmpGender} />
                <label className='gender1'>Female</label>
                </label>
                <br /><br /> */}
                <input type="submit" value="REGISTER"
                className="createAccount button"/>


                  <Link to="/login" className="NavBar-Link">Already have an account? LogIn </Link>


            </form>
            </div>
            </div>
        </div>
      
    )
}


export default Registration;
