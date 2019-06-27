import React from 'react';
import App, { Container } from 'next/app';
import MyLayout from '../components/MyLayout';


export default class AppLayout extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <MyLayout>
          <Component {...pageProps} />
        </MyLayout>
      </Container>
    )
  }
}