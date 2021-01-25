import React from 'react';
import Contact from '../components/About/Contact/contact';
import Resume from '../components/About/Resume/resume';
import Social from '../components/About/Resume/social';

//Images & Icons
import imgUrl from '../images/bkgd_About.jpg';

//Material UI
import { makeStyles, Grid } from '@material-ui/core';

//style
const useStyles = makeStyles((theme) => ({
  root: {
    //border: '1px solid yellow',
    flexGrow: 1,
    overflow: 'hidden',
    fontSize: '1em',
    backgroundColor: '#333333',
    color: '#00d1be',
    fontFamily: 'lato',
    paddingLeft: '4%',
  },
  containerColumn: {
    //border: '1px solid red',
    padding: '4%',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      marginTop: '8%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '8%',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '6%',
    },
  },
  h1: {
    marginTop: '60%',
    fontSize: '1.8em',
    color: 'white',
    fontFamily: 'Zapfino',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5em',
      marginTop: '15%',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.2em',
      marginTop: '23%',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.6em',
      marginTop: '30%',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.8em',
      marginTop: '20%',
    },
  },
  h3: {
    fontSize: '1.5em',
    fontFamily: 'grandstander',
    color: '#00d1be',
    marginBottom: '4%',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5em',
      margin: '-6.5% 0% 0% 20%',
      marginBottom: '3%',
    },
    [theme.breakpoints.up('md')]: {
      margin: '33% 0% 0% -88%',
      fontSize: '1.9em',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2em',
      margin: '62% 0% 0% -190%',
      marginBottom: '5%',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '2.8em',
      margin: '40% 0% 7% -195%',
    },
  },
  aboutMeRow: {
    //border: '1px solid blue',
    fontSize: '1.25em',
    fontFamily: 'Lato',
    color: '#e2b575',
    marginTop: '50%',
    [theme.breakpoints.up('sm')]: {
      marginTop: '35%',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '39%',
    },
    [theme.breakpoints.up('lg')]: {
      textAlign: 'center',
      marginTop: '36%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '33% 0% 1% 0%',
    },
  },
  resumeRow: {
    padding: '3% 3% 5% 3%',
    //border: '1px solid red',
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#333333',
      marginTop: '17%',
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: 'transparent',
      marginTop: '0%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '80%',
      marginTop: '2%',
      margin: 'auto',
    },
  },
  socialRow: {
    padding: '3% 3% 5% 3%',
    marginTop: '62%',
    //border: '1px solid pink',
    [theme.breakpoints.up('lg')]: {
      margin: '0% 0% 10% -33%',
    },
  },
  contact: {
    margin: '40% 0% 10% 0%',
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#333333',
      marginTop: '30%',
    },
    [theme.breakpoints.up('sm')]: {
      margin: '10% 0% -11% 0%',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      margin: '18% 0% -10% 0%',
    },
    [theme.breakpoints.up('lg')]: {
      margin: '20% 0% -8% 0%',
    },
    [theme.breakpoints.up('xl')]: {
      margin: '2% 0% -7% 0%',
    },
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div className={classes.root} style={styles.container}>
      <Grid container spacing={0}>
        {/* HEADER */}
        <Grid container spacing={0} className={classes.containerColumn}>
          {/*  ABOUTME */}
          <Grid container spacing={0} className={classes.aboutMeRow}>
            <Grid item xs={12} md={7} lg={8}>
              <h1 className={classes.h1}>About</h1>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              <h3 className={classes.h3}>Jenn Plaza</h3>
            </Grid>

            <Grid item xs={12} md={10}>
              <p>
                Jenn Plaza obtained her undergraduate degree in Web Design &
                Development from Full Sail University. She was born and raised
                in Miami Florida; Jenn moved to Orlando Florida in 2005. She is
                the youngest sibling of two. She enjoys gardening, painting,
                exercising, and volunteering, on her free time. Jenn is an
                animal lover who has rescued 3 dogs and 2 geese, Perla, Samy,
                Luna, Angel, and Valentine. <br />
                <br />
                Jennifer joined the American Hotel & Lodging Educational
                Institute's (AHLEI) in 2006, where she started as a
                certification agent and then served as the marketing coordinator
                a few years later. A couple years later she joined the IT
                department, as part of her professional development path, and
                was introduced to the frontend of managing websites.
                Complimenting both IT and Marketing, Jennifer decided to go back
                to school in 2017. <br />
                <br />
                Jennifer’s course knowledge includes skills in Creative
                Presentation, Psychology of Play, Technology in the
                Entertainment and Media Industries, Scalable Data
                Infrastructures, Database Structures, Advanced Scalable Data
                Infrastructures, Emerging Interface Design, Interfaces and
                Usability, Visual Frameworks, Applied Design Tools and
                Interfaces, Designing for Web Standards I & II, Programming for
                Web Applications, Design Patterns for Web Programming, Advanced
                Database Structures, Server Side Languages, Advanced Server Side
                Languages, Leadership and Organizational Behavior, Web
                Application Integration, Deployment of Web Application, Project
                & Portfolio I - VII, and Career Development Modules I - VII .
                Jennifer also holds an Associates in Arts Degree from Miami Dade
                College. Where she was enrolled as an Honors student and was
                part of Phi Theta Kappa. <br />
                <br />
                As a new graduate in Web Design and Development, Jenn's
                objective is to find a professional environment where she can
                diversify and improve upon the skills gained during the time at
                Full Sail University. She is eager to contribute to a culture
                that has a mission that will be rewarding both mentally and
                financially. Jenn’s devotion to see products or services come to
                life is what drives her dedication to each project she begins.
                With joyfulness and optimism, she is hard working and reliable.{' '}
                <br />
                <br />
                Jenn Plaza is an individual who is looking for personal and
                professional growth in an environment that has a flexible career
                path with job opportunities. Jenn is looking to fit into a
                community that has strong passion and work ethics, where team
                building excels. Whether its application programming interface,
                adaptive design integration, implementing frontend frameworks,
                or designing for user experience, Jennifer’s new skills can
                achieve the objective no matter the project. Jenn Plaza is a
                bubbly creative individual who can separate work from fun, but
                fun is expected to be incorporated in color, design, and
                interaction…
                <br />
                <br />
                <br />
                <blockquote>
                  <b>Dedicated</b> to help people where the need is greatest, by
                  connecting skill, devotion, and disposition to promote project
                  transformation and departmental growth among peers.
                </blockquote>
              </p>
            </Grid>
          </Grid>
          {/*  RESUME */}
          <div class="row">
            <Grid container spacing={0} className={classes.resumeRow}>
              <Grid item xs={12} md={10} lg={8}>
                <Resume />
              </Grid>
              {/*  SOCIAL */}
              <Grid item xs={12} md={10} lg={4} className={classes.socialRow}>
                <Social />
              </Grid>
            </Grid>
          </div>
          {/*  CONTACT */}
          <Grid container spacing={0} className={classes.contact}>
            <Contact />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(' + imgUrl + ')',
    backgroundRepeat: 'no-repeat',
    margin: '-44% 0% 0% 0%',
    //height: 'auto',
  },
};
