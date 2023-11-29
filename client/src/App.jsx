import * as React from 'react';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { MixProvider } from './MixContext';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#933810',
    },
    secondary: {
      main: '#5B3330',
    },
    background: {
      default: '#c9c5b0',
      paper: '#ed8c40',
    },
    error: {
      main: '#264653',
      light: '#757761',
    },
  },
});
  //   palette: {
//     mode: 'light',
//     primary: {
//       main: '#37853a',
//     },
//     secondary: {
//       main: '#f50057',
//       light: '#f53377',
//     },
//     background: {
//       default: '#fff3e0',
//       paper: '#fbf6f6',
//     },
//     error: {
//       main: '#d50000',
//     },
//     divider: '#f50057',
//     text: {
//       primary: 'rgba(0,0,0,0.87)',
//       secondary: '#fbebee',
//     },
//   },
//   shape: {
//     borderRadius: 4,
//   },
// })


export default function AppContainer() {
  return (
    <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <MixProvider>
            <Header/>
            <Container sx={{ marginTop: 20, marginBottom: 2 }}>
              <Outlet />
            </Container>
        </MixProvider>
      </React.Fragment>
    </ThemeProvider>
    </ApolloProvider>
  );
}