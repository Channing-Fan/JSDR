import { useState } from "react";
import { registerNewUser, signInWithEmail } from "../../firebase";

import Loader from "react-loaders";
import "./login.scss";

const Login = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    function updateEmail(event) {
        setEmail(event.target.value);
        console.log(email);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
        console.log(password);
    }

    function registerUser(event) {
        event.preventDefault(); 
        console.log(email, password);
        registerNewUser(email, password);
    }

    function logUserIn(event) {
        event.preventDefault();
        console.log(email, password);
        signInWithEmail(email, password);
    }

    return (
        <>
            <Loader type="line-scale" color="#fed002" width={500} />
            <div className="login-form">
                <div className="form-container">
                    <h2 className="login-title">Login</h2>
                    <form className="form">
                        <div className="input-container">
                            <input
                                className="input-mail"
                                type="text"
                                placeholder="Email"
                                onChange={updateEmail}
                            />
                            <input
                                className="input-password"
                                type="password"
                                placeholder="Password"
                                onChange={updatePassword}
                            />
                        </div>
                        <input
                            className="input-submit"
                            type="submit"
                            value="Submit"
                            onClick={logUserIn}
                        />
                    </form>
                </div>
            </div>
            <br />
            <br />
            {/* <div className="register-form">
				<h2>Register</h2>
				<form>
					<input type="text" placeholder="Email" onChange={updateEmail} />
					<br />
					<input
						type="password"
						placeholder="Password"
						onChange={updatePassword}
					/>
					<br />
					<input type="submit" value="Submit" onClick={registerUser} />
				</form>
			</div> */}
        </>
    );
};

export default Login;
