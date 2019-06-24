import { Component } from "react";

export default class RightMid extends Component {
    render() {
        return (
            <aside className="sidebar">
                                <div className="block-bar block-qc">
                                    <a><img src="/static/img/banner-300x250.jpg"/></a>
                                </div>
                                <div className="block-bar">
                                    <div className="bg-gray">
                                        <h3 className="title-normal"><a>Top biếm họa</a></h3>
                                        <article className="art-bar-s art-hori no-border">
                                            <a><img src="/static/img/photo/8-min.jpg"/></a>
                                            <div className="des">
                                                <h4><a>Nhiệm vụ của cô nàng trong phần</a></h4>
                                                <a className="author">TCC team</a>
                                            </div>
                                        </article>
                                        <article className="art-bar-s art-hori">
                                            <a><img src="/static/img/photo/7-min.jpg"/></a>
                                            <div className="des">
                                                <h4><a>Nhiệm vụ của cô nàng trong phần</a></h4>
                                                <a className="author">TCC team</a>
                                            </div>
                                        </article>
                                        <article className="art-bar-s art-hori">
                                            <a><img src="/static/img/photo/6-min.jpg"/></a>
                                            <div className="des">
                                                <h4><a>Nhiệm vụ của cô nàng trong phần</a></h4>
                                                <a className="author">Thỏ bảy màu</a>
                                            </div>
                                        </article>
                                        <article className="art-bar-s art-hori">
                                            <a><img src="/static/img/photo/5-min.jpg"/></a>
                                            <div className="des">
                                                <h4><a>Nhiệm vụ của cô nàng trong phần</a></h4>
                                                <a className="author">LAP</a>
                                            </div>
                                        </article>
                                        <article className="art-bar-s art-hori">
                                            <a><img src="/static/img/photo/4-min.jpg"/></a>
                                            <div className="des">
                                                <h4><a>Nhiệm vụ của cô nàng trong phần</a></h4>
                                                <a className="author">hài hước</a>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                                <div className="block-bar ui sticky one">
                                    <h3 className="title-note"><a>Dòng sự kiện</a></h3>
                                    <div className="bg-gray">
                                        <article className="art-bar-m">
                                            <a><img src="/static/img/photo/9-min.jpg"/> <i className="icon icon-video-b" /></a>
                                            <h4><a>Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                            <a className="author">
                                                <span>Ông Lap</span>
                                            </a>
                                        </article>
                                        <article className="art-bar-m">
                                            <a><img src="/static/img/photo/8-min.jpg"/> <i className="icon icon-video-b" /></a>
                                            <h4><a>Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                            <a className="author">
                                                <span>Thỏ nhiều màu</span>
                                            </a>
                                        </article>
                                        <article className="art-bar-m">
                                            <a><img src="/static/img/photo/7-min.jpg"/> <i className="icon icon-video-b" /></a>
                                            <h4><a>Nhiệm vụ của cô nàng trong phần phim này là tìm hiểu</a></h4>
                                            <a className="author">
                                                <span>TTC team</span>
                                            </a>
                                        </article>
                                    </div>
                                </div>
                            </aside>
        )
    }
}