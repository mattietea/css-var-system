import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { bg, fontColor, fontFamily, ml, mr, mt } from './utils/create-prop';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #3c40c6;
    --color-secondary: #d2dae2;
    --color-success: #05c46b;
    --color-danger: #ff5e57;
    --color-light: #fff;
    --color-dark: #1e272e;

    --font-family-sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --space-scale: 4px;
    --font-size-scale: 4px;
    --radii-scale: 2px;
  }

  * {
    margin: 0;
    padding: 0;
  }
`;

interface BoxProps {
  bg?: string;
  fontColor?: string;
  fontFamily?: string;
  ml?: number | string;
  mr?: number | string;
  mt?: number | string;
}

const Box = styled('div')<BoxProps>`
  ${bg}
  ${fontColor}
  ${fontFamily}
  ${ml}
  ${mr}
  ${mt}
`;

Box.defaultProps = {
  bg: 'primary',
  fontColor: 'light',
  fontFamily: 'sans',
};

const Button = styled(Box)`
  height: 200px;
  width: 200px;
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box bg="#fff">
        <Button mt="calc(50vh - 100px)" mr="auto" ml="auto" bg="success">
          My Box
        </Button>
      </Box>
    </>
  );
};

export default App;
