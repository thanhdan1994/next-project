import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import DetailObject from '../components/detail/DetailObject.js';
import YouCanCare from '../components/detail/YouCanCare.js';
import LastBlock from '../components/detail/LastBlock.js';
import Ads from '../components/detail/Ads.js';

const Post = props => (
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
      {/* GENERAL GOOGLE SEARCH META */}
      <script type="application/ld+json">

      </script>
      <script type="text/javascript" src="/static/js/ads.js"></script>
      <script id="arf-core-js" onerror="window.admerrorload=true;" src="https://media1.admicro.vn/cms/Arf.min.js" async></script>
    </Head>
    <div className="main">
      <div className="container">
        <DetailObject detail={props.objectDetail} lists={props.listHighlights} />
        <YouCanCare lists={props.listYouCanCare} />
        <span className="line-border"></span>
        <LastBlock prior={props.dataLastBlock.prior} lists={props.dataLastBlock.listLastBlock}/>
        <Ads id="qc1" code="jmvf5po0"/>
      </div>
    </div>
  </Layout>
);

Post.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(`http://api.tuoitre.vn/mobileapp/objectdetail?token=da039e81&id=${id}`);
  const objectDetail = await res.json();
  const res2 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=2');
  const listHighlights = await res2.json();
  const res3 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=3');
  const listYouCanCare = await res3.json();
  const res4 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=1&page=1');
  const prior = await res4.json();
  const res5 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=5&page=5');
  const listLastBlock = await res5.json();

  console.log(`Object Title: ${objectDetail.title}`);

  return {
    objectDetail: objectDetail,
    listHighlights: listHighlights,
    listYouCanCare: listYouCanCare,
    dataLastBlock: {
      prior: prior,
      listLastBlock: listLastBlock
    }
  };
};

export default Post;