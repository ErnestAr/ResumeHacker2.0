import React from 'react';
import emailjs from 'emailjs-com';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  card: {
    padding: theme.spacing(4),
    height: 552, 
  },
  map: {
    width: '100%',
    height: '100%',
  },
  contact: {  
    color: "#0A2239"
  },
  formsection: {
    backgroundColor: "#ACEDFF",
    padding: theme.spacing(4),
    flexFlow: 'row',
    width: '100%',

  },

  text: {
      height: "fit-content",
      flexFlow: 'column',
      width: "100%",
      margin: 0,
      padding: 0,
      
  },
  text1: {
    fontSize: 80,
    paddingTop: theme.spacing(10),
    color: '#3A7CA5',
    textAlign: 'center',
    width: "100%",
    height: "200px",
  },
  text2: {
      fontSize: "1.5em",
      padding: "10px",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(10),
      textAlign: 'center',
      width: "100%",
      height: "fit-content",
  },
  button: {
    backgroundColor: "#3A7CA5",
  }
}));


export default function About() {
    const classes = useStyles();
    function sendEmail(event) {
        event.preventDefault();
      
        emailjs.sendForm( 'service_cojxo8n', "template_en41639", event.target, 'user_aNIRPce2J8al2qImJFSP9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          event.target.reset()
        }
    return (
    <div > 

    <Grid container className={classes.contact} justifyContent="center"  alignItems="stretch" spacing={2} >
        <Grid className={classes.text} item xs={12} container >
            <Typography className={classes.text1} variant="h4" component="h1" item>
                About us
            </Typography>
            <Typography className={classes.text2} variant="h4" component="h1" item>
            We are a group of full stack software developers based out of Toronto Canada. Our mission to create this resume building app was realized as we felt that this niche part of the industry lacked a reliable streamlined tool to make it easier to for both experienced and aspiring Tech/IT professionals to have a fine tuned resume.
            </Typography>
        </Grid>
        <Grid item lg={8} md={8} sm={12} xs={12} >
                <iframe className={classes.map} src="https://maps.google.com/maps?q=Toronto,%20Canada+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12} >
            <Card className={classes.card} item>
            <CardContent className="text-color">
                <Typography gutterBottom variant="h5">
                Contact Us
            </Typography> 
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                Fill up the form and our team will get back to you within 24 hours.
            </Typography> 
                <form onSubmit={sendEmail} >
                <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                    </Grid>
                    <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>Submit</Button>
                    </Grid>
                </Grid>
                </form>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
    </div>
    )
}