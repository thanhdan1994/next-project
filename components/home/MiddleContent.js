import Link from 'next/link';
import React, { PureComponent } from 'react';
import { echoThumbnail, buildLinkObject } from './../../constant/Helpers';

export default class MiddleContent extends PureComponent {
    componentDidMount() {
        $('.slick-thumb').slick({
            dots: false,
            autoplay: true,
            autoplaySpeed: 2000,
            infinite: true
        });
    }
    render() {
        return (
            <div className="outer outer-mid  scrollToOne">
                <section className="content">
                    <div className="list-news">
                        {this.props.lists.listSection.listPrior.map((object, index) => {
                            let resources = object.resources[0][0].resource_content;
                            return <article className="art-style" key={index}>
                                <div className="slick-thumb">
                                    {resources.map((item, index) => {
                                        let resource_url = item.resource_url;
                                        if (resource_url.search('-doc-')) {
                                            return <div key={index}>
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                                <a className="thumb"><img className="lazyload" data-src={echoThumbnail('r', item.resource_url)} /></a>
                                            </Link>
                                        </div>
                                        }
                                    })}
                                </div>
                                <div className="des">
                                    <h3>
                                        <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                            <a title={object.object_title}>{object.object_title}</a>
                                        </Link>
                                    </h3>
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a className="btn-viewmore" title={object.object_title}>Xem thêm <i className="icon icon-viewmore" /></a>
                                    </Link>
                                </div>
                            </article>
                        })}
                        {this.props.lists.listSection.listNewest.map((object, index) => {
                            if (index === 0) {
                                return <article className="art-lastest art-b" key={index}>
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a title={object.object_title}><img className="lazyload" data-src={echoThumbnail('s300', object.object_thumbnail)} /></a>
                                    </Link>
                                    <div className="des">
                                        <h4 className="hasComment">
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                                <a title={object.object_title}>{object.object_title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </article>
                            } else {
                                return <article className="art-lastest" key={index}>
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a title={object.object_title}><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                                    </Link>
                                    <div className="des">
                                        <h4>
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                                <a title={object.object_title}>{object.object_title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </article>
                            }
                        })}
                    </div>
                </section>
                <aside className="sidebar">
                    <div className="block-bar ui sticky one">
                        <h3 className="title-note">Đáng chú ý</h3>
                        <div className="inner-gray">
                            {this.props.lists.listAside.map((object, index) => {
                                if (index === 0) {
                                    return <article className="art-bar-b" key={index}>
                                        <Link as={`/${object.object_slug}/${object.id}.html`} href={buildLinkObject(object.object_slug, object.id)}>
                                            <a>
                                                <img className="lazyload" data-src={echoThumbnail('s300', object.object_thumbnail)} />
                                                <i className="icon icon-video-b"></i>
                                            </a>
                                        </Link>
                                        <h4>
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={buildLinkObject(object.object_slug, object.id)}>
                                                <a>{object.object_title}</a>
                                            </Link>
                                        </h4>
                                    </article>
                                }
                                return <article className="art-bar-s art-hori" key={index}>
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={buildLinkObject(object.object_slug, object.id)}>
                                        <a><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                                    </Link>
                                    <div className="des">
                                        <h4>
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={buildLinkObject(object.object_slug, object.id)}>
                                                <a title="">{object.object_title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </article>
                            })}
                        </div>
                    </div>
                </aside>
            </div >
        )
    }
}