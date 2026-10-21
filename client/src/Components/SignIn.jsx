import {useState} from 'react'
import Button from './Button'
import loginService from './BackendCommunication/LoginBackend'
import projectService from './BackendCommunication/ProjectsBackend'

const SignIn=({toggleSignIn, setUser})=>{
    const [username, setUsername]=useState('')
    const [password, setPassword]=useState('')

    const handleLogin=async event => {
        event.preventDefault()
        try{
            const user=await loginService.login({username, password})
            setUser(user)
            window.localStorage.setItem(
              'ProjectUser', JSON.stringify(user)
            )
            projectService.setToken(user.token)
            setUsername('')
            setPassword('')
            console.log('user is: ', user)
            toggleSignIn()
        }catch(error){
            console.log('sign in component error', error)
        }
    }


    return(
        <form onSubmit={handleLogin}>
            <label>
                Username: 
                <input
                    type='text'
                    value={username}
                    onChange={({target})=>setUsername(target.value)}
                />
            </label>
            <label>
                Password: 
                <input 
                    type='text'
                    value={password}
                    onChange={({target})=>setPassword(target.value)}/>
            </label>
            <button type="submit">login</button>
            <Button text='Cancel' handleClick={toggleSignIn}/>
        </form>
    )
}
export default SignIn