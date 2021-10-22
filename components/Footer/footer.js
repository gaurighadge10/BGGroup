import React from "react";
import NextLink from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Grid,gridRow } from "@material-ui/core";
import bgLogo from "../../utils/images/logo.png";
import emailimg from "../../utils/images/Icon feather-mail.png";
import phoneimg from "../../utils/images/Icon feather-phone.png";
import Image from 'next/image'
import Typography from '@material-ui/core/Typography';
import Link from "next/link"

const useStyles = makeStyles((theme) => ({
  logoimg:{
    // marginLeft:"100px"
  }
}));
export default function Footer() {
  const classes = useStyles();
  return (
    <>
  
 
    <Grid container 
    
    spacing={2} columns={3}
    style={{marginTop:'2rem',paddingLeft:'10rem'}}
    
     >
    
  <Grid item xs={12} sm={4} md={4}>
  <div><NextLink href="/" >
  <a> <Image src={bgLogo} alt="Picture of the author" height="70%" width="70%" /> </a>
  </NextLink>
  </div>
  </Grid>
  <Grid item xs={12} sm={4} md={4} className="footer">
  <Grid >
  <Grid >
  <Link href="mailto:sales@bggroup.com">
  <Grid container spacing={4} columns={6}>
  
  <Grid item >
  <Image src={emailimg}  alt="Picture of the author"  />
  </Grid>
  <Grid item xs={1} style={{marginLeft: 'inherit',fontFamily:'Segoe UI ',fontWeight:'600',fontSize:'17px'}}
  className='footermobile'>
  sales@bggroup.com
  </Grid>
</Grid>
</Link>
  </Grid>
  </Grid>
  <Grid container spacing={4} columns={6}>
  <Grid item >
  <Image src={phoneimg}  alt="Picture of the author" />
  </Grid>
  <Grid item xs={1} style={{marginLeft: 'inherit',fontFamily:'Segoe UI ',fontWeight:'600',fontSize:'17px'}}>
  9029372537
  </Grid>
</Grid>

 
    
  </Grid>
  
  <Grid  item xs={12} sm={4} md={4}>
  <Grid item >
  <Grid style={{fontFamily:'Segoe UI ',fontWeight:'600',fontSize:'17px',paddingBottom: '14px'}} >
   <Link href="/Aboutus">
  About Us 
  </Link>
  </Grid>
  
  
  <Grid item style={{fontFamily:'Segoe UI ',fontWeight:'600',fontSize:'17px'}}>
  <Link href="/Ashishtradingcompany">
  Business Verticals
  </Link>
  </Grid>
  </Grid>
 
  </Grid>

</Grid>

  <Grid item xs={12} sm={12} md={12} style={{backgroundColor:"black",color:"#FFFFFF",textAlign:'center',fontFamily:'Segoe UI ',fontWeight:'600',height:'41px',padding: '5px'}}>
          <center>
            <Typography> All Copyrights &#xA9; reserved BG Group 2021</Typography>
          </center>
        </Grid>


    

    </>
  );
}
  
  
  
  
  
  
  