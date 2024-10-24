import React from 'react'
import trigo from '../../Assets/trigo.png'
import ingredients from '../../Assets/ingredients.png'
import book from '../../Assets/book.png'



export const Cuadros = () => {
    return (
        <div className="cards w-full max-w-screen-xl mx-auto p-4 flex justify-center items-center space-x-8">

            <img src={trigo} alt='trigo' />
            <img src={ingredients} alt='ingre' />
            <img src={book} alt='book' />

        </div>




    )
}
