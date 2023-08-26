import Layout from '@/components/layout.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/main.scss'
import '../src/styles/freelancer.scss'
import Head from "next/head";
import {useEffect} from "react";
import { useRouter } from 'next/router';

export default function MyApp({Component, pageProps}) {
    const { pathname } = useRouter();

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.js");
    }, []);

    const title = "SEN Tutor | Special Needs Tuition | Eva"
    const canonical = `https://kizie.co` + pathname;

    return <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="viewport" content="width=device-width"/>
            <meta name="description"
                  content="Discover SEN Tutoring Services. Specialized, one-on-one support to enhance learning for children with SEN. Expert tutor, personalized strategies."/>
            <meta name="keywords"
                  content="SEN Tutoring,SEN Learning Strategies,SEN Tutoring Services,SEN Curriculum Support,SEN Teaching Techniques,Private SEN Tutors,One-on-One SEN Tutoring"/>
            <meta name="author" content="Ewa Coates"/>
            <link rel="canonical" href={`https://www.sen-tutor.co.uk/${canonical}`}/>
            <meta property="og:locale" content="en_GB"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title}/>
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

        </Layout>
    </>
}