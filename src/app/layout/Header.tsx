import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import './App.css';
export default function Header() { 

  const links =[
    {title: 'Home', path:'/'},
    {title: 'Services', path:'/service'},
    {title: 'Estimates', path:'/estimate'},
    {title: 'About', path:'/about'},
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
   
    return(
        <>
         
            <AppBar component="nav">
                <Toolbar sx={{backgroundColor:'#f9fcff'}}>
                
                <Typography
                
                    variant="h6"
                    component="div"
                    sx={{ color:'#fff', typography: 'h7', flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                >
                    <Box sx={{ textDecoration:'none',color:'#fff', typography: 'h7', flexGrow: 1, display: { xs: 'block', sm: 'block' } }}
                     component = {NavLink}
                     to = '/'
                     key = '/'
                    >
                   <img className="logoHeader" src="assets/images/logo2.png"  alt="wrapkit" />
                    </Box>
                    
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' },mr: 1 }}>
                {links.map(({title,path}) =>(
                            <Button 
                                className="navLinkStyle"
                                component = {NavLink}
                                to={path}
                                key={path}
                                sx={{color:'#333',fontSize:17, typography: 'p', '&:hover':{color:'#c01a2b', backgroundColor:'#f9fcff'}, '&.active': {color:'#c01a2b'}}}
                            >
                                {title}
                            </Button>
                        ))}
                   
                </Box>
                
                <Typography sx={{  display: { xs: 'flex', sm:'none', md: 'none' },mr:0,color: '#c01a2b' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 0 }} onClick={handleClick}
>
                    
      <MenuIcon />
      
    </IconButton>
    <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {links.map(({title,path}) =>(
                            <MenuItem
                                onClick={handleClose}
                                component = {NavLink}
                                to={path}
                                key={path}
                                sx={{ typography: 'h7'}}
                            >
                                {title}
                            </MenuItem>
                        ))}
       
      </Menu>
                </Typography>
                </Toolbar>
            </AppBar>
            
        </>
    )
}