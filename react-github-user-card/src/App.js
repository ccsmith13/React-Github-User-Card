import React from 'react';
import UserCard from './components/UserCard';
import styled from "styled-components";

const Title = styled.h1`
  font-size: 3.5rem;
  text-align: center;
  padding-top: 8%;
  font-family: 'Jura', sans-serif;
`;
const AppContainer = styled.div`
  background: #2C0735;
  color: white;
`;
const SearchBarContainer = styled.div`
  width: 25%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-family: 'Jura', sans-serif;
  padding-bottom: 4%;
`;

class App extends React.Component {
  state = {
    username: "",
    avatarurl: "",
    publicrepos: 0,
    followers: 0,
    following: 0,
    followerdata: [],
    newUsername: ""
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/ccsmith13`)
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

    fetch(`https://api.github.com/users/ccsmith13/followers`)
      .then(res => res.json())
      .then(userfollower => {
        console.log("fetched follower data", userfollower);
        this.setState({ followerdata: userfollower })
      })
      .catch(err => console.log("Unable to fetch follower data, error: ", err))
  }

  handleUserTextChange = e => {
    this.setState({ newUsername: e.target.value });
  };
  handleUserFetch = e => {
    e.preventDefault();
    //update user data
    fetch(`https://api.github.com/users/${this.state.newUsername}`)
      .then(res => res.json())
      .then(user => {
        console.log("searched user data: ", user);
        if (user.status !== "error") {
          this.setState({
            ...this.state,
            username: user.login,
            avatarurl: user.avatar_url,
            publicrepos: user.public_repos,
            followers: user.followers,
            following: user.following
          });
        }
      })
      .catch(err => console.log("Unable to find github user, error:", err));
    //update follower data
    fetch(`https://api.github.com/users/${this.state.newUsername}/followers`)
      .then(res => res.json())
      .then(userfollower => {
        console.log("fetched follower data", userfollower);
        this.setState({ followerdata: userfollower })
      })
      .catch(err => console.log("Unable to fetch follower data, error: ", err))

  };

  render() {
    console.log("current state when entering render", this.state);
    return (
      <AppContainer>
        <Title>GitHub User Card Project</Title>
        <SearchBarContainer>
          <h3> Search for a User: </h3>
          <form>
            <input
              type="text"
              value={this.state.newUsername}
              onChange={this.handleUserTextChange}
            />
          </form>
          <button onClick={this.handleUserFetch} >Go!</button>
        </SearchBarContainer>
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
