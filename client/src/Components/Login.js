// React Imports
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import style from "../Stylesheets/Login.module.css";

// Component Imports
import Header from "./Header";



function Login({ database, user, onLogin, profile, setProfile, userRoute, setRoute }) {
    const [logUsername , setLogUsername] = useState("");
    const [logPassword , setLogPassword] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isLogging, setIsLogging] = useState(false);
    const [isCreating, setIsCreating] = useState(false);

    function handleSignup(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    onLogin(user);
                    refreshPage(user);
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
        setUsername("");
        setPassword("");
        setPasswordConfirmation("");
        // window.location.reload();
    }

    function handleLogin(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: logUsername, password: logPassword}),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    onLogin(user);
                    refreshPage(user);
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function forceLog() {
        if (!isLogging) {
            setIsCreating(false);
        }
        setIsLogging(!isLogging);
    }

    function forceCreate() {
        if (!isCreating) {
            setIsLogging(false);
        }
        setIsCreating(!isCreating);
    }

    function refreshPage(thing) {
        if(thing !== undefined) {
            window.location.reload()
        }else {
            console.log("Error")
        };

    };



    return (
        <div id={style.LoginAll}>
            {/* <Header database={database} user={user} profile={profile} setProfile={setProfile} /> */}
            <h1>Login or Signup</h1>
            <div id={style.bootons}>
                <button onClick={() => forceLog()}>Signin</button>
                <button onClick={() => forceCreate()}>Signup</button>
            </div>
            <br/>
            <div>
                {isLogging ? (
                    <div id={style.LoginForm}>
                        <form onSubmit={handleLogin}>
                            <input 
                                type="text"
                                id="username"
                                autoComplete="off"
                                value={logUsername}
                                placeholder="Username"
                                onChange={(e) => setLogUsername(e.target.value)}
                            />
                            <br/>
                            <input 
                                type="password"
                                id="password"
                                value={logPassword}
                                placeholder="Password"
                                onChange={(e) => setLogPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <br/>
                            <br/>
                            <button type="submit">{isLoading ? "Processing..." : "Sign In"}</button>
                        </form>
                    </div>
                ) : null}

                {isCreating ? (
                    <div id={style.SignupForm}>
                        <form onSubmit={handleSignup}>
                            <input
                                type="text"
                                id="username"
                                autoComplete="off"
                                value={username}
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                            <br/>
                            <input 
                                type="password"
                                id="password"
                                value={password}
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                autoComplete="current-password"
                            />
                            <br/>
                            <input 
                                type="password"
                                id="password_confirmation"
                                value={passwordConfirmation}
                                placeholder="Confirm Password"
                                onChange={(e) => setPasswordConfirmation(e.target.value)}
                                autoComplete="current-password"
                            />
                            <br/>
                            <br/>
                            <button type="submit">{isLoading ? "Processing..." : "Sign Up"}</button>
                            {errors.map((err) => (
                                <p key={err}>{err}</p>
                            ))}
                        </form>
                    </div>
                ) : null}

                { user ? 
                <Navigate to={userRoute} /> : null}
                <br/>
            </div>
        </div>
    );
}

export default Login;