import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Popover as MuiPopover,
  Tooltip,
  Typography,
} from '@mui/material'
import { MessageSquare } from 'react-feather'

const Popover = styled(MuiPopover)`
  .MuiPaper-root {
    width: 300px;
  }
`

const MessageHeader = styled(Box)`
  text-align: center;
`

function Message({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <ListItem divider component={Link} to="#">
      <ListItemAvatar>
        <Avatar src={image} alt="Avatar" />
      </ListItemAvatar>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: 'subtitle2',
          color: 'textPrimary',
        }}
        secondary={description}
      />
    </ListItem>
  )
}

function NavbarMessagesDropdown() {
  const ref = useRef(null)
  const [isOpen, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <Tooltip title="Messages">
        <IconButton color="inherit" ref={ref} onClick={handleOpen} size="large">
          <MessageSquare />
        </IconButton>
      </Tooltip>
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
      >
        <MessageHeader p={2}>
          <Typography variant="subtitle1" color="textPrimary">
            3 New Messages
          </Typography>
        </MessageHeader>
        <React.Fragment>
          <List disablePadding>
            <Message
              title="Lucy Lavender"
              description="Nam pretium turpis et arcu. Duis arcu tortor."
              image="/static/img/avatars/avatar-1.jpg"
            />
            <Message
              title="Remy Sharp"
              description="Curabitur ligula sapien euismod vitae."
              image="/static/img/avatars/avatar-2.jpg"
            />
            <Message
              title="Cassandra Mixon"
              description="Pellentesque auctor neque nec urna."
              image="/static/img/avatars/avatar-3.jpg"
            />
          </List>
          <Box p={1} display="flex" justifyContent="center">
            <Button size="small" component={Link} to="#">
              Show all messages
            </Button>
          </Box>
        </React.Fragment>
      </Popover>
    </React.Fragment>
  )
}

export default NavbarMessagesDropdown
