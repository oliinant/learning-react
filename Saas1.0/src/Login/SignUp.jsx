import { InputLoginTemplate, ShowPasswordBtn, RememberMe } from "./LoginUtil";
import { useState } from "react";
import "./SignUp.css"
import "./LoginBase.css"
import { Link } from "react-router-dom";

function SignUp() {
    const [email, setEmail] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [focusedShowPassword, setFocusedShowPassword] = useState(false)



    return (
        <div className="sign-up-page">
            <div className="sign-up-elements">
                <h2>Sign up</h2>

                <form action="" className="sign-up-form">
                    <InputLoginTemplate
                        inputName="username-input"
                        type="text"
                        label="Username"
                    />

                    <InputLoginTemplate
                        inputName="email-input"
                        type="text"
                        label="Email"
                    />

                    <InputLoginTemplate
                        inputName="password-input"
                        type={showPassword ? "text" : "password"}
                        label="Password"
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

                    <button type="submit">Sign Up</button>
                </form>

                <Link to="/login" className="login-link">
                    Already have an account
                </Link>
            </div>
        </div>
    )
}

export default SignUp