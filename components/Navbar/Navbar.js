import {
  AppBar, IconButton, Toolbar,  Drawer,Grid } from "@material-ui/core";
import NextLink from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Dropdown from "./Dropdown";
import useStyles from "./NavbarStyle";
import bgLogo from "../../utils/images/logo.png";
import mailIcon from "../../utils/images/mailicon.png";
import phoneIcon from "../../utils/images/phone.png";
import Image from 'next/image'

{/* <Image src={bgLogo} /> */}

const Navbar = () => {
  // const classes = useStyles();
  const [ dropdown, setDropdown ] = useState(false);
  // mobile menu
  const [ mobileMenu, setMobileMenu ] = useState(null);

  const openMobileMenuOpen = (event) => {
    setMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setMobileMenu(null);
  };

  const [ drawerOpen, setDraweropen ] = useState(false);

  return (
    <>
      {/* <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          >asdsfcd
        </Grid> */}
      <Drawer style={{ width: 400, }} className="mobilemeuDesign" open={drawerOpen} onClose={() => setDraweropen(false)}>
      <Grid container className="navbarInfo">
      <Grid item xs={6} sm={2}>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={2}>
            <Image src={mailIcon} alt="mail icon" />
          </Grid>
          {/* <Grid item xs={3} md={3} sm={3}>
            sales@bggroup.com
          </Grid> */}
        </Grid>
      </Grid>
      <Grid item xs={2} sm={2}>
        <Grid container spacing={2}>
          <Grid item xs={1} md={1} sm={1}>
            <Image src={phoneIcon} alt="mail icon" />
          </Grid>
          {/* <Grid item xs={3} md={4} sm={4}>
            +91 9029-372-537
          </Grid> */}
        </Grid>
      </Grid>
      </Grid>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', }}>
          <li className="nabarItem">
            <NextLink href="/" >
              <a> <Image src={bgLogo} alt="Picture of the author" height="70%" width="70%" /> </a>
            </NextLink>
          </li>
          <IconButton onClick={() => setDraweropen(false)} >
            <FaTimes />
          </IconButton>
        </div>
        <div className="drawer">
          <ul>
            <li className="nabarItem">
              <NextLink onClick={() => setDraweropen(false)} href="/Home" >
                <a> Home </a>
              </NextLink>
            </li>
            <li>
              <NextLink onClick={() => setDraweropen(false)} href="/Aboutus" >
                <a> About Us </a>
              </NextLink>
            </li>
            <li className='nav-item'>
              <Dropdown />
            </li>
            <li>
              <NextLink onClick={() => setDraweropen(false)} href="/contact" >
                <a> Contact Us</a>
              </NextLink>
            </li>
          </ul>
        </div>
      </Drawer>
      {/* main app bar */}
      <AppBar position="fixed" className="navbar">
       <Grid container className="navbarInfo">
      <Grid item xs={6} sm={2} md={2}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={2} sm={2}>
            <Image src={mailIcon} alt="mail icon" />
          </Grid>
          <Grid item xs={3} md={3} sm={3}>
            sales@bggroup.com
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={2} sm={2} md={4}>
        <Grid container spacing={2}>
          <Grid item xs={1} md={1} sm={1}>
            <Image src={phoneIcon} alt="mail icon" />
          </Grid>
          <Grid item xs={3} md={4} sm={4}>
            +91 9029-372-537
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      <Toolbar>
          <div className="mainbar">
            <li className="nabarItem">
              <NextLink href="/" >
                <a> <Image src={bgLogo} alt="Picture of the author" height="70%" width="70%" /> </a>
              </NextLink>
            </li>
          </div>
          <div className="sectionDesktop">
           <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', alignItems: 'center', }} >
            <li className='navList'>
                <NextLink href="/Home" >
                  <a> Home </a>
                </NextLink>
              </li>
              <li className='navList'>
                <NextLink href="/Aboutus" >
                  <a> About Us </a>
                </NextLink>
              </li>
              <li className='nav-item'>
                <Dropdown />
              </li>
              <li className='navList'>
                <NextLink href="/contact">
                  <a> Contact Us </a>
                </NextLink>
              </li>
            </ul>
          </div>
          <div className="mobileDesktop">
            <IconButton onClick={() => setDraweropen(true)} >
              <FaBars className="mobilemenu" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;















// import {
//   AppBar, IconButton, Toolbar,  Drawer} from "@material-ui/core";
// import NextLink from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes, FaAngleDown , FaBattleNet} from "react-icons/fa";
// import { Button } from "./Button";
// import Dropdown from "./Dropdown";
// import useStyles from "./NavbarStyle";
// import bgLogo from "../../public/home/logo.png";
// import { navMenu } from './NavMenu';

// const Navbar = () => {

//   const classes = useStyles();

//   const [ dropdown, setDropdown ] = useState(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };


//   // mobile menu
//   const [ mobileMenu, setMobileMenu ] = useState(null);

//   const openMobileMenuOpen = (event) => {
//     setMobileMenu(true);
//   };
//   const closeMobileMenu = () => {
//     setMobileMenu(null);
//   };

//   const [ drawerOpen, setDraweropen ] = useState(false);


//   return (
//     <>
//       <Drawer style={{ width: 400, }} className={classes.mobilemeuDesign} open={drawerOpen} onClose={() => setDraweropen(false)}>
//         <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px', }}>
//           <li className={classes.nabarItem} >
//             <NextLink href="/" >
//               <a> <img src="../../public/home/logo.png" className={classes.logo} /> </a>
//             </NextLink>
//           </li>
//           <IconButton onClick={() => setDraweropen(false)} >
//             <FaTimes />
//           </IconButton>
//         </div>
//         <div className={classes.drawer}>
//         {navMenu.map(nav => (
//           <ul key={nav.id}>
//             <li> <NextLink href={nav.path} >
//                   <a>{nav.title}</a>
//                 </NextLink></li>
//           </ul>
            
//           ))}
      
//         </div>
//       </Drawer>
//       {/* main app bar */}
//       <AppBar position="fixed" className={classes.navbar} >
//         <Toolbar>
//           <div className={classes.mainbar} >
//             <li className={classes.nabarItem} >
//               <NextLink href="/" >
//                 <a> <img src="../../public/home/logo.png" className={classes.logo} /> </a>
//               </NextLink>
//             </li>
//           </div>
//           <div className={classes.sectionDesktop}>
//           {navMenu.map(nav => (
//           <ul key={nav.id}>
//             <li> 
//               <NextLink href={nav.path} >
//                 <a>{nav.title}</a>
//               </NextLink>
//             </li>
//          </ul>
//             ))}
//           </div>
//           <div className={classes.mobileDesktop}>
//             <IconButton onClick={() => setDraweropen(true)} >
//               <FaBars className={classes.mobilemenu} />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Navbar;
