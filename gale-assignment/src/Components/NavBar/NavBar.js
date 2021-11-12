import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "./../../static/icon/search.png";
import AccountCircle from "./../../static/icon/user.png";
import CartIcon from "./../../static/icon/shopping.png";
import './NavBar.css'

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#0000CD" }}>
        <Toolbar>
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} className='logo-label' href="#">
            TEST
          </Typography>
          <div className='main-nav'>
          <p className='icon-style' style={{maxWidth: '30%', paddingRight: 10}}>
              Track Order
            </p>
              <span>
                <img src={SearchIcon} alt="search-img"  className='icon-style' />
              </span>
            <span>
              <img src={AccountCircle} alt="user-img"  className='icon-style' />
            </span>
            <span>
              <img src={CartIcon} alt="cart-img" />
            </span>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
