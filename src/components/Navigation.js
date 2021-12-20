import React from "react";
import { connect } from 'react-redux';

class Navigation extends React.Component{
    render() {
        const { authedUser } = this.props;
        return(
            <div className="nav">
                <h3>Navbar</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Add Question</a></li>
                    <li><a href="#">Leaderboard</a></li>
                    {authedUser?<li><a href="#">Logout</a></li>:<li><a href="#">not</a></li>}
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