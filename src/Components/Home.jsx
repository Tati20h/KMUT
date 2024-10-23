import React from 'react'
import { SearchInput } from './layout/SearchInput';
import { Heading } from './layout/Heading';
import { CardCash } from './layout/CardCash';
import { FooterK } from './layout/FooterK';
import { Banners } from './layout/Banners';
import { History } from './layout/History';


export const Home = () => {
    return (
        <>


            <SearchInput />

            <Banners />

            <Heading />

            <CardCash />
            <History />
            <FooterK />
        </>
    )
}
