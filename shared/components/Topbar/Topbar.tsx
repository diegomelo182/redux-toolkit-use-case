import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import { Menu } from 'shared/components'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { drawerToggle, selectDrawerIsOpen } from '@/redux/slices/drawer/drawer'

export default function Topbar() {
  const dispatch = useAppDispatch()
  const drawerIsOpen = useAppSelector(selectDrawerIsOpen)

  function toggleDrawer() {
    dispatch(drawerToggle(!drawerIsOpen))
  }

  return(
    <>
      <Menu />

      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Redux Toolkit Sample
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
