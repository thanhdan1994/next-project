import Link from 'next/link'
import React, { Component } from 'react';
import { echoThumbnail, buildLinkObject } from '../../constant/Helpers';

export default class Entertainment extends Component {
    render() {
        const { list_tag, list_prior, list_newest } = this.props.data;
        let { related_objects } = list_prior[0];
        return (
            <div className="block-enter">
                <h2 className="title">
                    <i className="icon icon-enter" />
                    <div className="inner-title">
                        <h2><a href="/giai-tri">Giải trí</a></h2>
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
                <div className="outer">
                    <article className="art-enter art-b">
                        <Link as={`/${list_prior[0].object_slug}/${list_prior[0].id}.html`} href={buildLinkObject(list_prior[0].object_slug, list_prior[0].id)}>
                            <a className="thumbs">
                                <img src={echoThumbnail('s475', list_prior[0].object_thumbnail)} />
                            </a>
                        </Link>
                        <div className="des">
                            <h3 className="hasComment">
                                <a>{list_prior[0].object_title}</a>
                            </h3>
                            <Link href="/giai-tri">
                                <a className="link-cat">Giải trí</a>
                            </Link>
                            <p>{list_prior[0].object_excerpt}</p>
                            {
                                related_objects[0]
                                    ? <article className="art-s">
                                        <h4>
                                            <Link as={`/${related_objects[0].object_slug}/${related_objects[0].id}.html`} href={buildLinkObject(related_objects[0].object_slug, related_objects[0].id)}>
                                                <a>{related_objects[0].object_title}</a>
                                            </Link>
                                        </h4>
                                    </article>
                                    : ''
                            }
                        </div>
                    </article>
                    <div className="block-bar block-qc">
                        <a href="#"><img src="/static/img/banner-300x250.jpg" /></a>
                    </div>
                </div>
                <div className="list-enter">
                    <div className="row">
                        {list_newest.map(object => (
                            <div className="col" key={object.id}>
                                <article className="art-enter-s">
                                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                        <a><img src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                                    </Link>
                                    <h3>
                                        <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                            <a>{object.object_title}</a>
                                        </Link>
                                    </h3>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}