import React, { Component } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import customTheme from '../../public/assets/js/theme'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flickity/dist/flickity.min.css';
import '../../public/assets/scss/styles.scss'

export default function App({ Component, pageProps }) {
    return ( 
        <ThemeProvider theme={customTheme}>		
        <CSSReset />
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </ThemeProvider>
    );
  }
