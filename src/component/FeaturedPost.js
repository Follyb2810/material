import React from 'react'
import {Card} from '@mui/material'
import Image from '../img/d.jpg';
import { Button, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
const useStyles=makeStyles({
    title: {
        fontSize:40,
        fontFamily:'Montserrat'
    },
    cover:{
        // backgroundImage:`url(https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fimage&psig=AOvVaw3cAspthi9VC3oHW4DTAiMo&ust=1679903300554000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCa7c2N-f0CFQAAAAAdAAAAABAE)`,
        backgroundImage:`url(${Image})`,
        // backgroundImage: 'url("../img/images.jfif")',
        // backgroundImage: 'url("../img/images.jfif")',
        backgroundPosition:'center',
        // backgroundColor:'red',
        padding:'35px 25px'
    },
    btn:{
        color:"red"
    }
})
const FeaturedPost = () => {
    const classes =useStyles()
  return (
    <div>
       <Card className={classes.cover}>
       {/* <img src={require('../img/images.jfif')} alt=''/> */}
         <CardContent className={classes.textContainer}>
             <Typography className={classes.title}>tiltle of a feature posr</Typography>
             <Typography variant='h5'>lorem</Typography>
         </CardContent>
         <CardActions>
            <Button className={classes.btn} variant='text'>Read More</Button>
         </CardActions>
       </Card>
    </div>
  )
}

export default FeaturedPost
