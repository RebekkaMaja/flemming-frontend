import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from './Components/Menu';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffffff', // Hvid baggrund for AppBar
        },
        text: {
            primary: '#000000', // Sort tekst
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff !important', // Tvinger AppBar til at være hvid
                    color: '#000000', // Sort tekst
                    boxShadow: 'none', // Fjern skygge
                    borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // Let grå linje under AppBar
                },
            },
        },
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff !important', // Tvinger Toolbar til at være hvid
                    color: '#000000', // Sort tekst
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#000000', // Sort tekst for knapperne
                },
            },
        },
    },
});

export default theme;
