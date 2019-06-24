import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import SuggestBar from '../components/home/SuggestBar.js';
import Featured from '../components/Featured.js';
import MiddleContent from '../components/home/MiddleContent.js';
import Video from '../components/home/Video.js';
import Laugh from '../components/home/Laugh.js';
import Entertainment from '../components/home/Entertainment.js';
import Last from '../components/home/Last.js';
import React, { Component } from 'react';
import HeadHome from '../components/home/HeadHome'
import Footer from '../components/Footer.js';
import axios from 'axios';
import FeaturedNews from '../components/FeaturedNews.js';

export default class Index extends Component {
  static async getInitialProps() {
    const resRegion1 = await fetch('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=1', {
      headers: {
        'authorization': 'Bearer jx76-VNClfMIEZL9sewMJgz0boOHyOJvakUER8ne',
        'req-from': 'frontend',
      }
    })
    const dataRegion1 = await resRegion1.json();
    const dataSuggestBar = (dataRegion1.data.ttc_utils)[0];
    const dataFeatured = (dataRegion1.data.ttc_featured_news)[0];
    const res = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=8&page=1');
    const listFeatured = await res.json();
    const res2 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=2');
    const dataMiddleSection = await res2.json();
    const res3 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=5');
    const dataMiddleAside = await res3.json();
    const res4 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=6');
    const listVideo = await res4.json();
    const res5 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=8');
    const listLaugh = await res5.json();
    const res6 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=12');
    const listEntertainment = await res6.json();
    const res7 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=3');
    const listYounger = await res7.json();
    const res8 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=4&page=4');
    const listSport = await res8.json();

    return {
      dataSuggestBar,
      dataFeatured,
      listFeatured: listFeatured,
      dataMiddle: {
        listSection: dataMiddleSection,
        listAside: dataMiddleAside
      },
      listVideo: listVideo,
      listLaugh: listLaugh,
      listEntertainment: listEntertainment,
      dataLastBlock: {
        listYounger: listYounger,
        listSport: listSport
      }
    }
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
      "@type": "WebSite",
      "name": "ttc.vn - Tin tức 24h, hình ảnh ấn tượng",
      "alternateName": "Cập nhật tin tức mới và nóng nhất về Đời sống - Xã hội, Kinh tế, Thế giới, Thể thao, Giải trí, Công nghệ và nhiều lĩnh vực khác…",
      "dateModified": "",
      "url": ""
    }
    return (
      <Layout>
        <HeadHome ldJson={ldJson} />
        <div className="main">
          <div className="container">
            <SuggestBar lists={this.props.dataSuggestBar}/>
            <FeaturedNews lists={this.props.dataFeatured} />
            {/* <Featured lists={this.props.listFeatured} /> */}
            <span className="line-border"></span>
            <MiddleContent lists={this.props.dataMiddle} />
            <span className="line-border"></span>
            <Video lists={this.props.listVideo} />
            <span className="line-border"></span>
            <Laugh lists={this.props.listLaugh} />
            <span className="line-border"></span>
            <Entertainment lists={this.props.listEntertainment} />
            <span className="line-border"></span>
            <Last younger={this.props.dataLastBlock.listYounger} sport={this.props.dataLastBlock.listSport} />
          </div>
        </div>
        <Footer />
        <a href="javascript:void(0)" title="top" className="btn-top"><i className="fa fa-chevron-up" /></a>
        <style jsx>{`
        
        `}</style>
      </Layout>
    )
  }
}