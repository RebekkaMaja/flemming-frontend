import React from 'react';
import '../css/frontpage.css';
import { ThemeProvider } from '@emotion/react';
import theme from '../theme';
import Header from '../Components/Header';
import '../css/waterAndFood.css';

function WaterAndFood() {
    return (
        <ThemeProvider theme={theme}>
        <div className="grid grid-rows-layout h-screen">
            <Header />          
            {/* Hovedindhold */}
            <div className="grid grid-cols-layout flex-1">
                {/* Venstre side til navn */}
                <div className="bg-gray-300 p-4">
                    <p className='water-food-text'>Mad og drikke skema</p>
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

export default WaterAndFood;
