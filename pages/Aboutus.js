import Layout from "../components/Layout";
import Image from 'next/image';
import { Grid, Container,Stack,Box,Typography,Button } from "@material-ui/core";
import AboutUsContent from "../components/aboutUsContent";
import AboutUs from "../utils/images/aboutUs/about1.png";
import Director from "../utils/images/director.jpg"
import Footer from "../components/Footer/footer";
import Navbar from "../components/Navbar/Navbar";
const aboutus = () => {
  return (
    <>
      <Layout title="Aboutus" >
        <Navbar />
        <div className="aboutUs">
        <Typography variant="h1" component="div">
          <center style={{fontSize:"4rem",fontWeight:600}}>
            About Us
          </center>
        </Typography>
        </div>
        <Container>
          <Box my={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={10} md={5}>
                <Image src={AboutUs} alt="Picture of the author" />
              </Grid>
              <Grid item xs={12} sm={12} md={7} className="businessVertiacalsGrid">
              <Typography variant="body1" gutterBottom className="businessTypography" style={{padding:"2rem"}}>
                B G Group comprises of quadruple entities viz. Ashish Trading Company, VVG Landmarks Pvt. Ltd.,Sri
                Siddhivinayak Foods Pvt. Ltd. and CAS Ventures Jv.
                <br /><br/>
                These firms cater to various sectors such as FMCG-Ashish Trading Co. & Sri Siddhivinayak Foods Infrastructure -VVG Landmarks & CAS 
                Ventures respectively.
                <br /><br />
                One of the leading names with diversified business verticals. The main priority has been to provide
                top-notch service since the inception. The several verticals cab be further categorized into B2B, B2C and 
                B2B2C respectively.
              </Typography>
            </Grid>
          </Grid>
          <AboutUsContent />
        </Box>
        </Container>
          <Grid container spacing={2} style={{backgroundColor:"#EAEBEF",padding:"2rem"}}>
            <Grid item xs={12} sm={6} md={6} style={{fontSize:"30px",fontWeight:"600"}}>
              <center>
              What we've <br />Done
              </center>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={3} md={3} style={{fontSize:"30px",fontWeight:"600"}}>
              <center>
                12+<br />
                <Typography variant="h6" gutterBottom>
                  Years
                </Typography>
                </center>
              </Grid>
              <Grid item xs={12} sm={3} md={3} style={{fontSize:"30px",fontWeight:"600"}}>
                <center>
                  768+<br />
                  <Typography variant="h6" gutterBottom>
                    Projects
                  </Typography>
                </center>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <center style={{padding:"2rem"}}>
          <Typography variant="h1" gutterBottom component="div" className='aboutusTypography'>
            DIRECTOR
          </Typography>
          <Grid style={{height:"200px",width:"200px" ,border:"1px solid #9E9E9E"}}>
            <Image src={Director} alt="Picture of the director" />
          </Grid>
          <Typography variant="h6" gutterBottom component="div">
          Mr. Vivek Gavhane
          </Typography>
        </center>
      </Layout>
      <Footer />
  </>
  );
};

export default aboutus;
