import React, {Component} from 'react'
import './CardsStyles.css'

class Card extends Component{
    render(){
        return(
            <div className="cards">

                <p>{this.props.PokedexNo}</p>
                <p>{this.props.PokemonName}</p>
                
                <p>Sprite</p>
            </div>
        )
    }
}


export default Card