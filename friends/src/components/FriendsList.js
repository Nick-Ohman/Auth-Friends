import React from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend'

class FriendsList extends React.Component{
    state={
      friends:[]
    }
    componentDidMount(){
      this.getFriends();
    }
    getFriends=()=>{
      axiosWithAuth()
      .get('/api/friends')
      .then(res=>{
        // console.log(res.data)
        this.setState({
          ...this.state.friends,
          friends: res.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
    }
    render(){
        return(
            <div className="friendslist">
                <h2>Friends Info</h2>         
                <Friend friends={this.state.friends} />
                
    
            </div>
        )
    }
    }
    
    export default FriendsList;