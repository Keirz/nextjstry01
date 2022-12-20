
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'

import React from 'react';
import Header from './componentes/Header';

import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Header />
   <Component {...pageProps} />
   
   <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />
      
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
</>
  )
}

export default MyApp
