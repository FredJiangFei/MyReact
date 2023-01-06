import * as React from 'react'
import { Power } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { IconButton } from './../common'
import { Tooltip, Menu, MenuItem } from '@mui/material'
import useAuth from "../../hooks/useAuth";

function NavbarUserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null)
  const navigate = useNavigate()
  const { signOut } = useAuth();

  const toggleMenu = (event: React.SyntheticEvent) => {
    setAnchorMenu(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorMenu(null)
  }

  const handleSignOut = async () => {
    await signOut();
    navigate("/auth/sign-in");
  };

  return (
    <>
      <Tooltip title="Account">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>Profile</MenuItem>
        <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
      </Menu>
    </>
  )
}

export default NavbarUserDropdown
