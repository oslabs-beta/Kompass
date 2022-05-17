import React from 'react';
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
import Link from '@mui/material/Link';
const logo = require('../assets/kompass-logo-gradient-2.png') as string;

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
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
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
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <img src={String(logo)} alt='Kompass' style={{width:200}}  />
        <Divider />
        <List>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Metrics
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/node">
                <ListItemText primary="Nodes" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="/pod">
                <ListItemText primary="Pods" />
              </ListItemButton>
            </ListItem>
            <ListItemButton component="a" href="cluster">
              <ListItemText primary="Clusters" />
            </ListItemButton>
          </List>
                
        </AccordionDetails>
      </Accordion>
          {['Structure', 'Alerts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default' , p: 3 }}
      >
      </Box>
    </Box>
  )
};
export default Sidebar;