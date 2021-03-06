import React from 'react'
import GreetingContainer from '../greeting/greeting_container'

class MainNavBar extends React.Component {
    render() {
        return (

            <div className="top-nav">
                <ul className="nav-link-list">
                    <li>
                        <a href="https://github.com/gigimscarborough">GitHub</a>
                        <a href="https://linkedin.com/in/gigimscarborough">LinkedIn</a>
                        <a href="https://angel.co/u/gigi-scarborough">AngelList</a>
                        <a href="https://gigiscarborough.com">Portfolio</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default MainNavBar