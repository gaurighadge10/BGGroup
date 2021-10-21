import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>({
  navbar: {
    backgroundColor: '#203040',
    '& a': {
      color: 'black',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '70vh',
    margin: '92px 0px 0px 0px',
  },
  footer: {
    textAlign: 'center',
  }
}));
export default useStyles;