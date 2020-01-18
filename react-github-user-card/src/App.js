import React from 'react';
import UserCard from './components/UserCard';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  padding-top: 8%;
  padding-bottom: 4%;
  font-family: 'Jura', sans-serif;
`;
const AppContainer = styled.div`
  background: #2C0735;
  color: white;
`;

class App extends React.Component {
  state = {
    username: "",
    avatarurl: "",
    publicrepos: 0,
    followers: 0,
    following: 0,
    followerdata: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/ccsmith13")
      .then(res => res.json())
      .then(user => {
        console.log("fetched user data ", user);
        this.setState({
          ...this.state,
          username: user.login,
          avatarurl: user.avatar_url,
          publicrepos: user.public_repos,
          followers: user.followers,
          following: user.following
        });
      })
      .catch(err => console.log("Unable to fetch user data, error: ", err));

    fetch("https://api.github.com/users/ccsmith13/followers")
      .then(res => res.json())
      .then(userfollower => {
        console.log("fetched follower data", userfollower);
        this.setState({ followerdata: userfollower })
      })
      .catch(err => console.log("Unable to fetch follower data, error: ", err))
  }

  render() {
    return (
      <AppContainer>
        <Title>GitHub User Card</Title>
        <UserCard
          username={this.state.username}
          avatarurl={this.state.avatarurl}
          publicrepos={this.state.publicrepos}
          followers={this.state.followers}
          following={this.state.following}
          followerdata={this.state.followerdata}
        />
      </AppContainer>
    );
  }
};

export default App;
