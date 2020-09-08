import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        AOS.init({
            once: true,
        });
    });
    return <Component {...pageProps}/>
}