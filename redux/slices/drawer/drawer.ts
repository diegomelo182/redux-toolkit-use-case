import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from 'redux/store'

interface DrawerState {
  isOpen: boolean
  menuItems: { path: string, text: string, icon: string }[]
}

const initialState: DrawerState = {
  isOpen: false,
  menuItems: [
    { path: '', text: 'Inbox', icon: 'inboxIcon' },
    { path: '', text: 'Starred', icon: 'mailIcon' },
    { path: '', text: 'Send email', icon: 'inboxIcon' },
    { path: '', text: 'Drafts', icon: 'mailIcon' },
  ]
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    drawerToggle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { drawerToggle } = drawerSlice.actions

export const selectDrawerIsOpen = (state: RootState) => state.drawer.isOpen
export const selectDrawerMenuItems = (state: RootState) => state.drawer.menuItems

export default drawerSlice.reducer
