import Link from 'next/link'
import { echoThumbnail } from './../../constant/Helpers';
import { PureComponent } from 'react';
export default class Video extends PureComponent {
    render() {
        let itemHighlight = this.props.lists.list_primary;
        let tagsHighlight = itemHighlight.tags_term;
        let dataHighlight = itemHighlight.data;
        let {
            object_title, tags, object_excerpt,
            object_content, object_thumbnail, object_slug,
            object_author_name, id
        } = dataHighlight;
        // get src video
        let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        let found = object_content.match(regex);
        let srcVideo = found[0];
        let { list_newest } = this.props.lists;
        return (
            <div className="block-video">
                <h2 className="title">
                    <i className="icon icon-title-video" />
                    <div className="inner-title">
                        <h2>
                            <Link href="/video">
                                <a>Videos</a>
                            </Link>
                        </h2>
                        <ul className="list-cat">
                            <li>
                                <Link href={tagsHighlight[0].tag_link}>
                                    <a>{tagsHighlight[0].tag_name}</a>
                                </Link>

                            </li>
                            <li>
                                <Link href={tagsHighlight[2].tag_link}>
                                    <a>{tagsHighlight[2].tag_name}</a>
                                </Link>

                            </li>
                            <li>
                                <Link href={tagsHighlight[3].tag_link}>
                                    <a>{tagsHighlight[3].tag_name}</a>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </h2>
                <article className="art-media">
                    <div className="inner-media">
                        <div className="video-wrap">
                            <div className="video">
                                <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                                    <div className="tt-vplayer-content">
                                        <video id="ttplayer_8"
                                            className="tt-vplayer video-js tt-vplayer-visibility"
                                            style={{ width: '100%' }}
                                            poster={echoThumbnail('s1280', object_thumbnail)}
                                            data-vid={srcVideo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="des">
                        <h1>
                            <Link as={`/${object_slug}/${id}.html`} href={`/video-detail?id=${id}`}>
                                <a>{object_title}</a>
                            </Link>
                        </h1>
                        <ul className="list-tool">
                            <li>
                                <Link href="/video">
                                    <a>Video</a>
                                </Link>
                            </li>
                            <li>{object_author_name}</li>
                        </ul>
                        <p>{object_excerpt}</p>
                        <div className="tag">
                            {tags.map((tag, index) => {
                                let linkTag = '/chu-de/' + tag.tag_slug + '/' + tag.id + "/.html";
                                if (index < 4) {
                                    return <Link href={linkTag} key={index}>
                                        <a>{tag.tag_name}</a>
                                    </Link>

                                }
                            })}
                        </div>
                        <ul className="list-social-1 list-cm">
                            {/* <li><i class="fa fa-heart-o" aria-hidden="true"></i> 230</li> */}
                            <li><iframe src="/static/iframe/like_new-18.html" style={{ width: '59px', height: '31px' }} /></li>
                            <li className="outer-share">
                                <i className="icon icon-share" aria-hidden="true" /> 100
              <div className="block-share">
                                    <h5>Chia sẻ trên</h5>
                                    <a className="facebook" href="#"><i className="fa fa-facebook-official" aria-hidden="true" /> Facebook</a>
                                    <a className="facebookmes" href="#"><i className="icon-messenger" /> Facebook messenger</a>
                                </div>
                            </li>
                            <li className="text-cm">
                                <textarea placeholder="Viết bình luận" />
                                <button className="btn-comment">
                                    <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
                                </button>
                            </li>
                        </ul>
                        {/* <div className="s-comment">
                        <div className="inner">
                            <a className="thumbs" href="#"><img src="/static/img/user.jpg" alt="" /></a>
                            <div className="des">
                                <div className="cmt-content"><span><strong>Văn Quân</strong></span> The typhoon is forecast to weaken into a tropical depression depression ...
                  <div className="tool-like">
                                        <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">Xem tất cả bình luận</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    </div>
                </article>
                <div className="row">
                    {list_newest.map(object => (
                        <div className="col-sm-3" key={object.id}>
                            <article className="art-video-top playing">
                                <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                                    <a className="thumb"><img src={echoThumbnail('s226', object.object_thumbnail)} /></a>
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

        )
    }
}