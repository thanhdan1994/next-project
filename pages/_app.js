import React from 'react';
import App, { Container } from 'next/app';
import MyLayout from '../components/MyLayout';
import { UserProvider } from '../components/UserContext';
// import { CookiesProvider } from 'react-cookie';


export default class AppLayout extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      // <CookiesProvider>
        <Container>
          <UserProvider>
            <MyLayout>
              <Component {...pageProps} />
            </MyLayout>
          </UserProvider>
        </Container>
      // </CookiesProvider>
    )
  }
}