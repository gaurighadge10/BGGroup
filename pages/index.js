import Layout from '../components/Layout';
import Goods from "../utils/images/goods@2x.png"
import ConstructionMachine from "../utils/images/construction-machine@2x.png"
import Group3 from "../utils/images/Group 3@2x.png"
import Group26 from "../utils/images/Group 26@2x.png"
import { Container, makeStyles} from "@material-ui/core";
import Image from 'next/image';
import { Grid,Box,Divider} from "@material-ui/core";
import Aboutusimage from "../utils/images/Homeaboutusimage.png"
import Typography from '@material-ui/core/Typography';
import Arrowimg from '../utils/images/arrow.png';
import Homeforsale from "./Homeforsale";
import Footer from "../components/Footer/footer";

const useStyles = makeStyles({

});


const Home = () => {

    const classes = useStyles();
  return (
    <>
      <Layout title="Home" >
     
        {/* <div  className={classes.image} >

       <Image src={item} alt="Picture of the author" fluid/> 

      </div> */}
      <div item xs={12} sm={12} md={12} className="homebanner"  fluid >
       <div style={{paddingTop:'9rem',paddingLeft:'11rem'}}>
    
      <Typography variant="h1" component="div" gutterBottom className="welcometo">
      WELCOME TO
      </Typography>
    
      <Typography variant="h1" component="div" gutterBottom className="bggroup">
      BG GROUP
      </Typography>
      </div>
       </div>
        <center>
       <div className="cardimage" >
      
      <Grid item xs={12} sm={6} md={3}>
      <Image src={Goods} alt="Picture of the author" height="80%" width="80%"  fluid/>
          <br /><br />ASHISH TRADING <br/> COMPANY
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Grid item xs={12} sm={6} md={3}>
          <Image src={ConstructionMachine} alt="Picture of the author" height="80%" width="80%" fluid/>
          <br /><br /> VVG LANDMARKS <br/> PVT LTD
          </Grid>
          <Divider orientation="vertical" variant="middle" flexItem />

       <Grid item xs={12} sm={6} md={3} >
        <Image src={Group3} alt="Picture of the author"  height="80%" width="80%" fluid/>
        <br /><br /> SRI SIDDIVINAYAK FOODS <br/> PVT LTD
        </Grid>
        <Divider orientation="vertical" variant="middle" flexItem />
        <Grid item xs={12} sm={6} md={3} >
        <Image src={Group26} alt="Picture of the author"  height="80%" width="80%" fluid/>
        <br /><br />CAS VENTURES <br/> JV  
          </Grid>
      </div>
      </center>
 
    <center>
    <h1 style={{marginTop:'4rem',color:'#003F68',fontFamily:'Segoe UI',fontWeight:'bold'}}>About Us</h1>
     </center>
     <Container >
      <Box my={2}>
      <Grid container spacing={3}>
    <Grid item xs={12} sm={5} md={6} style={{marginTop:'2rem'}}>
      <Image src={Aboutusimage} alt="Picture of the author" style={{height:'80vh',width:'80vh'}} />
      </Grid>
      
  <Grid item xs={12} sm={5} md={6} container justifyContent="space-evenly"
  alignItems="center" style={{padding:"4rem",lineHeight:"1.5px",letterSpacing:"1.3px",fontFamily:'Segoe UI',fontSize:"18px",textAlign:'left'}}>
    <Typography variant="subtitle2" gutterBottom component="div">
        B G Group comprises of quadruple entities viz. Ashish Trading Company, VVG Landmarks Pvt. Ltd.,Sri
        Siddhivinayak Foods Pvt. Ltd. and CAS Ventures Jv.
        <br /><br/>These firms cater to various sectors such as FMCG-Ashish Trading Co. & Sri Siddhivinayak Foods Infrastructure -VVG Landmarks & CAS 
        Ventures respectively.
        <br /><br />One of the leading names with diversified business verticals. The main priority has been to provide
        top-notch service since the inception. The several verticals cab be further categorized into B2B, B2C and 
        B2B2C respectively.
        <br /><br />
        
        <Image src={Arrowimg} alt="Picture of the author"/>
        <h4 style={{marginLeft:'3rem',marginTop:'-2.5rem'}}>Read More</h4>
      </Typography>
      </Grid>
     
    </Grid>
      </Box>
    </Container>
   
   
  
      
    <Homeforsale/>
        
      </Layout >
    <Footer />
    </>
  );
};

export default Home;


   
 