import Link from 'next/link'
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
                            <Link href="/doi-cuoi">
                                <a>Đời cười</a>
                            </Link>
                        </h2>
                        <ul className="list-cat">
                            {list_tag.map((tag, index) => (
                                <li key={index}>
                                    <Link href={tag.tag_link}>
                                        <a>{tag.tag_name}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </h2>
                <div className="outer scrollToTwo">
                    <section className="content">
                        <div className="list-news">
                            <article className="art-lastest art-b">
                                <Link as={`/${list_prior[0].object_slug}/${list_prior[0].id}.html`} href={`/post?id=${list_prior[0].id}`}>
                                    <a><img className="lazyload" data-src={echoThumbnail('s300', list_prior[0].object_thumbnail)} /></a>
                                </Link>
                                <div className="des">
                                    <h4 className="hasComment">
                                        <Link as={`/${list_prior[0].object_slug}/${list_prior[0].id}.html`} href={`/post?id=${list_prior[0].id}`}>
                                            <a>{list_prior[0].object_title}</a>
                                        </Link>
                                    </h4>
                                    <Link href="/doi-cuoi">
                                        <a className="cat">Đời cười</a>
                                    </Link>
                                    {
                                        related_objects[0]
                                            ? <article className="art-s">
                                                <h4>
                                                    <Link as={`/${related_objects[0].object_slug}/${related_objects[0].id}.html`} href={`/post?id=${related_objects[0].id}`}>
                                                        <a>{related_objects[0].object_title}</a>
                                                    </Link>
                                                </h4>
                                            </article>
                                            : ''
                                    }

                                </div>
                            </article>
                            {list_newest.map(object => (
                                <article className="art-lastest" key={object.id}>
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                                    </Link>
                                    <div className="des">
                                        <h4 className="hasComment">
                                            <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                                <a>{object.object_title}</a>
                                            </Link>
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
