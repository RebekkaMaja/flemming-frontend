import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import '../css/Menu.css';

function Menu() {
    return (
        <Router>
            <div className="menu-container"> {/* Tilføj menu-container */}
                <AppBar position="static" className="app-bar">
                    <Toolbar sx={{ justifyContent: 'flex-end' }}>
                        <Button color="inherit" component={Link} to="/vand-og-mad-skema">
                            Vand og mad skema
                        </Button>
                        <Button color="inherit" component={Link} to="/allegier">
                            Allergier
                        </Button>
                        <Button color="inherit" component={Link} to="/notifikationer">
                            Notifikationer
                        </Button>
                        <Button color="inherit" component={Link} to="/tilfoej-et-dyr">
                            Tilføj et dyr
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        </Router>
    );
}

export default Menu;
