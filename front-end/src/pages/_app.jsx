import React, { Component } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import customTheme from '../static/js/theme.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flickity/dist/flickity.min.css';
import '../scss/styles.scss'

export default function App({ Component, pageProps }) {
    return ( 
        <ThemeProvider theme={customTheme}>		
        <CSSReset />
        <Component {...pageProps} />
        </ThemeProvider>
    );
  }
