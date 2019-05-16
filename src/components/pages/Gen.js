import React, {Component} from 'react'
// import {Link} from 'react-router-dom'
import axios from 'axios'

import Header from '../layout/Header'
import Footer from '../layout/Footer'
import PageButton from '../PageButton'
import Cards from '../Cards'

var termino = "no"

class Gen extends Component{
    state ={
        datos:[],
        generaciones:[],
        dexNumber:[]
    } 

    componentDidMount(){
        axios.get(`https://pokeapi.co/api/v2/generation/${this.props.match.params.id}`)
            .then(res => {            
                let reves = this.voltea(res.data.pokemon_species)

                this.setState({datos: reves})

                let dexNumber = []

                for(var i in res.data.pokemon_species)
                {
                    if(res.data.pokemon_species[i].url.length == 44)
                    {
                        dexNumber.push(res.data.pokemon_species[i].url.slice(res.data.pokemon_species[i].url.length-2, res.data.pokemon_species[i].url.length-1))
                    }
                    else if(res.data.pokemon_species[i].url.length == 45)
                    {
                        dexNumber.push(res.data.pokemon_species[i].url.slice(res.data.pokemon_species[i].url.length-3, res.data.pokemon_species[i].url.length-1))
                    }
                    else if(res.data.pokemon_species[i].url.length == 45)
                    {
                        dexNumber.push(res.data.pokemon_species[i].url.slice(res.data.pokemon_species[i].url.length-4, res.data.pokemon_species[i].url.length-1))
                    }
                }

                this.setState({dexNumber: dexNumber})
            })
            .catch(err => console.log(err))

        // axios.get(`https://pokeapi.co/api/v2/region`)
        //     .then(res=>this.setState({generaciones: res.data.results}))
        //     .catch(err=>console.log(err))
    }

    componentDidUpdate(){
        axios.get(`https://pokeapi.co/api/v2/generation/${this.props.match.params.id}`)
            .then(res => {            
                let reves = this.voltea(res.data.pokemon_species)

                this.setState({datos: reves})
            })
            .catch(err => console.log(err))   
        // axios.get(`https://pokeapi.co/api/v2/region`)
        //     .then(res=>this.setState({generaciones: res.data.results}))
        //     .catch(err=>console.log(err))
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
    
                    <div className="buttons">
                        <PageButton gen = '1'/>
                        <PageButton gen = '2'/>
                        <PageButton gen = '3'/>
                        <PageButton gen = '4'/>
                        <PageButton gen = '5'/>
                        <PageButton gen = '6'/>
                        <PageButton gen = '7'/>
                    </div>

                {/* <div>
                    {this.state.generaciones.map(a=>
                        <PageButton 
                            key = {a.name}
                            gen = {a.url.slice(a.url.length-2, a.url.length-1)}
                        />
                    )}
                </div> */}

                    <h1>Gen {this.props.match.params.id}</h1>
        
                    {this.state.datos.map(a=>
                        <Cards 
                            key = {a.name}
                            PokemonName = {a.name} 
                            // PokedexNo = {this.state.dexNumber}
                            PokedexNo = {a.url.slice(a.url.length-4, a.url.length-1)}
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


export default Gen