import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import SuggestBar from '../components/home/SuggestBar.js';
import Featured from '../components/home/Featured.js';
import MiddleContent from '../components/home/MiddleContent.js';
import Video from '../components/home/Video.js';
import Laugh from '../components/home/Laugh.js';
import Entertainment from '../components/home/Entertainment.js';
import Last from '../components/home/Last.js';

const Index = props => (
  <Layout>
    <Head>
      <title>TUỔI TRẺ CƯỜI | INDEX</title>
      <meta name="description" content="" />
      <meta name="keywords" content="" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
      <link href="/static/css/style.min.css" rel="stylesheet" />
      {/* <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" /> */}
      {/* GENERAL GOOGLE SEARCH META */}
      <script type="application/ld+json">
        {`
            "@context" : "http://schema.org",
            "@type" : "WebSite",
            "name" : "TTC.vn - Tin tức 24h, hình ảnh ấn tượng",
            "alternateName" : "Cập nhật tin tức mới và nóng nhất về Đời sống - Xã hội, Kinh tế, Thế giới, Thể thao, Giải trí, Công nghệ và nhiều lĩnh vực khác…",
            "dateModified": "",
            "url" : ""
          `}
      </script>
    </Head>
    <div className="main">
      <div className="container">
        <SuggestBar />
        <Featured lists={props.listFeatured} />
        <span className="line-border"></span>
        <MiddleContent lists={props.dataMiddle} />
        <span className="line-border"></span>
        <Video lists={props.listVideo} />
        <span className="line-border"></span>
        <Laugh lists={props.listLaugh} />
        <span className="line-border"></span>
        <Entertainment lists={props.listEntertainment} />
        <span className="line-border"></span>
        <Last younger={props.dataLastBlock.listYounger} sport={props.dataLastBlock.listSport} />
      </div>
    </div>
  </Layout>
);

Index.getInitialProps = async function () {
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
    // show2: data2.map(entry => entry.show)
  };
};

export default Index;