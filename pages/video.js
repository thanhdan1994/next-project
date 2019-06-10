import Layout from '../components/MyLayout.js';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import React, { Component } from 'react';
import Comment from '../components/comment/Comment'

class Video extends Component {
    static async getInitialProps() {
        const res = await fetch('https://api.tuoitre.vn/mobileapp/catpage?token=da039e81&limit=20&page=1');
        const listVideoNext = await res.json();
        return { listVideoNext }
    }
    render() {
        return (
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
                </Head>
                <div className="main">
                    <div className="container">
                        <h2 className="title">
                            <i className="icon icon-title-video" />
                            <div className="inner-title">
                                <h2><a>Videos</a></h2>
                                <ul className="list-cat">
                                    <li><a>Cười xối xả</a></li>
                                    <li><a>TV show</a></li>
                                    <li><a>Show cười</a></li>
                                </ul>
                            </div>
                        </h2>

                    </div>
                    <div className="hightlight-media hightlight-dark">
                        <div className="container-1">
                            <div className="outer-media">
                                <section className="content">
                                    <div className="inner-media">
                                        <div className="video-wrap">
                                            <div className="video">
                                                <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                                                    <video controls id="video_72673" poster="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/thumb-12-1533785196.png" style={{ width: '100%' }} className="video-js vjs-default-skin vjs-big-play-centered">
                                                        <source src="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/sand-boarding-1533785186.mp4" type="video/mp4" />
                                                    </video>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="des">
                                        <h2>Thủ tướng: 'Giao đất 99 năm không phải mấu chốt của luật đặc khu'</h2>
                                        <div className="scrollToTwo">
                                            <div className="tool-date">
                                                <a className="author" href="#">Nguyễn Vinh</a>
                                                <span><i className="fa fa-clock-o" aria-hidden="true" /> 2 giờ trước</span>
                                            </div>
                                            <p>Bà Marlène Schiappa, quốc vụ khanh phụ trách vấn đề bình đẳng giới của Pháp, vừa đáp trả đề xuất "thiến hóa học" đối với những kẻ hiếp dâm rằng đó là biện pháp không hiệu quả.</p>
                                            <div className="tag-bar">
                                                <div className="tag"><a>cố thủ tướng</a> <a>Phan Văn Khải</a> <a>Quốc tang</a> <a>Cố thủ tướng</a></div>
                                            </div>
                                            <Comment />
                                            <ul className="tool ui sticky two">
                                                <li><span><i className="fa fa-facebook" aria-hidden="true" /></span></li>
                                                <li><span><i className="fa fa-twitter" aria-hidden="true" /></span></li>
                                                <li><span><i className="fa fa-envelope" aria-hidden="true" /></span></li>
                                                <li><span><i className="fa fa-print" aria-hidden="true" /></span></li>
                                                <li className="border-t"><span><i className="fa fa-heart" aria-hidden="true" /> </span>100</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>
                                <aside className="sidebar">
                                    <h3 className="title-style">VIDEO TIẾP THEO</h3>
                                    <div className="scroll-media mCustomScrollbar">
                                        {this.props.listVideoNext.map(object => (
                                            <article className="art-bar-s art-hori" key={object.object_id}>
                                                <a><img src={object.thumb_link} /> <span className="tit time">10:20</span></a>
                                                <div className="des">
                                                    <h4><a>{object.title}</a></h4>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                    <style jsx>{`
                        .scroll-media {
                            height: 878px;
                            overflow-y:scroll;
                        }
                        /* width */
                        ::-webkit-scrollbar {
                        width: 3px;
                        }
                        /* Track */
                        ::-webkit-scrollbar-track {
                        background: #f1f1f1; 
                        }
                        
                        /* Handle */
                        ::-webkit-scrollbar-thumb {
                        background: #888; 
                        }
                    `}
                    </style>
                </div>
            </Layout>
        )
    }
}

export default Video;