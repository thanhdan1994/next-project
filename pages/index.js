import fetch from 'isomorphic-unfetch';
import SuggestBar from '../components/home/SuggestBar.js';
import React, { Component } from 'react';
import HeadHome from '../components/home/HeadHome'
import FeaturedNews from '../components/FeaturedNews.js';
import MiddleContent from '../components/home/MiddleContent.js';
import Video from '../components/home/Video.js';
import Laugh from '../components/home/Laugh.js';
import Entertainment from '../components/home/Entertainment.js';
import Last from '../components/home/Last.js';

class Index extends Component {
  static async getInitialProps() {
    const headers = {
      'authorization': 'Bearer jx76-VNClfMIEZL9sewMJgz0boOHyOJvakUER8ne',
      'req-from': 'frontend',
    }
    //   featured
    const resRegion1 = await fetch('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=1', {
      headers
    })
    const dataRegion1 = await resRegion1.json();
    const dataSuggestBar = (dataRegion1.data.ttc_utils)[0].list;
    const dataFeatured = (dataRegion1.data.ttc_featured_news)[0];
    // list new
    const resDataMiddleSection = await fetch('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=2', {
      headers
    })
    const dataSection = await resDataMiddleSection.json();
    const listPrior = dataSection.data.ttc_custom_list[0].horizontal_2_6.data.list_prior;
    const listNewest = dataSection.data.ttc_custom_list[0].horizontal_2_6.data.list_newest;
    const listSection = {
      listPrior,
      listNewest
    }
    // đáng chú ý
    const resHighlights = await fetch(`${process.env.DOMAIN_API_GATEWAY}/ttc/site?type=feature&slug=ttc-home&region=3`, {
      headers
    })
    const dataAside = await resHighlights.json();
    const listAside = dataAside.data.ttc_custom_list[0].sidebar_table_mostview_mostview;
    const dataMiddle = {
      listAside,
      listSection
    }
    // video
    const resRegion4 = await fetch('https://apittc.tuoitre.vn/ttc/site?type=feature&slug=ttc-home&region=4', {
      headers
    })
    const dataRegion4 = await resRegion4.json();
    const dataVideo = dataRegion4.data.ttc_media[0];
    const dataLaugh = dataRegion4.data.ttc_custom_list[0].horizontal_2.data;
    const dataEntertainment = dataRegion4.data.ttc_custom_list[1].vertical_3.data;
    const listLeft = dataRegion4.data.ttc_custom_list[2].term_2_columns.list_left;
    const listRight = dataRegion4.data.ttc_custom_list[2].term_2_columns.list_right;
    const dataLastBlock = {
      listLeft,
      listRight
    }

    return {
      dataSuggestBar,
      dataFeatured,
      dataMiddle,
      dataVideo,
      dataLaugh,
      dataEntertainment,
      dataLastBlock
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
      <>
        <HeadHome ldJson={ldJson} />
        <div className="main">
          <div className="container">
            <SuggestBar lists={this.props.dataSuggestBar} />
            <FeaturedNews lists={this.props.dataFeatured} />
            <span className="line-border"></span>
            <MiddleContent lists={this.props.dataMiddle} />
            <span className="line-border"></span>
            <Video lists={this.props.dataVideo} />
            <span className="line-border"></span>
            <Laugh data={this.props.dataLaugh} />
            <span className="line-border"></span>
            <Entertainment data={this.props.dataEntertainment} />
            <span className="line-border"></span>
            <Last dataLeft={this.props.dataLastBlock.listLeft} dataRight={this.props.dataLastBlock.listRight} />
          </div>
        </div>
      </>
    )
  }
}

export default Index