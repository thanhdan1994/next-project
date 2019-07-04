import { echoThumbnail } from './../../constant/Helpers';
import { PureComponent } from 'react';
import BoxComment from '../comment/BoxComment';
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
        let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/; //gi
        let found = object_content.match(regex);
        let srcVideo = found[0];
        // let srcVideo = 'https://player.tuoitrenews.vn' + found[1].replace('/ttc/r/', '/hls/') + '/playlist.m3u8';
        let { list_newest } = this.props.lists;
        // https://player.tuoitrenews.vn/hls/2019/06/03/love-bird-hill-1559537709.mp4/playlist.m3u8
        return (
            <div className="block-video">
                <h2 className="title">
                    <i className="icon icon-title-video" />
                    <div className="inner-title">
                        <h2>
                            <a href="/video">Videos</a>
                        </h2>
                        <ul className="list-cat">
                            <li> 
                                <a href={`/chu-de/${tagsHighlight[0].tag_slug}/${tagsHighlight[0].id}.html`}>{tagsHighlight[0].tag_name}</a>
                            </li>
                            <li>
                                <a href={`/chu-de/${tagsHighlight[2].tag_slug}/${tagsHighlight[2].id}.html`}>{tagsHighlight[2].tag_name}</a>
                            </li>
                            <li>
                                <a href={`/chu-de/${tagsHighlight[3].tag_slug}/${tagsHighlight[3].id}.html`}>{tagsHighlight[3].tag_name}</a>
                            </li>
                        </ul>
                    </div>
                </h2>
                <article className="art-media">
                    <div className="inner-media">
                        <div className="video-wrap">
                            <div className="video">
                                <div className="tt-vplayer-content">
                                    <video id="ttplayer_4"
                                        className="tt-vplayer video-js tt-vplayer-visibility"
                                        style={{ width: '100%' }}
                                        preload='none'
                                        poster={echoThumbnail('s1280', object_thumbnail)}
                                        data-m3u8="https://player.tuoitrenews.vn/hls/2019/06/03/love-bird-hill-1559537709.mp4/playlist.m3u8" />
                                        {/* data-vid={srcVideo} /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="des">
                        <h1>
                            <a href={`/${object_slug}/${id}.html`}>{object_title}</a>
                        </h1>
                        <ul className="list-tool">
                            <li>
                                <a href='/video'>Video</a>
                            </li>
                            <li>{object_author_name}</li>
                        </ul>
                        <p>{object_excerpt}</p>
                        <div className="tag">
                            {tags.map((tag, index) => {
                                let linkTag = '/chu-de/' + tag.tag_slug + '/' + tag.id + "/.html";
                                if (index < 4) {
                                    return <a key={index} href={linkTag}>{tag.tag_name}</a>
                                }
                            })}
                        </div>
                        <ul className="list-social-1 list-cm">
                            {/* <li><i class="fa fa-heart-o" aria-hidden="true"></i> 230</li> */}
                            <li>
                                <iframe src="//stcuoi.tuoitre.vn/vote/iframe?app_id=15&layout=ttc_object_character&app_id_tracker=7&object_id=526&cat_id=7&user_agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36&ip=99.99.99.4&app_url=" />
                            </li>
                            <li className="outer-share">
                                <i className="icon icon-share" aria-hidden="true" /> 100
              <div className="block-share">
                                    <h5>Chia sẻ trên</h5>
                                    <a className="facebook" href="#"><i className="fa fa-facebook-official" aria-hidden="true" /> Facebook</a>
                                    <a className="facebookmes" href="#"><i className="icon-messenger" /> Facebook messenger</a>
                                </div>
                            </li>
                            <BoxComment ObjectId={id}/>
                        </ul>
                    </div>
                </article>
                <div className="row">
                    {list_newest.map(object => (
                        <div className="col-sm-3" key={object.id}>
                            <article className="art-video-top playing">
                                <a className="thumb" href={`/${object.object_slug}/${object.id}.html`}>
                                    <img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} />
                                    { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                                </a>
                                <h3>
                                    <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                </h3>
                            </article>
                        </div>
                    ))}
                </div>
            </div>

        )
    }
}