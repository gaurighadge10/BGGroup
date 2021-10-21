import {
    Grid,Typography} from "@material-ui/core";
import { BusinessData } from "./dataPages";
import Image from 'next/image'


const aboutUsContent = () => {
    return (
      <>
        <div>
            <center>
                <Typography variant="h1" gutterBottom component="div" className='aboutusTypography'>
                   SERVICES
                </Typography>
            </center>
            <Grid
            container
            
            spacing={2} 
          >
            {BusinessData.map(data=>(
              <Grid item xs={12} sm={6} md={6} key={data.id}>
                <Grid container spacing={5}>
                <Grid item xs={12} sm={5} md={5}>
                  <Image src={data.imgUrl} alt="Picture of the company" />
                </Grid>
                <Grid item xs={12} sm={7} md={7} >
                <Typography variant="h6" component="div" style={{fontSize:"1.2rem",fontWeight:600}}>
                 {data.ptitle}
                </Typography>
                <div className="businessTypography" style={{padding:"1rem"}}>
                  {data.text1}
                  <br />
                  {data.atext2}
                  </div>
                </Grid>
              </Grid>
            </Grid>
            ))}</Grid>
    </div>
   
    </>
    );
  };
export default aboutUsContent;
  