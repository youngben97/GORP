import * as React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#37853a',
    },
    secondary: {
      main: '#f50057',
      light: '#f53377',
    },
    background: {
      default: '#fff3e0',
      paper: '#fbf6f6',
    },
    error: {
      main: '#d50000',
    },
    divider: '#f50057',
    text: {
      primary: 'rgba(0,0,0,0.87)',
      secondary: '#fbebee',
    },
  },
  shape: {
    borderRadius: 4,
  },
})


export default function AppContainer() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
            <Header/>
            <Container sx={{ marginTop: 2, marginBottom: 2 }}>
              <Outlet />
            </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}