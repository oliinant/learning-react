import eyeOn from "/src/assets/LoginAssets/showPasswordOn.png";
import eyeOff from "/src/assets/LoginAssets/showPasswordOff.png";
import { use, useState } from "react";

export const InputLoginTemplate = ({ inputName, type, label, focusedShowPassword=null, button=null}) => {
    const [valueChange, setValueChange] = useState("");
    const [inputFocused, setinputFocused] = useState(false);
    const condition = button ? (focusedShowPassword || inputFocused) :  inputFocused

    return (
        <div className={inputName}>
            <input
                id={inputName}
                type={type}
                value={valueChange}
                onFocus={() => { setinputFocused(true) }}
                onBlur={() => { setinputFocused(false) }}
                className={`${condition ? "input-login input-login-active" : "input-login"} ${valueChange ? "input-has-text" : "input-no-text"}`}
                onChange={(e) => setValueChange(e.target.value)}
                required
            />
            <label htmlFor={inputName}>{label}</label>
            <span>{label}</span>
            {button}
        </div>    
    );
};

export const ShowPasswordBtn = ({ setFocusedShowPassword, setShowPassword, showPassword }) => {

    return (
        <button
            tabIndex={0}
            type="button"
            className="show-password"
            onFocus={() => setFocusedShowPassword(true)}
            onBlur={() => setFocusedShowPassword(false)}
            onClick={() => { setShowPassword(prev => !prev) }}
        >
            <img
                src={showPassword ? eyeOn : eyeOff}
                alt={showPassword ? "Show password icon" : "Hide password icon"}
            />
        </button>
    )
}

export const RememberMe = () => {
    return (
        <div className="remember-me">
            <input
                type="checkbox"
                id="remember-me-con"
                name="remember-me"
            />
            <label htmlFor="remember-me-con">Remember me</label>
        </div>
    )
}
