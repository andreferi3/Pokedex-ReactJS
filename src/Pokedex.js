import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './styles/Pokedex.css'

export default class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h1 className='Pokedex-winner'>Winning Hand</h1>
        } else {
            title = <h1 className='Pokedex-loser'>Losing Hand</h1>
        }

        return (
            <div className='Pokedex'>
                {title}
                <p>Total Experience : {this.props.exp}</p>
                <div className='Pokedex-cards'>
                    {this.props.pokemon.map((p) => {
                        return (
                            <Pokecard 
                                id={p.id}
                                name={p.name}
                                type={p.type}
                                exp={p.base_experience}
                                key={p.id}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}
