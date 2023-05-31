import Layout from '../src/components/layout';
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/main.scss'
import '../src/styles/freelancer.scss'
import Head from "next/head";
import Script from "next/script";
import {useEffect} from "react";

export default function MyApp({Component, pageProps}) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="viewport" content="width=device-width"/>
            <meta name="description"
                  content="Discover SEN Tutoring Services. Specialized, one-on-one support to enhance learning for children with SEN. Expert tutor, personalized strategies."/>
            <meta name="keywords"
                  content="SEN Tutoring,SEN Learning Strategies,SEN Tutoring Services,SEN Curriculum Support,SEN Teaching Techniques,Private SEN Tutors,One-on-One SEN Tutoring"/>
            <meta name="author" content="Ewa Coates"/>
            <link rel="canonical" href="https://www.sen-tutor.co.uk/"/>
            <meta property="og:locale" content="en_GB"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content="SEN Tutor | Special Needs Tuition | Eva Coates"/>
            <meta property="og:description"
                  content="Discover SEN Tutoring Services. Specialized, one-on-one support to enhance learning for children with SEN. Expert tutor, personalized strategies."/>
            <meta property="og:url" content="https://www.sen-tutor.co.uk/"/>
            <meta property="og:site_name" content="Sen Tutor"/>

            <meta property="og:image" content="https://www.sen-tutor.co.uk/img/profile.png"/>
            <meta property="og:image:width" content="401"/>
            <meta property="og:image:height" content="520"/>
            <meta property="og:image:type" content="image/png"/>



        </Head>
        <Layout>
            <Component {...pageProps} />
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
                strategy="beforeInteractive" id="google-analytics-lib"
            />
            <Script id="google-analytics" strategy="beforeInteractive">
                {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){window.dataLayer.push(arguments);}
                  gtag('js', new Date());
        
                  gtag('config', 'G-FHXQWC3EKV');
                `}
            </Script>
            <Script strategy="beforeInteractive" id="freelancer-js">
                {`
                  window.addEventListener('DOMContentLoaded', event => {
                
                    // Navbar shrink function
                    var navbarShrink = function () {
                        const navbarCollapsible = document.body.querySelector('#mainNav');
                        if (!navbarCollapsible) {
                            return;
                        }
                        if (window.scrollY === 0) {
                            navbarCollapsible.classList.remove('navbar-shrink')
                        } else {
                            navbarCollapsible.classList.add('navbar-shrink')
                        }
                
                    };
                
                    // Shrink the navbar
                    navbarShrink();
                
                    // Shrink the navbar when page is scrolled
                    document.addEventListener('scroll', navbarShrink);
                
                
                    // Collapse responsive navbar when toggler is visible
                    const navbarToggler = document.body.querySelector('.navbar-toggler');
                    const responsiveNavItems = [].slice.call(
                        document.querySelectorAll('#navbarResponsive .nav-link')
                    );
                    responsiveNavItems.map(function (responsiveNavItem) {
                        responsiveNavItem.addEventListener('click', () => {
                            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                                navbarToggler.click();
                            }
                        });
                    });
                
                });
                `}
            </Script>
        </Layout>
    </>
}