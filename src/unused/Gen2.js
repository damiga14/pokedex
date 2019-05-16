import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Cards from '../Cards'

var termino = "no"

class Gen2 extends Component{
    state ={
        datos:[]
    } 

    componentDidMount(){
        axios.get('https://pokeapi.co/api/v2/generation/2')
            .then(res => {            
                let reves = this.voltea(res.data.pokemon_species)

                this.setState({datos: reves})
            })
            .catch(err => console.log(err))   
    }

    voltea(array)
    {
        let arrayNuevo = []
        let i = array.length -1
        
        for(i; i>=0; i--)
        {
            arrayNuevo.push(array[i])
        }

        termino = "ya"

        return arrayNuevo
    }

    render(){
        if(termino == "ya")
        {
            return(
                <div>
                    <Header/>
    
                    <button type='button'><Link to = './Gen1'> Gen 1 </Link></button>
                    <button type="button"><Link to = "./Gen3"> Gen 3 </Link></button>
                    <button type="button"><Link to = "./Gen4"> Gen 4 </Link></button>
                    <button type="button"><Link to = "./Gen5"> Gen 5 </Link></button>
                    <button type="button"><Link to = "./Gen6"> Gen 6 </Link></button>
                    <button type="button"><Link to = "./Gen7"> Gen 7 </Link></button>
                    <h1>Gen 2</h1>

                    {/* {console.log(this.state.datos[4].name)} */}
        
                    {this.state.datos.map(a=>


                            <Cards 
                                key = {a.name}
                                PokemonName = {a.name} 
                                PokedexNo = {10}
                            />
                            
                            )}
    
                    <Footer/>
                </div>
            )
        }

        else
        {
            return(
                <div>
                    <p>Loading...</p>
                </div>
            )
        }
    }
}


export default Gen2