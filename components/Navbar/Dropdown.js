import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box, Menu, MenuItem, Divider,Button } from "@material-ui/core";
import { FaAngleDown } from "react-icons/fa";
import useStyles from "./NavbarStyle";

  const menuList = [
    {
      id:1,
      title: 'Ashish Trading Company',
      path: '/Ashishtradingcompany',
      cName: 'dropdown-link'
    },
    {
      id:2,
      title: 'VVG Landmarks Pvt Ltd',
      path: '/VVGtrading',
      cName: 'dropdown-link'
    },
    {
      id:3,
      title: 'Shree Siddhivinayak Foods Pvt Ltd',
      path: '/shreesiddhivinayakfood',
      cName: 'dropdown-link'
    },
    {
      id:4,
      title: 'CAS Ventures',
      path: '/casventures',
      cName: 'dropdown-link'
    }
  ];

function Dropdown() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box>
        <Button onClick={handleClick} style={{textTransform: "none",fontSize:"16px"}}>
          Business Verticals<FaAngleDown className="dropdownIcon" />
        </Button>
    
      </Box>
     
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className="menuListContainer"
        // transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        // anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuList.map(menu=>(
          <div>
            <MenuItem style={{width:"250px",margin: '0', fontSize:"12px",borderBottom: "1px solid grey"}} key="menu.index">
               <Link
                // className={menu.cName}
                href={menu.path}
                onClick={() => setClick(false)}
              >
                {/* <a href=""></a> */}
                {menu.title}
              </Link>
            </MenuItem>
        <br />
      </div>       
      ))}
    </Menu>
    </>
  );
}

export default Dropdown;