import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
const logo = require('../assets/kompass-logo-white.png') as string;

/*
This is the main nav bar that sits on the left of the screen and allows users
to toggle between different views of their Kubernetes Metrics (Nodes, Pod, Cluster), Structure, and Alerts.
*/

const drawerWidth = 240;

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const Sidebar = (): JSX.Element => {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position='fixed'
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar style={{ justifyContent: 'flex-end' }}>
          {/* <IconButton aria-label="github icon" component="span">
            <GitHubIcon href="https://github.com/oslabs-beta/Kompass" target="_blank" sx={{ fontSize: 35, color: 'white'}} />
          </IconButton> */}
          {/* <GitHubIcon component={Link} to="http://www.google.com" target="_blank" /> */}
          <a href='https://github.com/oslabs-beta/Kompass' target='_blank'>
            <GitHubIcon sx={{ fontSize: 35, color: 'white' }} />
          </a>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='permanent'
        anchor='left'
      >
        <Toolbar />
        <img src={String(logo)} alt='Kompass' style={{ width: 220 }} />

        <Divider />
        <List>
          <Accordion
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'
            >
              <Typography sx={{ width: '33%', flexShrink: 0 }}>
                Metrics
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List>
                <ListItem disablePadding>
                  <ListItemButton component='a' href='/'>
                    <ListItemText primary='Clusters' />
                  </ListItemButton>
                </ListItem>
                <ListItemButton component='a' href='/namespace'>
                  <ListItemText primary='Namespace' />
                </ListItemButton>
                {/* <ListItem disablePadding>
                  <ListItemButton component='a' href='/pod'>
                  <ListItemText primary='Pods' />
                  </ListItemButton>
                </ListItem> */}
              </List>
            </AccordionDetails>
          </Accordion>
          {['Structure', 'Alerts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton component='a' href={text}>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component='main'
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      ></Box>
    </Box>
  );
};
export default Sidebar;
