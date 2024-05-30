import React from 'react';
import { Link } from 'react-router-dom';
import { Box, List, ListItem, ListItemText } from '@mui/material';

function Navbar() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem button component={Link} to="/dashboard">
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem button component={Link} to="/transactions">
            <ListItemText primary="Transactions" />
          </ListItem>
          <ListItem button component={Link} to="/balance-sheet">
            <ListItemText primary="Balance Sheet" />
          </ListItem>
          <ListItem button component={Link} to="/reports">
            <ListItemText primary="Reports" />
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}

export default Navbar;
