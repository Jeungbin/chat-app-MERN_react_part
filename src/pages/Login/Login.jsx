import "./login.css"

export default function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Chat App</h3>
                <span className="loginDesc">Connect with frineds and the world you on Chat App</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' type="Email" className="loginInput" />
                    <input placeholder='Password' type="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
