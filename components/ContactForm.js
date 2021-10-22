import {
    Grid,TextField,Button,Typography } from "@material-ui/core";


const inputFieldValues = [
    {
      name: "First Name & Last Name",
      type:"string",
      label: "fullName",
      rows: 1,
      required:"Required"
    },
    {
      name: "Phone Number",
      type:"string",
      label: "phnumber" ,
      rows: 1,
      required:"Required"
    },
    {
      name: "Email Address",
      label:"email",
      rows:1,
      type:"email",
      required:"Required"
    },
    {
      name: "Company Name(optional)",
      label:"cname",
      rows: 1,
      type:"string",
    },
    {
      name: "Message",
      label: "message",
      rows:5,
      type:"string",
      required:"Required"
    },
  ];

const ContactForm = () => {
    return (
      <>
      <Grid>
        <Typography variant="h5" gutterBottom component="div">
          Send us message
        </Typography>
        <br />
        <br />
        {inputFieldValues.map((inputFieldValue, index) => {
          return (
            <>
          <div>
            <Typography required id="outlined-required" 
                        variant="body1" label={inputFieldValue.required} 
                        gutterBottom>
              {inputFieldValue.name}
            </Typography>
    
            <TextField variant="outlined" className="contacttextfield" />
            {/* <TextField 
                      //  rows={inputFieldValue.rows} 
                      //  type={inputFieldValue.type} 
                       className="contacttextfield" /> */}
            <br />
          </div>
          </>
        );
      })}
      <br />
      <Button
        type="submit"
        className="contactbutton">
          Contact us now
      </Button>
    </Grid>
    </>
    );
  };
export default ContactForm;