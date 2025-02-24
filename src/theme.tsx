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
                    backgroundColor: '#ffffff', // Hvid baggrund for AppBar
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

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Menu />
            {/* Andre komponenter */}
        </ThemeProvider>
    );
}

export default App;
