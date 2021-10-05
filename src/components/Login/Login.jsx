import React from 'react';
import './index.css';

const Login = () => (

    <form className="login">

        <label htmlFor="user-id">USER ID</label>
        <input type="email"/>

        <label htmlFor="user-id">PASSWORD</label>
        <input type="password"/>

        <div>
            <button>RESET</button>
            <button>LOG IN</button>
        </div>

    </form>

);

export default Login;