import GlobalCSS from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import React from 'react'

const AppProvider = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalCSS />
    {children}
  </ThemeProvider>
)

export default AppProvider
