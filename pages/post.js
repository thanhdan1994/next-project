import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head'
import DetailObject from '../components/detail/DetailObject.js';

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
    </Head>
    <div className="main">
      <div className="container">
        <DetailObject detail={props.objectDetail} lists={props.listHighlights}/>
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

  console.log(`Object Title: ${objectDetail.title}`);

  return {
    objectDetail: objectDetail,
    listHighlights: listHighlights
   };
};

export default Post;