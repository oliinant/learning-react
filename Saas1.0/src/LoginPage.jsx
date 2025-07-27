import { useState } from "react";
import eyeOn from "./assets/Login/showPasswordOn.png";
import eyeOff from "./assets/Login/showPasswordOff.png";
import "./LoginPage.css"

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-page">
            <div className="login-elements">
                <h2 className="login-title">Login</h2>

                <form className="login-form">
                    {/* Username*/}
                    <div className="username-group">
                        <input
                            type="text"
                            className="input-login"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="password-group">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input-login"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className="show-password"
                            onClick={() => { setShowPassword(prev => !prev) }}
                        >
                            <img
                                src={showPassword ? eyeOn : eyeOff}
                                alt={showPassword ? "Show password icon" : "Hide password icon"}
                            />
                        </button>
                    </div>

                    {/* Remeber Me */}
                    <div className="remember-me">
                        <input
                            type="checkbox"
                            id="remember-me-con"
                            name="remember-me"
                        />
                        <label htmlFor="remember-me-con">Remember me</label>
                    </div>

                    <button type="submit" id="login-btn">Login</button>
                </form>

                <a href="/sign-up" className="sign-up-link">
                    Create account
                </a>
            </div>
        </div>
    );
}

export default LoginPage;