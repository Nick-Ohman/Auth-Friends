import React, {useState, useEffect} from "react";
import {axiosWithAuth} from '../utils/axiosWithAuth';

function AddFriendForm(props){
const [newFriend, setNewFriend] = useState({
    name: "",
    age: "",
    email: ""
})

    const handleChange = e => {
        e.preventDefault();
        setNewFriend({...newFriend, [e.target.name]:e.target.value})
    }
    const addNewFriend = e => {
        axiosWithAuth()
        .post('/api/friends', newFriend)
        .then(res => {
            console.log(res)
        })
        .catch(err =>{
            console.log(err)
        })       
    }



  
        return(
            <div className="addFriend">
                <form className="addFriend" onSubmit={addNewFriend}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="name"
                        value={newFriend.name}
                        onChange={handleChange}
                    />
                    <label htmlFor="age">Age:</label>
                    <input 
                        type="text"
                        id="age"
                        name="age"
                        placeholder="age"
                        value={newFriend.age}
                        onChange={handleChange}
                    />
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email"
                        value={newFriend.email}
                        onChange={handleChange}
                    />
                    <button>Add</button>
                </form>
            </div>
        )

    }

export default AddFriendForm;