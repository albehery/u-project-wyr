import React from "react";
import { connect } from "react-redux";

import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {

    handleLogin = (e) => {
        e.preventDefault()
        const userID = this.userID.value;
        const { dispatch } = this.props;
        if (userID !== '') {
            dispatch(setAuthedUser(userID))
        }
    }


    render() {
        const { users } = this.props;
        return (
            <div className="login card">
                <h3>Login Component</h3>
                <form onSubmit={this.handleLogin}>
                    <select ref={(id) => (this.userID = id)}>
                        <option value="" disabled>Select name to login</option>
                        {users.map((user) =>
                            <option key={user.id} value={user.id}>{user.name}</option>
                        )}
                    </select>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(Login)

