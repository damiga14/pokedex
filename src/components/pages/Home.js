import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import PageButton from '../PageButton'

class Home extends Component{
    state={
        generaciones:[]
    }

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/region')
            .then(res => {this.setState({generaciones: res.data.results})})
            .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <Header/>

                <h1>Pokédex</h1>

                <div>
                    {this.state.generaciones.map(a=>
                        <PageButton 
                            key = {a.name}
                            gen = {a.url.slice(a.url.length-2, a.url.length-1)}
                        />
                    )}
                </div>
                
                <Footer/>
            </div>
        )
    }
}

export default Home