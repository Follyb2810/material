import { Badge, Divider, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
// import makeStyles from "@mui/styles"
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideDrawer from './SideDrawer';
const useStyles=makeStyles((theme) =>({
    title:{
        flexGrow: 1,
    },
    taglibe:{
        fontSize:20,
        textTransform:'uppercase',
        justifyContent:'center',
        fontFamily:"Montserrat"
    }
}))
const Header = () => {
    const classes =useStyles()
  return (
    <>
      <Toolbar>
          <SideDrawer>
         <IconButton color='inherit'>

                    <MenuIcon/>
         </IconButton>
          </SideDrawer>
         <Typography variant='h6' className={classes.title}>Folly Website</Typography>
         <IconButton color='inherit'>
            <Badge badgeContent={4} color='primary'>

            <NotificationsIcon/>
            </Badge>
             </IconButton  >
         <IconButton color='inherit'> <AccountCircleIcon/> </IconButton>
      </Toolbar>
      <Divider/>
      <Toolbar className={classes.tagline}>
        Am here to achieve my aims
      </Toolbar>
    </>
  )
}

export default Header
