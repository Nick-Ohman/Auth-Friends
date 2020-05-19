import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
 class Login extends React.Component {

    state={
        credentials:{
            username:'',
            password:''
        },
        isLoading:false
    };

    handleChange = e => {
        this.setState({
            credentials:{
                ...this.state.credentials,
                [e.target.name]: e.target.value
            },
            isLoading: true
        })
    }

        login = e =>{
            e.preventDefault();
            axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res=>{
                console.log(res.data.payload);
                localStorage.setItem("token", res.data.payload);
                this.props.history.push('/friends');
            })
            .catch(err => console.log(err))

        }

    
    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input
                    type="text"
                    id='username'
                    name="username"
                    placeholder='username'
                    value={this.state.credentials.username}
                    onChange={this.handleChange}
                    ></input>
                    <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    value={this.state.credentials.password}
                    onChange={this.handleChange}
                    ></input>
                    <button className="submit">Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login;
