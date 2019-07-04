import { PureComponent } from 'react';
import { echoThumbnail } from '../../constant/Helpers';

export default class Laugh extends PureComponent {
    render() {
        let { list_tag, list_prior, list_newest } = this.props.data;
        let { related_objects } = list_prior[0];
        return (
            <div className="block-laugh">
                <h2 className="title">
                    <i className="icon icon-laugh" />
                    <div className="inner-title">
                        <h2>
                            <a href="/doi-cuoi">Đời cười</a>
                        </h2>
                        <ul className="list-cat">
                            {list_tag.map((tag, index) => (
                                <li key={index}>
                                    <a href={tag.tag_link}>{tag.tag_name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </h2>
                <div className="outer scrollToTwo">
                    <section className="content">
                        <div className="list-news">
                            <article className="art-lastest art-b">
                                <a href={`/${list_prior[0].object_slug}/${list_prior[0].id}.html`}>
                                    <img className="lazyload" data-src={echoThumbnail('s300', list_prior[0].object_thumbnail)} />
                                </a>
                                <div className="des">
                                    <h4 className="hasComment">
                                        <a>{list_prior[0].object_title}</a>
                                    </h4>
                                    <a href="/doi-cuoi" className="cat">Đời cười</a>
                                    {
                                        related_objects[0]
                                            ? <article className="art-s">
                                                <h4>
                                                    <a href={`/${related_objects[0].object_slug}/${related_objects[0].id}.html`}>{related_objects[0].object_title}</a>
                                                </h4>
                                            </article>
                                            : ''
                                    }

                                </div>
                            </article>
                            {list_newest.map(object => (
                                <article className="art-lastest" key={object.id}>
                                    <a href={`/${object.object_slug}/${object.id}.html`}><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                                    <div className="des">
                                        <h4 className="hasComment">
                                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                        </h4>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                    <aside className="sidebar">
                        <div className="block-bar block-qc ui sticky two">
                            <a><img className="lazyload" data-src="/static/img/banner-300x600.jpg" /></a>
                        </div>
                    </aside>
                </div>
            </div>
        )
    }
}
