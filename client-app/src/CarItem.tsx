import React from 'react'
import {ICars} from './demo'
interface IPraps {
    cary: ICars
}

const CarItem = (prps:IPraps) => {
    return (
        <div>
            <h1>{prps.cary.brand}</h1>
            <h1>{prps.cary.color}</h1>
        </div>
    )
}

export default CarItem
