import * as React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';

const theme = createTheme({
  palette: {
    background: { primary: '#E8EEF2'}
  }
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