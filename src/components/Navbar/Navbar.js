import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    let userId = 5;

    return (
        <div>
            <AppBar position="static" sx={{ backgroundColor: 'orange' }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" component="div" sx={{ color: 'white' }}>
                            <Box textAlign="left">
                            <li><Link to="/home">TeachYTeachU</Link></li>
                            |
                            |<li><Link to="/loginsignup">Login</Link></li>
          
                            </Box>
                        </Typography>
                    </Box>
                    <Typography>
                  
                    <Link to="/profile" className="profile-icon-link">
        
        </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;