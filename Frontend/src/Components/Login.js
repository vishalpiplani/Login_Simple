import { useState } from "react";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function Login() {
    const navigate = useNavigate();
    const [fields, setFields] = useState("");

    const changeHandle = (e) => {
        const { name, value } = e.target;
        setFields({
            ...fields,
            [name]: value,
        });
    };

    const submitHandle = (e) => {
		e.preventDefault();
		console.log(fields)
        if (fields.email == '' || fields.email == undefined) {
			toast.error("Please enter correct email id.");
			return false;
		}

		if (fields.password == '' || fields.password == undefined) {
			toast.error("Please enter your password");
			return false;
		}
		axios.post('login', fields).then((res) => {
			setFields("");
			console.log(res.data);	
			toast.success(res.data.message);
			localStorage.setItem('user', JSON.stringify(res.data.data));
			localStorage.setItem('token', JSON.stringify(res.data.token));
			navigate('/admin');
			window.location.reload();
		}).catch((error) => {
			toast.error(error.response.data.message);
		})
	}

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={submitHandle}>
                <label>
                    <p>Username</p>
                    <input type="TEXT" onChange={changeHandle} name="email" value={fields.email} className="form-control" autoComplete="off" placeholder="Email" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={changeHandle} name="password" value={fields.password} className="form-control" autoComplete="off" placeholder="Password" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login;
