import React from 'react'
import FriendCard from './FriendCard'

function Friend(props) {
    console.log(props,"this is props")
    return (
        <div>
            {props.friends.map((item) => {
                return(
                    <FriendCard  key={item.id} name={item.name} age={item.age} email={item.email}/>
                )
            })}
        </div>
    )
}
export default Friend