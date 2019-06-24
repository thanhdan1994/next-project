import Link from 'next/link'
import React, { Component } from 'react';
import { echoThumbnail } from './../constant/Helpers';

export default class FeaturedNews extends Component {
    componentDidMount() {
        this.$el = $(this.el);
        this.$el.slick({
            dots: true,
            infinite: true,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2200,
            slidesToScroll: 3
        });
    }
    render() {
        const { list_order_1, list_order_2, list_order_3 } = this.props.lists;
        return (
            <div className="outer outer-top">
                <section className="content">
                    <div className="block-top">
                        {list_order_1.map((object, index) => {
                            return (
                                <article className="art-top-1" key={index}>
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a className="thumb" title={object.object_title}>
                                            <img src={echoThumbnail('s475', object.object_thumbnail)} alt={object.object_title} />
                                        </a>
                                    </Link>
                                    <h1 className="hasComment">
                                        <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                            <a title={object.object_title}>{object.object_title}</a>
                                        </Link>
                                    </h1>
                                    <p>{object.object_excerpt}</p>
                                </article>
                            )
                        })}
                        {list_order_2.map((object, index) => {
                            return <article className="art-top-2" key={index}>
                                <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                    <a className="thumb" title={object.object_title}>
                                        <img src={(echoThumbnail('s1852', object.object_thumbnail)).replace('-ngang-', '-doc-')} alt={object.object_title} />
                                    </a>
                                </Link>
                                <h2 className="hasComment">
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a title={object.object_title}>{object.object_title}</a>
                                    </Link>
                                </h2>
                            </article>
                        })}
                    </div>
                    <div className="outer-slider">
                        <div className="slider single-top" ref={el => this.el = el}>
                            {list_order_3.map((object, index) => {
                                return <div className="slide_item" key={index}>
                                    <article className="art-slider">
                                        <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                            <a className="thumb"><img src={echoThumbnail('s226', object.object_thumbnail)} alt={object.object_title} /></a>
                                        </Link>
                                        <h3 className="hasComment">
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                                <a title={object.object_title}>{object.object_title}</a>
                                            </Link>
                                        </h3>
                                    </article>
                                </div>
                            })}
                        </div>
                    </div>
                </section>
                <aside className="sidebar">
                    <div className="block-bar block-qc">
                        <a><img src="/static/img/banner-300x600.jpg" alt="" /></a>
                    </div>
                </aside>
            </div>

        )
    }
}