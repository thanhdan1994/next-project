import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import DetailObject from '../components/detail/DetailObject.js';
import YouCanCare from '../components/detail/YouCanCare.js';
import LastBlock from '../components/detail/LastBlock.js';
import JsonLd from '../components/JsonLd';
import React, { Component } from 'react';

export default class Post extends Component {
  static async getInitialProps(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tuoitre.vn/mobileapp/objectdetail?token=da039e81&id=${id}`);
    const objectDetail = await res.json();
    const res2 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=2');
    const listHighlights = await res2.json();
    const res3 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=3');
    const listYouCanCare = await res3.json();
    const res4 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=1&page=1');
    const prior = await res4.json();
    const res5 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=5');
    const listLastBlock = await res5.json();

    return {
      objectDetail: objectDetail,
      listHighlights: listHighlights,
      listYouCanCare: listYouCanCare,
      dataLastBlock: {
        prior: prior,
        listLastBlock: listLastBlock
      }
    };
  }

  componentDidMount() {
    if ($(".btn-top").length > 0) {
      $(window).scroll(function () {
        var e = $(window).scrollTop();
        if (e > 100) {
          $(".btn-top").show()
        } else {
          $(".btn-top").hide()
        }
      });
      $(".btn-top").click(function () {
        $('body,html').animate({
          scrollTop: 0
        })
      });
    }
  }

  render() {
    const ldJson = {
      "@context": "http://schema.org",
      "@type": "NewsArticle",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://tuoitrecuoi.vn/post/"
      },
      "headline": this.props.objectDetail.title,
      "description": this.props.objectDetail.description,
      "image": {
        "@type": "ImageObject",
        "url": this.props.objectDetail.thumb_link,
        "width": 720,
        "height": 480
      },
      "datePublished": this.props.objectDetail.time_published,
      "dateModified": this.props.objectDetail.time_updated,
      "author": {
        "@type": "Person",
        "name": this.props.objectDetail.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "tuoitrecuoi.vn",
        "logo": {
          "@type": "ImageObject",
          "url": "https://tuoitrecuoi.vn/logo.jpg",
          "width": 300
        }
      }
    }
    return (
      <>
        <Head>
          <title>{this.props.objectDetail.title} - Tuổi trẻ cười</title>
          <meta name="description" content={this.props.objectDetail.description} />
          <meta name="keywords" content="" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          {/*  Open Graph tags  */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={this.props.objectDetail.title + ' - Tuổi trẻ cười'} />
          <meta property="og:description" content={this.props.objectDetail.description} />
          <meta property="og:image" content={this.props.objectDetail.thumb_link} />
          <meta property="og:url" content={'http://tuoitrecuoi.vn/post/' + this.props.objectDetail.object_id} />
          <meta property="og:site_name" content="tuoitrecuoi.vn" />
          <meta property="fb:admins" content="https://www.facebook.com/tuoitrecuoi" />
          {/* Twitter */}
          <meta name="twitter:title" content={this.props.objectDetail.title + ' - Tuổi trẻ cười'} />
          <meta name="twitter:description" content={this.props.objectDetail.description} />
          <meta name="twitter:image" content={this.props.objectDetail.thumb_link} />
          <meta name="twitter:site" content="tuoitrecuoi.vn" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
          <link href="/static/css/style.min.css" rel="stylesheet" />
          <script src="/static/js/lib.min.js"></script>
          <script src="//player.tuoitre.vn/player/static/playerInit.js"></script>
          {/* GENERAL GOOGLE SEARCH META */}
          <JsonLd data={ldJson} />
        </Head>
        <div className="main">
          <div className="container">
            <DetailObject detail={this.props.objectDetail} lists={this.props.listHighlights} />
            <YouCanCare lists={this.props.listYouCanCare} />
            <span className="line-border"></span>
            <LastBlock prior={this.props.dataLastBlock.prior} lists={this.props.dataLastBlock.listLastBlock} />
          </div>
        </div>
      </>
    )
  }
}