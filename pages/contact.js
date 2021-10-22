import Layout from "../components/Layout";
import contactUs from "../utils/images/contactus/contactusbanner.png"
import Image from 'next/image';
import { Grid, makeStyles,Stack , Container, Typography, Box} from "@material-ui/core";
import ContactDetails from "../components/contactDetails";
import ContactForm from "../components/ContactForm";

const contact = () => {
  return (
    <>
      <Layout title="Contact">
        {/* <Grid item xs={12} sm={12} md={12}>
           <Image src={contactUs} alt="Picture of the author" />
        </Grid> */}
        <div className="contactUs">
        <Typography variant="h1" component="div">
          <center style={{fontSize:"4rem",fontWeight:600}}>
            Contact Us
          </center>
        </Typography>
        </div>
        <Box my={0} marginBottom="50PX">
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} style={{padding:"5rem"}}>
              <Typography variant="h5" gutterBottom component="div">
                Let&apos;s Connect
              </Typography>
              <br />
              <ContactDetails />
              <br />
              <br />

              <div className="mapouter">
                <div className="gmap_canvas">
                  {/* <iframe width="400" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=hadapsar,pune,411038&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                  </iframe> */}
                  <iframe width="320" height="400" id="gmap_canvas" 
                  src="https://m
                  
                  aps.google.com/maps?q=hadapsar,pune,411038&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

                  </iframe>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} container
             alignItems="center" style={{backgroundColor:"#e2e2e2",padding:"2rem"}}>
              <ContactForm />
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12} sm={12} md={12} style={{backgroundColor:"black",color:"#ffffff",padding:"20px"}}>
          <center>
            <Typography variant="body1" gutterBottom> All Copyrights &#xA9; reserved BG Group 2021</Typography>
          </center>
        </Grid>
      </Layout>
    </> 
  );
};

export default contact;
