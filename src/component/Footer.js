import { Container, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import {Link} from '@mui/icons-material'
const useStyles=makeStyles((theme)=>({
    footer:{
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(4),
        padding:theme.spacing(6,0)
    }
}))

const Footer = ({tittle,description}) => {
    const classes =useStyles()
  return (
    <footer className={classes.footer}>
        <Container maxWidth='lg'>
        <Typography variant='h6' align='center' gutterBottom>{tittle}</Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>{description}</Typography>
        <Typography variant='body2' align='center' color='textSecondary' >Copyright @{''}
        <Link color='inherit' href='https://github.com/Follyb2810'></Link>{''}
        {new Date().getFullYear()}
        </Typography>
        
    </Container>
    </footer>
  )
}

export default Footer
