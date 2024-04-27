import React, {useState} from 'react';
import axios from 'axios';
import PasswordChecklist from "react-password-checklist"
function Register(){

    const[name, setname] = useState('');
    const[username, setusername] = useState('');
    const[password, setpassword] = useState('');

    function register(event){
        event.preventDefault();
        alert("This is register method");

        var user = {
            name: name,
            username: username,
            password: password
        }

        axios.post('/api/user/registeruser', user).then(res=>{
            console.log(res);
            alert(res.data);
        }).catch(err=>{
            console.log(err);
        })
    }

    return(
        <div>
            <form onSubmit={register}>
                <h1>REGISTER</h1>
                <input type="text" placeholder="name" className="form-control" value={name} onChange={(e)=>{setname(e.target.value)}}/>
                <input type="text" placeholder="username" className="form-control" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
                <input type="password" placeholder="password" className="form-control" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

                <input type="submit" value="register" className="btn btn-primary"></input>
                <PasswordChecklist
				rules={["minLength","specialChar","number","capital","lowercase"]}
				minLength={6}
				value={password}
				
				
			/>
            </form>
        </div>
    )
}
export default Register;