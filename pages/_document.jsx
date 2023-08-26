import { Html, Head, Main, NextScript } from 'next/document';
import Script from "next/script";


export default function Document() {
    return (
        <Html lang='en'>
            <Head />
            <body>
                <Main />
                <NextScript />
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
            </body>
        </Html>
    );
}