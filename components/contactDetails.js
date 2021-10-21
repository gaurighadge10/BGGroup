import {
    Grid } from "@material-ui/core";
import locationIcon from "../utils/images/contactus/location.png";
import mailIcon from "../utils/images/contactus/mailicon.png";
import phoneIcon from "../utils/images/contactus/phone.png";
import Image from 'next/image';
import facebookIcon from "../utils/images/contactus/facebookIcon.png";
import twitterIcon from "../utils/images/contactus/TwitterIcon.png";
import linkedinIcon from "../utils/images/contactus/linkedinIcon.png";

const contactList = [
    {
      id:1,
      imgUrl : mailIcon,
      content: 'sales@bggroup.com',
    },
    {
      id:2,
      imgUrl : phoneIcon,
      content: '91 9029-372-537',
    },
    {
      id:3,
      imgUrl : locationIcon,
      content: 'Hadapsar, Pune, MH, India-411028',
    },
   ];
  
   const iconList = [
    {
      id:1,
      imgUrl : facebookIcon,
    },
    {
      id:2,
      imgUrl : twitterIcon
    },
    {
      id:3,
      imgUrl : linkedinIcon,
    },
   ];

const ContactDetails = () => {
    return (
      <>
        <div>
        {contactList.map(contact=>(
            <Grid key={contact.id} container direction="row" spacing={1}>
              <Grid direction="column" item xs={3} sm={3} md={2}>
                <Image src={contact.imgUrl} alt="Picture of the author" className="imgGraph"/>
              </Grid>
              <Grid item xs={9} sm={9} md={6} direction="column">
                {contact.content}
              </Grid>
            </Grid>
        ))}
        {/* <Grid container spacing={2} style={{paddingLeft:"5rem"}}>
          {iconList.map(icon=>(
          <Grid item xs={2} sm={2} md={2} direction="column" key={icon.id}>
            <Image src={icon.imgUrl} alt="Picture of the icon"/>
          </Grid>
        ))}
        </Grid> */}
    </div>
    </>
    );
  };
export default ContactDetails;
  