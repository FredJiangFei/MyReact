import * as React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/macro'
import { IconButton } from './../common'
import { Tooltip, Menu, MenuItem } from '@mui/material'

const Flag = styled.img`
  border-radius: 50%;
  width: 22px;
  height: 22px;
`

type languageOptionsType = {
  [key: string]: {
    icon: string
    name: string
  }
}

const languageOptions: languageOptionsType = {
  en: {
    icon: '/static/img/flags/us.png',
    name: 'English',
  },
  fr: {
    icon: '/static/img/flags/fr.png',
    name: 'French',
  },
  de: {
    icon: '/static/img/flags/de.png',
    name: 'German',
  },
  nl: {
    icon: '/static/img/flags/nl.png',
    name: 'Dutch',
  },
}

function NavbarLanguagesDropdown() {
  const { i18n } = useTranslation()
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null)

  const selectedLanguage = languageOptions[i18n.language]

  const toggleMenu = (event: React.SyntheticEvent) => {
    setAnchorMenu(event.currentTarget)
  }

  const closeMenu = () => {
    setAnchorMenu(null)
  }

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language)
    closeMenu()
  }

  return (
    <>
      <Tooltip title="Languages">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Flag src={selectedLanguage.icon} alt={selectedLanguage.name} />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        {Object.keys(languageOptions).map((language) => (
          <MenuItem
            key={language}
            onClick={() => handleLanguageChange(language)}
          >
            {languageOptions[language].name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default NavbarLanguagesDropdown
