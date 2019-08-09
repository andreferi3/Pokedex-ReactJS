import React, { Component } from 'react'
import './styles/Pokecard.css'

const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3): number)

export default class Pokecard extends Component {
    render() {
        // console.log(padToThree(this.props.id))
        let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <div className='Pokecard-image'>
                    <img src={imgSrc} alt={this.props.name} />
                </div>
                <div className='Pokecard-data'>Type : {this.props.type}</div>
                <div className='Pokecard-data'>EXP : {this.props.exp}</div>
            </div>
        )
    }
}
