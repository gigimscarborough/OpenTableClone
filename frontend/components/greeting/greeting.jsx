import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        
        if (this.props.currentUser) {
            
            return (
                <div>
                    <h1>Welcome, {this.props.currentUser.first_name}!</h1>
                    <button onClick={this.props.logout.bind(this)}>Log Out</button>
                </div>
            )
        } else {
            
            return (
                <div>
                    <button onClick={() => this.props.openModal('signup')}> Sign Up</button>
                    <button onClick={() => this.props.openModal('login')}> Log In </button>
                </div>
            )
        }

    }

}



export default Greeting;