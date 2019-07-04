import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import DetailObject from '../components/detail/DetailObject.js';
import YouCanCare from '../components/detail/YouCanCare.js';
import LastBlock from '../components/detail/LastBlock.js';
import JsonLd from '../components/JsonLd';
import React, { Component } from 'react';

export default class Post extends Component {
  static async getInitialProps(context) {
    const headers = {
      'authorization': 'Bearer jx76-VNClfMIEZL9sewMJgz0boOHyOJvakUER8ne',
      'req-from': 'frontend',
    }
    const { id } = context.query;
    const res = await fetch(`https://apittc.tuoitre.vn/ttc/detail?preslug=ttc&slug=post&region=1&id=${id}`, {headers})
    const dataRegion1 = await res.json();
    const listTag = dataRegion1.data.ttc_utils[0].list
    const termPrimary = dataRegion1.data.ttc_utils[1].term;
    const res2 = await fetch(`https://apittc.tuoitre.vn/ttc/detail?preslug=ttc&slug=post&region=2&id=${id}`, {headers});
    const dataRegion2 = await res2.json();
    const objectDetail = dataRegion2.data.ttc_content_detail[0];
    const res3 = await fetch(`https://apittc.tuoitre.vn/ttc/detail?preslug=ttc&slug=post&region=3&id=${id}`, {headers});
    const dataRegion3 = await res3.json();
    const listHighlights = dataRegion3.data.ttc_custom_list[0].sidebar_table_mostview_mostview;
    const res4 = await fetch(`https://apittc.tuoitre.vn/ttc/detail?preslug=ttc&slug=post&region=4&id=${id}`, {headers});
    const dataRegion4 = await res4.json();
    const listYouCanCare = dataRegion4.data.ttc_content_detail[0].detail_list_more
    const dataLastBlock = dataRegion4.data.ttc_custom_list[0].detail_newest;

    return {
      listTag,
      termPrimary,
      objectDetail: objectDetail,
      listHighlights: listHighlights,
      listYouCanCare: listYouCanCare,
      dataLastBlock: dataLastBlock
    };
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
          <meta name="description" content={this.props.objectDetail.object_excerpt} />
          <meta name="keywords" content="" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          {/*  Open Graph tags  */}
          <meta property="og:type" content="article" />
          <meta property="og:title" content={this.props.objectDetail.object_title + ' - Tuổi trẻ cười'} />
          <meta property="og:description" content={this.props.objectDetail.object_excerpt} />
          <meta property="og:image" content={this.props.objectDetail.thumb_link} />
          <meta property="og:url" content={'http://tuoitrecuoi.vn/post/' + this.props.objectDetail.id} />
          <meta property="og:site_name" content="tuoitrecuoi.vn" />
          <meta property="fb:admins" content="https://www.facebook.com/tuoitrecuoi" />
          {/* Twitter */}
          <meta name="twitter:title" content={this.props.objectDetail.object_title + ' - Tuổi trẻ cười'} />
          <meta name="twitter:description" content={this.props.objectDetail.object_excerpt} />
          <meta name="twitter:image" content={this.props.objectDetail.thumb_link} />
          <meta name="twitter:site" content="tuoitrecuoi.vn" />
          <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
          <link href="/static/css/style.min.css" rel="stylesheet" />
          <link href="/static/css/video-js.css" rel="stylesheet" />
          <link href="/static/css/custom-videojs.css" rel="stylesheet" />
          <link href="//player.tuoitre.vn/player/static/vpcustom.css" type="text/css" rel="stylesheet"></link>
          <script src="/static/js/lib.min.js"></script>
          <script src="/static/js/lazysizes.min.js"></script>
          <script src="/static/js/start.min.js" async></script>
          <script src="/static/js/convert-img.js" async></script>
          <script src="//player.tuoitre.vn/player/static/playerInit.js" async></script>
          {/* GENERAL GOOGLE SEARCH META */}
          <JsonLd data={ldJson} />
        </Head>
        <div className="main">
          <div className="container">
            <DetailObject termPrimary={this.props.termPrimary} tags={this.props.listTag} detail={this.props.objectDetail.detail} listHighlights={this.props.listHighlights}/>
            <YouCanCare listYouCanCare={this.props.listYouCanCare} />
            <span className="line-border"></span>
            <LastBlock dataLastBlock={this.props.dataLastBlock} />
            <input type="hidden" name="hidObjectId" defaultValue={this.props.objectDetail.detail.id} />
            <input type="hidden" name="hidObjectTitle" defaultValue={this.props.objectDetail.detail.object_title} />
            <input type="hidden" name="hidFilter" defaultValue="like" />
            <input type="hidden" name="hidTermId" defaultValue={this.props.objectDetail.detail.term_primary} />
            <input type="hidden" name="hidUserIp" />
          </div>
        </div>
      </>
    )
  }
}