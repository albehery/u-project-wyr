import React from "react";
import { connect } from "react-redux";

import { setAuthedUser } from '../actions/authedUser'

class Login extends React.Component {

    handleLogin = e => {
        e.preventDefault();
        const { setAuthedUser } = this.props;
        const authedUser = this.state.value;
        setAuthedUser(authedUser)
    }

    render() {
        console.log(this.props.users)
        return (
            <div className="login card">
                <h3>Login Component</h3>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps, { setAuthedUser })(Login)

