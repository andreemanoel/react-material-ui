import { Avatar, Divider, Drawer, IconButton, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core';
import { AddBox, Person } from '@material-ui/icons';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import React from 'react';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
}));

const DrawerNavigation = ({open, handleDrawerClose, navigation}) => {
  const classes = useStyles();

  return (
    <Drawer 
      anchor='left'
      variant="persistent"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawer}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
          <Avatar alt="MMTech" src="https://media-exp1.licdn.com/dms/image/C4E0BAQEArA7gfVkTww/company-logo_200_200/0/1637075117552?e=2147483647&v=beta&t=Kl1HU7M8am9_jlKZYJgKxU-u4CwQcE9HEb_tm34RZz4" style={{
            width: 200,
            height: 100,
          }} />
        <Divider />
        <ListItem button key="Funcionários" onClick={() => navigation.push('/funcionarios')}>
          <ListItemIcon><Person /></ListItemIcon>
          <ListItemText primary="Funcionários" />
        </ListItem>
        <ListItem button key="Adicionar" onClick={() => navigation.push('/adicionar')}>
          <ListItemIcon><AddBox /></ListItemIcon>
          <ListItemText primary="Funcionários" />
        </ListItem>
      </div>

    </Drawer>
  )
}

export default DrawerNavigation;