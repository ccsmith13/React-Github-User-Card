import React from "react";
import styled from "styled-components";

const UserProfilePic = styled.img`
    width: 25%;
    border: 20px solid #4E148C;
    border-radius: 500px;
    margin: 2%;
`;
const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-bottom: 10%;
    font-family: 'Jura', sans-serif;
`;
const UserDataContainer = styled.div`
    margin-left: 4%;
`;
const FollowerTitle = styled.h2`
    font-size: 2.5rem;
    text-align: center;
    padding-bottom: 8%;
    font-family: 'Jura', sans-serif;
`;
const FollowerCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const FollowerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Jura', sans-serif;
`;
const FollowerProfilePic = styled.img`
    border: 6px solid #858AE3;
    border-radius: 500px;
    width: 100px;
    height: 100px;
    margin: 2%;
`;
const FollowerWrapper = styled.div`
    background-color: #613DC1;
    padding-top: 4%;
    padding-bottom: 8%;
    margin-bottom: 2%;
`;

function UserCard(props) {
    return (
        <div>
            <UserContainer>
                <UserProfilePic src={props.avatarurl} alt={props.username} />
                <UserDataContainer>
                    <h2>{props.username}</h2>
                    <p>Number of Public Repos: {props.publicrepos}</p>
                    <p>Followers: {props.followers}</p>
                    <p>Following: {props.following}</p>

                </UserDataContainer>
            </UserContainer>
            <FollowerWrapper>
                <FollowerTitle> {props.username}'s Followers</FollowerTitle>
                <FollowerContainer>
                    {props.followerdata.map(follower => {
                        return (
                            <FollowerCard key={follower.id}>
                                <FollowerProfilePic src={follower.avatar_url} alt={follower.login} />
                                <h2>{follower.login}</h2>
                            </FollowerCard>
                        )
                    })}
                </FollowerContainer>
            </FollowerWrapper>
        </div>
    )
}

export default UserCard