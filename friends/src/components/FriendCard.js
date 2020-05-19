import React from 'react'

function FriendCard(props) {
    return (
        <div className='friends'>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            <p>{props.age}</p>
        
            
        </div>
    )
}
export default FriendCard;