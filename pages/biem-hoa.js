import { Component } from "react";
import Layout from '../components/MyLayout.js';
import Head from 'next/head';
import Featured from "../components/Featured.js";

export default class BiemHoa extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=8&page=2');
        const listFeatured = await res.json();

        return {
            listFeatured: listFeatured,
        }
    }
    render() {
        return (
            <Layout>
                <Head>
                    <title>Biếm hoạ - Tuổi trẻ cười</title>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <meta name="robots" content="index, follow" />
                    <meta name="author" content="" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                    <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
                    <link href="/static/css/style.min.css" rel="stylesheet" />
                    <script src="/static/js/lib.min.js"></script>
                </Head>
                <div className="main">
                    <div className="container">
                        <h2 className="title">
                            <i className="icon icon-laugh" />
                            <div className="inner-title">
                                <h2><a>Đời cười</a>
                                    <span className="inner">
                                        <a>Bình luận</a>
                                        <a>Miễn bình luận</a>
                                        <a>Góc nhìn</a>
                                    </span>
                                </h2>
                                <ul className="list-cat">
                                    <li><a title="Breaking news" className="icon-direction"> </a></li>
                                    <li><a>Cười xối xả</a></li>
                                    <li><a>TV show</a></li>
                                    <li><a>Show cười</a></li>
                                </ul>
                            </div>
                        </h2>
                        <Featured lists={this.props.listFeatured}/>
                    </div>
                </div>
            </Layout>
        )
    }
}