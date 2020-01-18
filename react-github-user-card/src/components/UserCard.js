import React from "react";

function UserCard(props) {
    return (
        <div>
            <img src={props.avatarurl} alt={props.username} />
            <h2>{props.username}</h2>
            <p>Number of Public Repos: {props.publicrepos}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
        </div>
    )

}

export default UserCard