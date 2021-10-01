import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head'; //everything inside of head will be automatically moved up to the head of our document
import Header from './Header';

const Layout = (props) => {
    return (
        <Container>
            <Head>
                <link
                    async
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
                />
            </Head>
            <Header />
            {props.children}
        </Container>
    );
};

export default Layout;