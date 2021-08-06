function Login() {
    return (
        <div className="main-container">
                <div className="main-contents">
                    <div className="header">
                        <h1 id="login">Login</h1>
                        <p id="p_notice">Please sign into your account.</p>
                    </div>
                    <br></br>
                    <form>
                        <div className="email__input">
                            <input type="text" name="email" id="floatingInput" required></input>
                        </div>
                        <br></br>
                        <div className="password__input">
                            <input type="password" name="password" id="floatingInput" required></input>
                        </div>
                        <br></br>
                        <div className="submit__btn">
                            <button type="submit" id="submit__btn">Login</button>
                        </div>
                    </form>
                    {/* <Link to="/register">
                        <p>New User? Create an Account Here</p>
                    </Link> */}
                </div>
            </div>
    )
}

export default Login;