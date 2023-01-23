import { KeyboardEvent, MouseEvent } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'

import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { drawerToggle, selectDrawerIsOpen, selectDrawerMenuItems } from '@/redux/slices/drawer/drawer'

export default function Menu() {
  const dispatch = useAppDispatch()

  const isOpen = useAppSelector(selectDrawerIsOpen)
  const menuItemsList = useAppSelector(selectDrawerMenuItems)

  const icons: { [key: string]:  JSX.Element } = {
    inboxIcon: <InboxIcon />,
    mailIcon: <MailIcon />,
  }

  const iconWrapper = (icon: string) => {
    if (icons[icon]) return icons[icon]

    return <InboxIcon />
  }

  const toggleDrawer =
    (open: boolean) =>
    (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      dispatch(drawerToggle(open))
    }

  const menuItems = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItemsList?.map((menuItem) => (
          <ListItem key={menuItem.text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{iconWrapper(menuItem.icon)}</ListItemIcon>
              <ListItemText primary={menuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      anchor={'left'}
      open={isOpen}
      onClose={toggleDrawer(false)}
    >
      {menuItems()}
    </Drawer>
  )
}
