import {makeStyles} from "@material-ui/core";

const drawerWidth = 300;
const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: '#ffffff',
    height: '110px',
    padding: '5 20px',
    '& a': {
      color: 'black',
      margin: '0px 15px',
    },
  },
  mainbar: {
    flexGrow: 1,
  },
  menuListContainer:{
    '& ul':{
      padding: '0 !important',
      '& div':{
        borderBottom: '1px solid grey'
      }
    }
  },
  sectionDesktop: {
    display: 'none',
    [ theme.breakpoints.up("md") ]: {
      display: 'flex',
    }
  },
  mobileDesktop: {
    display: 'none',
    [ theme.breakpoints.down("sm") ]: {
      display: 'flex',
    },
  },
  mobilemenu: {
    color: "black"
  },
  nabarItem: {
    listStyle: 'none',
    marginTop: '15px',
  },
  // mobilemeuDesign: {
  //   height: 'auto',
  //   [ theme.breakpoints.up("md") ]: {
  //     // display: 'none',
  //   },
  // },
  dropdownIcon: {
    marginTop: '3px',
  },
  // drawer
  drawer: {
    width: drawerWidth,
    textAlign: 'center',
    '& ul': {
      listStyle: 'none',
      '& li': {
        fontSize:'16px !important',
        margin: '10px 0px',
      },
    },
  },


}));
export default useStyles;