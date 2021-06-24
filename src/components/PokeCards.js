import React from 'react'

export default function PokeCards({ name, num, type, weaknesses }) {
    const chipStyles = { marginRight: '2px', padding: '3px', borderRadius: '3px' };
    return (
        <div className="cards">
            <h5>{num}</h5>
            <h3>{name}</h3>
            <h4>Type: </h4>
            {type.map((pokeType, index) =>
                <span
                    key={pokeType + index}
                    style={chipStyles}
                    className={pokeType}>
                    {pokeType}
                </span>)}
            <h4>Weakness: </h4>
            {weaknesses.map((weakness, index) =>
                <span
                    key={weakness + index}
                    style={chipStyles}
                    className={weakness}>
                    {weakness}
                </span>)}
        </div>
    )
}
