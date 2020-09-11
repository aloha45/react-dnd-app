import React from 'react'
import { Link } from 'react-router-dom'

const SpellCard = (props) => {
    return (
        <div key={props.spell.index}>
            <Link
             to= {{
                 pathname: `/spell/${props.spell.index}`
                 }}> {props.spell.name}</Link>
        </div>
    )
}

export default SpellCard