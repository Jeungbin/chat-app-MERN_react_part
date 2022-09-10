import "./register.css"

export default function Register() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Chat App</h3>
                <span className="loginDesc">Connect with frineds and the world you on Chat App</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='UserName' className="loginInput" />
                    <input placeholder='Email'  type="Email" className="loginInput" />
                    <input placeholder='Password'  type="Password" className="loginInput" />
                    <input placeholder='Password Again'  type="Password" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">
                        Log Into Accout
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
