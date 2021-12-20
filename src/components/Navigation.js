import React from "react";
import { connect } from 'react-redux';

class Navigation extends React.Component{
    render() {
        const { authedUser, users } = this.props;
        return(
            <div className="nav">
                {console.log(users[authedUser])}
                <h3>Navbar</h3>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/add">Add Question</a></li>
                    <li><a href="/leaderboard">Leaderboard</a></li>
                    {authedUser &&
                     <li><p>Hi, <span>{users[authedUser].name}</span> <a href="/logout">Logout</a></p></li>}
                </ul>
            </div>
        )
    }
}


function mapStateToProps({ users, authedUser }) {
    return {
      authedUser,
      users
    }
  }
  
export default connect(mapStateToProps)(Navigation);