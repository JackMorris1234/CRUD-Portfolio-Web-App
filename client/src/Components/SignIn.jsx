
import { useState } from 'react'
import Button from './Button'
import loginService from './BackendCommunication/LoginBackend'
import projectService from './BackendCommunication/ProjectsBackend'
import './SignIn.css'

const SignIn = ({ toggleSignIn, setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async event => {
        event.preventDefault()

        try {
            const user = await loginService.login({ username, password })
            setUser(user)

            window.localStorage.setItem(
                'ProjectUser', JSON.stringify(user)
            )

            projectService.setToken(user.token)
            setUsername('')
            setPassword('')
            toggleSignIn()
        } catch (error) {
            console.log('sign in component error', error)
        }
    }

    return (
        <form className="SignInForm" onSubmit={handleLogin}>
            <h2 className="SignInTitle">Welcome Back</h2>

            <label className="SignInLabel">
                Username
                <input
                    className="SignInInput"
                    type="text"
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                    autoComplete="username"
                    required
                />
            </label>

            <label className="SignInLabel">
                Password
                <input
                    className="SignInInput"
                    type="password"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                    autoComplete="current-password"
                    required
                />
            </label>

            <div className="SignInActions">
                <button className="SignInSubmit" type="submit">
                    Login
                </button>

                <div className="SignInCancel">
                    <Button
                        text="Cancel"
                        handleClick={toggleSignIn}
                    />
                </div>
            </div>
        </form>
    )
}

export default SignIn
