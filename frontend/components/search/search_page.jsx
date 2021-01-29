import React from 'react'
import SplashNavBar from '../navbar/splash_navbar'
import SearchPageNav from './search_page_nav'
import {Link} from 'react-router-dom'

class SearchPage extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
 
        this.props.searchRestaurants(this.props.search.keyword)

    }

    componentDidUpdate(prevProps) {

        if (this.props.search.keyword !== prevProps.search.keyword) {
   
            this.props.searchRestaurants(this.props.search.keyword)
        }

    }

    render() {
   
        
        const first = 0

        const resSearch = this.props.search

        if (typeof resSearch === "undefined"){
      
            return null
        }

        // const currentUser = this.props.currentUser.dining_city

        // if (typeof currentUser === "undefined") {

        //     return null
        // }
     
 
        const restaurants = this.props.restaurants.map(restaurant => 
            <div className="rests-main">
                <div className="sp-img">
                    <Link to={`/restaurants/${restaurant.id}`}><img src={restaurant.photoUrls[first]} /></Link>
                </div>
                <div className="sp-info">
                    <Link to={`/restaurants/${restaurant.id}`}><h2>{restaurant.name}</h2></Link>
                    <span>
                        <i className="fas fa-star fpst"></i>
                        <i className="fas fa-star fpst"></i>
                        <i className="fas fa-star fpst"></i>
                        <i className="fas fa-star fpst"></i>
                        <i className="fas fa-star-half fpstr"></i>
                        <i className="fas fa-star-half fpstl"></i>
                          <p>Awesome</p>
                    </span>
                    <div className="dols">
                      
                        {restaurant.price_range === "$$" ? <div className="dols-in"><span>$$</span><span className="g-dol">$$</span></div> : restaurant.price_range === "$$$" ? <div className="dols-in"><span>$$$</span><span className="g-dol">$</span></div> : <div className= "dols-in"><span>$$$$</span></div>}
                        <p>&bull; {restaurant.cuisine_type}</p>
                        <p>&bull; {restaurant.neighborhood}</p>
                    </div>
                    <div className="fp-book">
                        <p>Booked {Math.floor((Math.random() * 50))} times today</p>
                    </div>

                </div>
            </div>)

        const searchLength = this.props.restaurants.length === 1 ? " 1 restaurant" : `${this.props.restaurants.length} restaurants`

        return (
            <div>
                <SplashNavBar />
                <SearchPageNav  search={this.props.search} sendForm={this.props.sendForm} searchRestaurants={this.props.searchRestaurants} currentUser={this.props.currentUser} />
                <div className="sp-ctnt">
                    <div className="sp-ctnt-in">
                        <div className="sp-header">
                            <h2>
                                You searched for "{this.props.search.keyword}" in {!this.props.currentUser ? "New York" : this.props.currentUser.dining_city}
                            </h2>
                            <p>Search result for "{this.props.search.keyword}"</p>
                        </div>
                        {restaurants}
                    </div>

                </div>

            </div>
        )
    }
}

export default SearchPage
