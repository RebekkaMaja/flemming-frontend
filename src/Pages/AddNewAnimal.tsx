import React from 'react';
import '../css/frontpage.css';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import Header from '../Components/Header';
import '../css/AddNewAnimal.css';

function AddNewAnimal() {
    return (
        <ThemeProvider theme={theme}>
        <div className="grid grid-rows-layout h-screen">
            <Header />          
            {/* Hovedindhold */}
            <div className="grid grid-cols-layout flex-1">
                {/* Venstre side til navn */}
                <div className="bg-gray-300 p-4">
                <p className='new-animal-text'>Tilføj nyt dyr</p>
                </div>

                {/* Højre side til indhold */}
                <div className="bg-gray-100 p-4">
                    <h2 className="text-2xl font-bold">Indhold</h2>
                    {/* Tilføj mere indhold her */}
                </div>
            </div>
        </div>
        </ThemeProvider>
    );
}

export default AddNewAnimal;
