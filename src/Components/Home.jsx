import React from 'react'
import { NavBar } from './layaut/NavBar';
import { SearchInput } from './layaut/SearchInput';
import { Heading } from './layaut/Heading';
import { CardCash } from './layaut/CardCash';
import { FooterK } from './layaut/FooterK';
import { Banners } from './layaut/Banners';


export const Home = () => {
    return (
        <>
            <NavBar />

            <SearchInput />

            <Banners />

            <Heading />

            <CardCash />

            <FooterK />
        </>
    )
}
