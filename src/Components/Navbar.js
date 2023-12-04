/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/LOGO.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoSearchCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate()
  const goGoat = () => {
    navigate('/goathouse')
  }
  const goEaster = () => {
    navigate('/muahahaha')
  }
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <GiHamburgerMenu className="navbar-cart-icon" id="burger-grey"/>
        <img src={Logo} alt="" />
        <h1>HOME BY <span>GOAT</span></h1>
      </div>
      <div className="navbar-links-container">
        <div className="search-icon">
          <IoSearchCircle className="navbar-cart-icon"/>
        </div>
        <button className="login-button" onClick={goEaster}>ĐĂNG NHẬP</button>
        <button className="guest-button" onClick={goGoat}>DÙNG THỬ</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
