import { Component } from "react";
import Head from 'next/head'
import JsonLd from '../JsonLd';

export default class HeadHome extends Component {
    render() {
        return (
            <Head>
                <title>Tuổi trẻ cười - Giải trí 24h, tin ảnh hài hước</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="REFRESH" content="1800" />
                <meta name="description" content="Cập nhật tin tức mới và nóng nhất về Đời sống - Xã hội, Kinh tế, Thế giới, Thể thao, Giải trí, Công nghệ và nhiều lĩnh vực khác…" />
                <meta name="keywords" content="tuổi trẻ cười, tuổi trẻ, hihi vui quá, tuổi trẻ mà" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
                {/*  Open Graph tags  */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Tuổi trẻ cười - Giải trí 24h, tin ảnh hài hước" />
                <meta property="og:description" content="Cập nhật tin tức mới và nóng nhất về Đời sống - Xã hội, Kinh tế, Thế giới, Thể thao, Giải trí, Công nghệ và nhiều lĩnh vực khác…" />
                <meta property="og:image" content="https://tuoitrecuoi.vn/facebook-thumb.jpg" />
                <meta property="og:url" content="http://tuoitrecuoi.vn" />
                <meta property="og:site_name" content="tuoitrecuoi.vn" />
                <meta property="fb:admins" content="https://www.facebook.com/tuoitrecuoi" />
                {/* Twitter */}
                <meta name="twitter:title" content="Tuổi trẻ cười - Giải trí 24h, tin ảnh hài hước" />
                <meta name="twitter:description" content="Cập nhật tin tức mới và nóng nhất về Đời sống - Xã hội, Kinh tế, Thế giới, Thể thao, Giải trí, Công nghệ và nhiều lĩnh vực khác…" />
                <meta name="twitter:image" content="https://tuoitrecuoi.vn/twitter-thumb.jpg" />
                <meta name="twitter:site" content="tuoitrecuoi.vn" />
                <link rel="shortcut icon" href="/static/img/favicon.ico" type="image/x-icon" />
                <link href="/static/css/style.min.css" rel="stylesheet" />
                <script src="/static/js/lib.min.js"></script>
                {/* GENERAL GOOGLE SEARCH META */}
                <JsonLd data={this.props.ldJson} />
            </Head>
        )
    }
}