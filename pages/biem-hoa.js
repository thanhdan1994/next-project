import { Component } from "react";
import Layout from '../components/MyLayout.js';
import Head from 'next/head';
import Featured from "../components/Featured.js";
import HotEvent from "../components/biemhoa/HotEvent.js";
import LeftMid from "../components/biemhoa/LeftMid.js";
import RightMid from "../components/biemhoa/RightMid.js";
import Footer from "../components/Footer.js";

export default class BiemHoa extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=8&page=2');
        const listFeatured = await res.json();
        const res1 = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=3&page=4');
        const listHotEvent = await res1.json();

        return {
            listFeatured: listFeatured,
            listHotEvent: listHotEvent
        }
    }

    componentDidMount() {
        if ($(".btn-top").length > 0) {
            $(window).scroll(function() {
                var e = $(window).scrollTop();
                if (e > 100) {
                    $(".btn-top").show()
                } else {
                    $(".btn-top").hide()
                }
            });
            $(".btn-top").click(function() {
                $('body,html').animate({
                    scrollTop: 0
                })
            });
        }
    }
    render() {
        return (
            <>
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
                    <h1>this page is biem hoa</h1>
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
                        <Featured lists={this.props.listFeatured} />
                        <span className="line-border"></span>
                        <HotEvent lists={this.props.listHotEvent} />
                        <span className="line-border"></span>
                        <div className="outer outer-mid scrollToOne">
                            <LeftMid />
                            <RightMid />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}