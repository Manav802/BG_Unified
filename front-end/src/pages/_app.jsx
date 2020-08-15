import React, { Component } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
// import Footer from '../components/footer/footer'
import customTheme from '../../public/assets/js/theme'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flickity/dist/flickity.min.css';
import '../../public/assets/scss/styles.scss'

import 'react-chat-widget/lib/styles.css';

import App from 'next/app';
import Head from 'next/head'
import Router from 'next/router';

import dynamic from "next/dynamic";

const ChatBot = dynamic(
  () => {
    return import("../components/ChatBot/ChatBot");
  },
  { ssr: false }
);
// import Loader from '../components/loader/Loader';

import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress


import config from 'react-reveal/globals';

config({ ssrFadeout: true });



export default class MyApp extends App {
    // constructor() {
    //     super();
    //     this.state = { loading: true }
    // }
    

    // componentDidMount(){
    //     window.onload= ()=>{
    //         this.setState({
    //         loading: false}
    //         )
    //     }  
    // }
        
    render() {
      const { Component, pageProps } = this.props;
    //   const { loading } = this.state;
    NProgress.configure({ showSpinner: false });
      Router.events.on('routeChangeStart', () => NProgress.start()); 
      Router.events.on('routeChangeComplete', () => NProgress.done()); 
      Router.events.on('routeChangeError', () => NProgress.done());

    //   Router.events.on('routeChangeStart', () =>
    //       this.setState({ loading: true })
    //   );
    //   Router.events.on('routeChangeComplete', () =>
    //       this.setState({ loading: false })
    //   );
    //   Router.events.on('routeChangeError', () =>
    //       this.setState({ loading: false })
    //   );

      return ( 
        <ThemeProvider theme={customTheme}>		
          <Head>
            <script type="text/javascript" src="/assets/js/chatbot.js"></script>
          </Head>
          <CSSReset />
          <Header></Header>
          <Component {...pageProps} />
          <Footer></Footer>
        </ThemeProvider>
    );
    }
}
