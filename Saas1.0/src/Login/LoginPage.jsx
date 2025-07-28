import { InputLoginTemplate, ShowPasswordBtn, RememberMe } from "./LoginUtil";
import { useState } from "react";
import "./LoginPage.css"
import "./LoginBase.css"
import { Link } from "react-router-dom";


function LoginPage() {
    const [showPassword, setShowPassword] = useState(false)
    const [focusedShowPassword, setFocusedShowPassword] = useState(false)

    return (
        <div className="login-page">
            <div className="login-elements">
                <h2 className="login-title">Login</h2>

                <form className="login-form">
                    <InputLoginTemplate
                        inputName="username-input"
                        type="text"
                        placeholder="Username"
                    />

                    <InputLoginTemplate
                        inputName="password-input"
                        type={showPassword ? "text" : "password"}
                        placeholder="password"
                        focusedShowPassword={focusedShowPassword}
                        button={
                            <ShowPasswordBtn
                                setFocusedShowPassword={setFocusedShowPassword}
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        }
                    />

                    <RememberMe />

                    <button type="submit" id="login-btn">Login</button>
                </form>

                <Link to="/login/sign-up" className="sign-up-link">
                    Create an account
                </Link>
            </div>
        </div>
    );
}


export default LoginPage;