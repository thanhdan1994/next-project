import React from 'react';
import Head from 'next/head'

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }

  render() {
    return (
      <>
        <Head>
          <link href="/static/css/style.min.css" rel="stylesheet" />
          <script src="/static/js/lib.min.js"></script>
          {/* GENERAL GOOGLE SEARCH META */}
        </Head>
        <p>
          {this.props.statusCode
            ? `An error ${this.props.statusCode} occurred on server`
            : 'An error occurred on client'}
        </p>
      </>
    );
  }
}

export default Error;