// import logo from './logo.svg';
import { createTheme, Grid, makeStyles } from '@material-ui/core';
import { Container, ThemeProvider} from '@mui/material';
import './App.css';
import FeaturedPost from './component/FeaturedPost';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import PostCard from './component/PostCard';
import Sidebar from './component/Sidebar';
import {featuredPosts, sidebar} from './data/Data'
// import Img from './component/Img';
const useStyle=makeStyles((theme)=>({
  mainGrid:{
    marginTop: theme.spacing(3)
  }
}))


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  const classes =useStyle()
  return (
    <ThemeProvider theme={darkTheme}>

    <Container>
      <Header/>
      <FeaturedPost/>
      <br/>
       <Grid container spacing={4 }>
         {
          featuredPosts.map((v,i)=> <PostCard post={v} key={v.title}/>)}
       </Grid>
       <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="From the Firehouse"/>
        <Sidebar title={sidebar.title} 
            description={sidebar.description}
             archives={sidebar.archives}
            social={sidebar.social}/>
       </Grid>
        
        {/* <Button variant="contained">hello</Button> */}
        {/* <Button color='primary'startIcon={<SendIcon/>} endIcon={<DeleteIcon/>} disableRipple fullWidth size='large' variant='contained'> >hello</Button> */}
        
        {/* <Typography variant="body2" color="initial">new to mui</Typography> */}
    </Container>
            <Footer title='footer' description='am here to omprove my code'/>
      {/* <Img/> */}
    </ThemeProvider>
  );
}

export default App;