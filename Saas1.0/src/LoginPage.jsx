import { useState } from "react";
import eyeOn from "./assets/Login/showPasswordOn.png";
import eyeOff from "./assets/Login/showPasswordOff.png";

function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-page">
            <h2>Login</h2>

            <form className="login-form">
                {/* Username*/}
                <div className="username-group">
                    <input
                        type="text"
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
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button
                        type="button"
                        onClick={() => { setShowPassword(prev => !prev) }}
                    >
                        <img
                            src={showPassword ? eyeOn : eyeOff}
                            alt={showPassword ? "Show password icon" : "Hide password icon"}
                        />
                    </button>
                </div>

                {/* Remeber Me */}
                <div className="remeber-me">
                    <input
                        type="checkbox"
                        className="remember-me"
                        id="remember-me"
                        name="remember-me"
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>

                <button type="submit">Login</button>
            </form>

            <a href="/sign-up" className="sign-up-link">
                Create account
            </a>
        </div>
    );
}

export default LoginPage;