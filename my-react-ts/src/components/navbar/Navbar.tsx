import * as React from 'react';
import { withTheme } from 'styled-components/macro';
import { Grid, AppBar, Toolbar } from '@mui/material';
import NavbarMessagesDropdown from './NavbarMessagesDropdown';
import NavbarLanguagesDropdown from './NavbarLanguagesDropdown';
import NavbarUserDropdown from './NavbarUserDropdown';
import useAuth from '../../hooks/useAuth';

type NavbarProps = {
  theme: {}
};

const Navbar: React.FC<NavbarProps> = () => {
  const { user } = useAuth();

  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container>
            <Grid item xs />
            <Grid item>
              Hello, { user?.name }
              <NavbarMessagesDropdown />
              <NavbarLanguagesDropdown />
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withTheme(Navbar);
