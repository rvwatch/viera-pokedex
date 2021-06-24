import React, { useState } from 'react'

export default function PokeFilters({ type, sort, filterState }) {
    const [isActive, setActive] = useState("false");

    const classes = `filterButton ${type} ${isActive ? null : "active"}`

    const toggleClass = () => {
        setActive(!isActive); 
       };
    
    return (
        <button className={classes} onClick={() => {sort(type); toggleClass()}}>
            { type }
        </button>
    )
}
