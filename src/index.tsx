import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';

import bgProps, { BgGroupProps } from './groups/bg-props';
import fontProps, { FontGroupProps } from './groups/font-props';
import sizeProps, { SizeGroupProps } from './groups/size-props';

const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #3c40c6;
    --color-secondary: #d2dae2;
    --color-success: #05c46b;
    --color-danger: #ff5e57;
    --color-light: #fff;
    --color-dark: #1e272e;

    --space-scale: 4px;
    --radii-scale: 2px;

    --font-size-h1: 36px;
    --font-size-h2: 28px;
    --font-size-h3: 20px;
    --font-size-h4: 11px;
    --font-size-b1: 18px;
    --font-size-b2: 15px;
    --font-size-b3: 13px;
    --font-size-tiny: 11px;

    --font-family-sans: -apple-system, BlinkMacSystemFont, sans-serif;
    }

  * {
    margin: 0;
    padding: 0;
  }
`;

interface BoxProps extends FontGroupProps, SizeGroupProps, BgGroupProps {}

const Box = styled('div')<BoxProps>`
  --box-size: 200px;

  display: inline-block;
  height: var(--box-size);
  width: var(--box-size);;
  ${fontProps}
  ${sizeProps}
  ${bgProps}
`;

Box.defaultProps = {
  fontColor: 'dark',
  fontFamily: 'sans',
};

const Button = styled(Box)``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Box
        p={5}
        mt="calc(50vh - var(--box-size))"
        ml="calc(50vw - 100px)"
        bg="success"
      >
        <Button
          bg="primary"
          fontSize="h1"
          fontStyle="oblique"
          fontColor="secondary"
          fontWeight="bold"
        >
          Hello
        </Button>
      </Box>
    </>
  );
};

const hi = sizeProps;

ReactDOM.render(<App />, document.getElementById('root'));
