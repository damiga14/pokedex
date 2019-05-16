import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class PageButton extends Component{
    render(){
        return(
            <button type='button'><Link to = {`/Gen/${this.props.gen}`}>Gen {this.props.gen}</Link></button>
        )
    }
}


export default PageButton