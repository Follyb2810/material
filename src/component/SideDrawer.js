import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
// import { makeStyles } from '@mui/material';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';

// type Anchor = 'top' | 'left' | 'bottom' | 'right';
const useStyles =makeStyles({
   list:{
    width:250
   },
   fullList:{
    width:'auto'
   }
})
export default function SideDrawer({children}) {
  const classes =useStyles()
  const [state, setState] = React.useState({
    // top: false,
    left: false,
    // bottom: false,
    // right: false,
  });
  const toggleDrawer = (anchor,open)=>(event)=>{
    if(event.type === 'keydown' && (event.key ==='Tab' || event.key ==='Shift')){
      return;
    }
    setState({...state,[anchor]:open})
  }

  const list =(anchor)=>(
    <div className={clsx(classes.list,{
      [classes.fullList]:anchor ==='top' || anchor === 'bottom'
    })}
    role='presentation'
    onClick={toggleDrawer(anchor,false)}
    onKeyDown={toggleDrawer(anchor,false)}
    >
        <List>
          {['inbox','starred','send enail','draft'].map((text,index)=>(
            <ListItem button key={text}>
               <ListItemIcon>
                 {index % 2 === 0? <InboxIcon/>:<MailIcon/>}
               </ListItemIcon>
               <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>
        <Divider/>
        <List>
          {['all mail','trash','spam  ','draft'].map((text,index)=>(
            <ListItem button key={text}>
               <ListItemIcon>
                 {index % 2 === 0? <InboxIcon/>:<MailIcon/>}
               </ListItemIcon>
               <ListItemText primary={text}/>
            </ListItem>
          ))}
        </List>

    </div>
  )

  // const toggleDrawer =
  //   (anchor: Anchor, open: boolean) =>
  //   (event: React.KeyboardEvent | React.MouseEvent) => {
  //     if (
  //       event.type === 'keydown' &&
  //       ((event as React.KeyboardEvent).key === 'Tab' ||
  //         (event as React.KeyboardEvent).key === 'Shift')
  //     ) {
  //       return;
  //     }

  //     setState({ ...state, [anchor]: open });
  //   };

  // const list = (anchor: Anchor) => (
  //   <Box
  //     sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //     <Divider />
  //     <List>
  //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //         <ListItem key={text} disablePadding>
  //           <ListItemButton>
  //             <ListItemIcon>
  //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
  //             </ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItemButton>
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <div>
      <React.Fragment key={'left'}>
        <Button onClick={toggleDrawer('left',true)}>{children}</Button>
        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left',false)}>{list('left')}</Drawer>
       </React.Fragment>
      {/* {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))} */}
      
    </div>
  );
}