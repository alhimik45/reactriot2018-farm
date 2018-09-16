import React from 'react'

export const Coin = props => {
    return <img onClick={props.onClick}
                style={{width: 80, height: 80}}
                alt="coin"
                src={props.img}/>
};