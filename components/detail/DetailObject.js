import Comment from '../comment/Comment'
import HighLights from './HighLights';
import { echoThumbnail, timeSince } from '../../constant/Helpers';

function createMarkup(content) {
    return { __html: content };
}

function DetailObject(props) {
    const { object_title, object_excerpt, tags, object_content, related_objects, object_author_name, id, object_date } = props.detail
    const { termPrimary } = props;
    const splitTerm = termPrimary.slug.split('/');
    const termLink = splitTerm[splitTerm.length - 1];
    return (
        <div>
            <ul className="list-cat list-cat-1">
                <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news" className="icon-direction"> </a>
                </li>
                <li><a href={props.tags[0].tag_link}>{props.tags[0].tag_name}</a></li>
                <li><a href={props.tags[1].tag_link}>{props.tags[1].tag_name}</a></li>
                <li><a href={props.tags[3].tag_link}>{props.tags[3].tag_name}</a></li>
            </ul>
            <h2 className="title">
                <i className="icon icon-news" />
                <div className="inner-title">
                    <h2 className="active"><a href="/tin-tuc">Tin tức</a>
                    </h2>
                    <ul className="list-cat">
                        <li className={termPrimary.id == process.env.TTC_TERM_DOI_CUOI ? 'active' : ''}><a href="/doi-cuoi">Đời cười</a></li>
                        <li className={termPrimary.id == process.env.TTC_TERM_GIAI_TRI ? 'active' : ''}><a href="/giai-tri">Giải trí</a></li>
                        <li className={termPrimary.id == process.env.TTC_TERM_SONG_TRE ? 'active' : ''}><a href="/song-tre">Sống trẻ</a></li>
                        <li className={termPrimary.id == process.env.TTC_TERM_THE_THAO ? 'active' : ''}><a href="/the-thao">Thể thao</a></li>
                    </ul>
                </div>
            </h2>
            <div className="row-1">
                <div className="box-665">
                    <article className="art-header">
                        <h1>{object_title}</h1>
                        <div className="tool-date">
                            <a className="link-cate" href={`/${termLink}`}>{termPrimary.name}</a>
                            <span><i className="fa fa-clock-o" aria-hidden="true" /> {timeSince(object_date * 1000)} trước</span>
                        </div>
                    </article>
                </div>
            </div>
            <div className="row-1 scrollToOne">
                <div className="box-665">
                    <div id="cont2" className="outer-body outer-body-2">
                        <article className="art-body fck scrollToTwo">
                            <p className="summary">{object_excerpt}</p>
                            <div dangerouslySetInnerHTML={createMarkup(object_content)} />
                            {related_objects.map(object => object.object_status === 1 ? (
                                <div className="block-related" key={object.id}>
                                    <ul>
                                        <li>
                                            <a href={`/${object.object_slug}/${object.id}.html`}><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                                            <div className="des">
                                                <h3>
                                                    <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                                </h3>
                                                <p>{object.object_excerpt}</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            ) : '')}
                            <ul className="tool ui sticky two">
                                <li><span><i className="fa fa-facebook" aria-hidden="true" /></span></li>
                                <li><span><i className="fa fa-twitter" aria-hidden="true" /></span></li>
                                <li><span><i className="fa fa-envelope" aria-hidden="true" /></span></li>
                                <li><span><i className="fa fa-print" aria-hidden="true" /></span></li>
                                <li className="border-t">
                                    <iframe src="//stcuoi.tuoitre.vn/vote/iframe?app_id=15&layout=ttc_object&app_id_tracker=7&object_id=522&cat_id=2&user_agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36&ip=99.99.99.4&app_url=">

                                    </iframe>
                                </li>
                            </ul>
                        </article>
                    </div>
                    <p className="author">{object_author_name}</p>
                    <div className="tag-bar">
                        <div className="tag">
                            {tags.map(tag => (
                                <a key={tag.id} href={`/chu-de/${tag.tag_slug}/${tag.id}.html`}>{tag.tag_name}</a>
                            ))}
                        </div>
                    </div>
                    <Comment ObjectId={id} />
                </div>
                <div className="box-300">
                    <HighLights listHighlights={props.listHighlights} />
                </div>
            </div>
        </div>
    )
}
export default DetailObject