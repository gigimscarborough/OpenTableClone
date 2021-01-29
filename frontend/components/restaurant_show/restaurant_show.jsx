import React from 'react'
import RestaurantShowNavBar from '../navbar/restaurant_show_navbar'
import Modal from '../modal'
import RestaurantShowContent from './restaurant_show_content'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)

      
    }

    componentDidMount(){
        
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
        
        window.scrollTo(0,0)
    
  }

    render(){
      
        return(
            <div className="show-tl">
 
            <Modal/>
            <RestaurantShowNavBar restaurant={this.props.restaurant} openModal={this.props.openModal} logout={this.props.logout} currentUser={this.props.currentUser}/>
                <RestaurantShowContent search={this.props.search} restaurant={this.props.restaurant}/>
            </div>

        )
    }
}

export default RestaurantShow