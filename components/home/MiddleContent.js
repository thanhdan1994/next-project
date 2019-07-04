import React, { PureComponent } from 'react';
import { echoThumbnail } from './../../constant/Helpers';

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
                                        // remove image have heigth > width
                                        if (resource_url.search('-doc-')) {
                                            return <div key={index}>
                                                <a className="thumb" href={`/${object.object_slug}/${object.id}.html`}><img className="lazyload" data-src={echoThumbnail('r', item.resource_url)} /></a>
                                            </div>
                                        }
                                    })}
                                </div>
                                <div className="des">
                                    <h3>
                                        <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                    </h3>
                                    <a href={`/${object.object_slug}/${object.id}.html`} className="btn-viewmore" title={object.object_title}>Xem thêm <i className="icon icon-viewmore" /></a>
                                </div>
                            </article>
                        })}
                        {this.props.lists.listSection.listNewest.map((object, index) => {
                            if (index === 0) {
                                return <article className="art-lastest art-b" key={index}>

                                    <a href={`/${object.object_slug}/${object.id}.html`}>
                                        <img className="lazyload" data-src={echoThumbnail('s300', object.object_thumbnail)} />
                                        { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                                    </a>

                                    <div className="des">
                                        <h4 className="hasComment">
                                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                        </h4>
                                    </div>
                                </article>
                            } else {
                                return <article className="art-lastest" key={index}>
                                    <a href={`/${object.object_slug}/${object.id}.html`}>
                                        <img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} />
                                        { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                                    </a>
                                    <div className="des">
                                        <h4>
                                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
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
                                        <a href={`/${object.object_slug}/${object.id}.html`}>
                                            <img className="lazyload" data-src={echoThumbnail('s300', object.object_thumbnail)} />
                                            { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                                        </a>
                                        <h4>
                                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                        </h4>
                                    </article>
                                }
                                return <article className="art-bar-s art-hori" key={index}>
                                    <a href={`/${object.object_slug}/${object.id}.html`}>
                                        <img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} />
                                        { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                                    </a>
                                    <div className="des">
                                        <h4>
                                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
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