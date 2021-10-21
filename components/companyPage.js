import Layout from "./Layout";
import { Grid, Container,Typography, Box, Divider } from "@material-ui/core";
import {BusinessData} from "./dataPages";
import Image from 'next/image'

const companyPage = (props) => {
  return (
    <>
      {BusinessData.map(data1=>{
        if(props.company==data1.id){return(
        <div> 
        <div className="bannerBusinessVertiacals">
          <center>
            <Typography variant="h1" component="div" className="BusinessVertiacalstext1">
              {data1.title1}
            </Typography>
            <Typography variant="h6" gutterBottom component="div" className="BusinessVertiacalstext2">
              {data1.title}
            </Typography>
          </center>
        </div>  
        <Container>
          <Box my={2}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={10} md={6}>
                <Image src={data1.imgUrl} alt="Picture of the company" />
              </Grid>
              <Grid item xs={12} sm={12} md={6} 
                className="businessVertiacalsGrid">
                <Typography variant="body1" gutterBottom className="businessTypography">
                  {data1.text1}
                  <br /><br />
                  {data1.text2}
                  <br /><br />
                  {data1.text3}
                  <br /><br />
                  {data1.text4}
                  <br /><br />
                  {data1.text5} 
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Divider className="businessDivider" />
        </Container>
        </div>
      
      )}})}
    </>
    
  );
};

export default companyPage;