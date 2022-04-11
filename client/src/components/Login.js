import React, { Fragment } from 'react';
import { useRef, useState, useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");
    const [pwd, setPwd] = useState("");
    const [errMsg, setErrMsg] = useState("");

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('http:localhost:5000/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true,
                body: JSON.stringify(response)
            })

            console.log(response);
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            navigate(from, {replace: true});
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <p ref={errRef} className={errMsg ? "errMsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={e => setUser(e.target.value)}
                    value={user}
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={e => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button type="button" className="btn btn-success">Sign In</button>
            </form>
            <p>
                Need an Account? <br />
                <span className="line">
                    <Link to="/register">Sign Up</Link>
                </span>
            </p>
        </Fragment>
    )
}

export default Login;