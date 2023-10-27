"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, useTheme } from '@mui/material';
import config from '@/config'
import Link from 'next/link';
import Image from 'next/image';
import { useMediaDeviceSizes } from '@/hooks';


const navItems = config.navItems
function MainNavBar(props) {
  const theme = useTheme()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;
  const {is600To800Device} = useMediaDeviceSizes()


  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Avatar alt="Clair aid logo" src="logo.png" />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton LinkComponent={Link} href={`${item.link}`}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <Button sx={{ borderRadius: 30 }} size="large" variant="contained" >Donate</Button>
        </ListItem>
      </List>
    </Box>
  );


  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar component="nav" sx={{p: 1}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {/* <Avatar alt="Text scanner logo" src="/logo.png" /> */}
            <Image alt='claire aid logo' src="/logo-nav.png" height={50} width={50} />
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }, pr: {lg: 20, md: 10, sm: is600To800Device ? 2 : 5, xs: 2}  }}>
            {navItems.map((item) => (
              <Button passHref size={is600To800Device ? 'small' : 'medium'} LinkComponent={Link} href={`${item.link}`} variant='outlined' key={item.title} sx={{ color: theme.palette.common.white, pr:{lg: 5} }}>
               {item.title}
              </Button>
            ))}
            { !is600To800Device && <Button color={"error"} sx={{ borderRadius: 30 }} size="large" variant="contained" >Donate</Button>}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: config.drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </React.Fragment>
  );
}


export default MainNavBar;
