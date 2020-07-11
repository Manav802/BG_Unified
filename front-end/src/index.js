import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/styles.css'
import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors
const customTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
      },
    },
  };

ReactDOM.render(<App />,document.getElementById('root'));
