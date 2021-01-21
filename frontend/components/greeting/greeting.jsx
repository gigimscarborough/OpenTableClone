import React from 'react'
import { Link } from 'react-router-dom'

class Greeting extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        
        if (this.props.currentUser) {
            
            return (
                    <div className="logged-links">
                        <Link onClick={this.props.logout.bind(this)}><i class="far fa-user-circle"></i></Link>
                        <Link><i class="far fa-calendar"></i></Link>
                        <Link><i class="far fa-bell"></i></Link>
                        <Link className="search-icon lsearch" to="/"><img src={window.search_icon} /></Link>
                        {/* <h1>Welcome, {this.props.currentUser.first_name}!</h1>
                        <button onClick={this.props.logout.bind(this)}>Log Out</button> */}
                    </div>
            )
        } else {
            
            return (
                    <div className="not-logged-links">
                        <button className="sign-up-btn" onClick={() => this.props.openModal('signup')}> Sign up</button>
                        <button className="log-in-btn" onClick={() => this.props.openModal('login')}> Sign in </button>
                        <Link className="search-icon" to="/"><img src={window.search_icon} /></Link>
                    </div>
            )
        }

    }

}



export default Greeting;