import React, { Component } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
// import Footer from '../components/footer/footer'
import customTheme from '../../public/assets/js/theme'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flickity/dist/flickity.min.css';
import '../../public/assets/scss/styles.scss'

import App from 'next/app';

import Router from 'next/router';

import Loader from '../components/loader/Loader';
import config from 'react-reveal/globals';

config({ ssrFadeout: true });

export default class MyApp extends App {
    state = {
        loading: true,
    }

    componentDidMount(){
        window.onload= ()=>{
            this.setState({
            loading: false}
            )
        }  
    }
        
    render() {
      const { Component, pageProps } = this.props;
      const { loading } = this.state;

      Router.events.on('routeChangeStart', () =>
          this.setState({ loading: true })
      );
      Router.events.on('routeChangeComplete', () =>
          this.setState({ loading: false })
      );
      Router.events.on('routeChangeError', () =>
          this.setState({ loading: false })
      );

      return loading ? <Loader/> : ( 
        <ThemeProvider theme={customTheme}>		
        <CSSReset />
            <Header></Header>
            <Component {...pageProps} />
            <Footer></Footer>
        </ThemeProvider>
    );
    }
}
