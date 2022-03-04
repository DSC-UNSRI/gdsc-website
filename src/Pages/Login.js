function Login(props) {
    return (
        <div>
            <div>
                <h1>Log in to your account 🔐</h1>

                <form>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' placeholder='Your Email'/>
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' placeholder='Your Password'/>
                    </div>
                    <div>
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;