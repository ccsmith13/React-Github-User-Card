import React from 'react';
import UserCard from './components/UserCard';
import './App.css';

class App extends React.Component {
  state = {
    username: "",
    avatarurl: "",
    publicrepos: 0,
    followers: 0,
    following: 0
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
      .catch(err => console.log("Unable to fetch data, error: ", err));
  }

  render() {
    return (
      <div>
        <h1>GitHub User Card Project</h1>
        <UserCard
          username={this.state.username}
          avatarurl={this.state.avatarurl}
          publicrepos={this.state.publicrepos}
          followers={this.state.followers}
          following={this.state.following}
        />
      </div>
    );
  }
};

export default App;
