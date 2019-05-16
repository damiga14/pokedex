import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'

class Gen7 extends Component{
    render(){
        return(
            <div>
                <Header/>

                <button type="button"><Link to = "./Gen2"> Gen 2 </Link></button>
                <button type="button"><Link to = "./Gen3"> Gen 3 </Link></button>
                <button type="button"><Link to = "./Gen4"> Gen 4 </Link></button>
                <button type="button"><Link to = "./Gen5"> Gen 5 </Link></button>
                <button type="button"><Link to = "./Gen6"> Gen 6 </Link></button>
                <button type="button"><Link to = "./Gen7"> Gen 7 </Link></button>

                <h1>Gen 1</h1>

                <Footer/>
            </div>
        )
    }
}

export default Gen7