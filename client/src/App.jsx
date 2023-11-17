import * as React from 'react';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';

export default function App() {
  return (
    <CssVarsProvider>
      <Sheet variant="outlined">GORP</Sheet>
    </CssVarsProvider>
  );
}