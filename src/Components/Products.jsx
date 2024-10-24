import React from 'react'
import { Carouselt } from './layout/Carouselt'
import { Heading2 } from './layout/Heading2'
import { History } from './layout/History'
import { CardDesc } from './layout/CardDesc'
import { DefaultCard } from './layout/DefaultCard'
import { Cuadros } from './layout/Cuadros'

export const Products = () => {
    return (
        <>
            <Heading2 />
            <Carouselt />
            <br></br>
            <Cuadros />
            <br></br>
            <CardDesc />
            <History />
            <br></br>
            <DefaultCard />

        </>

    )
}
