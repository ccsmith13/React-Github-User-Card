import React from "react";

function UserCard(props) {
    return (
        <div>
            <img src={props.avatarurl} alt={props.username} />
            <h2>{props.username}</h2>
            <p>Number of Public Repos: {props.publicrepos}</p>
            <p>Followers: {props.followers}</p>
            <p>Following: {props.following}</p>
            <h2> {props.username}'s Followers</h2>

            <div>
                {props.followerdata.map(follower => {
                    return (
                        <div key={follower.id}>
                            <img src={follower.avatar_url} alt={follower.login} />
                            <h2>{follower.login}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default UserCard