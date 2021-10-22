import * as React from 'react';
import { Container, makeStyles } from "@material-ui/core";
import { Grid,Box} from "@material-ui/core";
import Image from 'next/image';
import Image2 from '../utils/images/imagesale2.png';
import Image1 from '../utils/images/imagesale1.png';
import { useState } from 'react';
import Arrowimg from '../utils/images/arrow.png';

const data= [
    {
        imageUrl:Image2,
        name:' Khalumbre,khed,Pune',
        
        plotarea:'8112.00 sq.ft',
        shedarea:'49575.10 sq.ft',
        rentmonthly:'RS.30/Month ',
    },
    {
        imageUrl:Image1,
        name:' Khalumbre,khed,Pune',
        
        plotarea:'8112.00 sq.ft',
        shedarea:'49575.10 sq.ft',
        rentmonthly:'RS.30/Month ',
    },
]


const useStyles = makeStyles({
 
  }); 
const Homeforsale = () => {
    const classes = useStyles();

    const [current, setCurrent] = useState(0);
    const length = data.length;
   
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };

  return (
      <>
      
     <Grid style={{backgroundColor:"#EAEBEF",marginTop:'2rem',paddingBottom:'3rem'}}>
      <Grid  container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid style={{marginTop:"6rem"}} item xs={12} sm={6} md={6} >
        <h2 style={{marginLeft:'4rem',color:'#003F68',fontFamily:'Segoe UI',fontWeight:'bold'}}>Available Shed For Sale</h2><br />
        <p style={{marginLeft:'4rem',textAlign:'left',fontFamily:'Segoe UI',paddingRight:'15px'}}>We Provide For Factory,Godown,Showroom,Warehouse Shed on Sale /Purchase/Rent You can avail Warehouse of all sizes,
            both Metro Shed/Lanter Roof,bays for Loading & Unloding,more Parking for Trunk,Trolley,wide Road For
            Your Good Business Location,in your Budget And Best Business costing point of View.
            <br />
            <br />
            Please Feel Free To Contact
            <br />
            <br />
            {/* <Image src={Arrowimg} alt="Picture of the author"/>
            <h4 style={{marginLeft:'3rem',marginTop:'-2.5rem',color:'#003F68',fontFamily:'Segoe UI',fontWeight:'bold',fontSize:'18px'}}>Know More</h4>
 */}

        </p>
         
       
        </Grid >
        
        <Grid item xs={12} sm={6} md={6} 
         container
         direction="Row"
         justifyContent="space-evenly"
         alignItems="flex-end"
         >
        <Grid style={{width:'30%'}}>
      
         <Image src={data[current].imageUrl} alt="Picture of the author"   fluid /> 
          <div><span style={{color: '#004067',fontWeight:'700',fontFamily:'Segoe UI',fontWeight:'600'}}>Industrial Shed</span>{data[current].name}
          <br />
          <h5 style={{fontFamily:'Segoe UI'}}>
          Plot Area :{data[current].plotarea}<br />
          Shed Built up area:{data[current].shedarea}<br />
          Rent Monthly/built up:{data[current].rentmonthly}<br />
          </h5>
         </div>
         
        </Grid>
        <Grid style={{width:'30%'}}>
        <Image src={Image1} alt="Picture of the author" fluid /> 
          <div><span style={{color: '#004067',fontFamily:'Segoe UI',fontWeight:'600'}}>Industrial Shed</span>{data[current].name}
          <br />
          <h5 style={{fontFamily:'Segoe UI'}}>
          Plot Area :{data[current].plotarea}<br />
          Shed Built up area:{data[current].shedarea}<br />
          Rent Monthly/built up:{data[current].rentmonthly}<br />
          </h5>
         </div>
        </Grid>
        </Grid>
        
     
      </Grid>
      </Grid>
     
   
      </>
  )
}

export default Homeforsale;