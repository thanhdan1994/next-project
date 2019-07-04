import { echoThumbnail } from '../../constant/Helpers';
function LastBlock(props) {
    const object_prior = props.dataLastBlock[0]; // get first item in array
    return (
        <div className="block-enter">
            <div className="outer">
                <article className="art-enter art-b">
                    <a className="thumbs" href={`/${object_prior.object_slug}/${object_prior.id}.html`}>
                        <img className="lazyload" data-src={echoThumbnail('s475', object_prior.object_thumbnail)} />
                        { object_prior.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                    </a>
                    <div className="des">
                        <h3 className="hasComment">
                            <a href={`/${object_prior.object_slug}/${object_prior.id}.html`}>{object_prior.object_title}</a>        
                        </h3>
                        <a className="link-cat">Nghe đồn là</a>
                        <p>{object_prior.object_excerpt}</p>
                    </div>
                </article>
                <div className="block-bar block-qc">
                    <a><img src="/static/img/banner-300x250.jpg" /></a>
                </div>
            </div>
            <div className="list-enter">
                <div className="row">
                    {props.dataLastBlock.map((object, index) => index > 0 ? (
                        <div className="col" key={index}>
                            <article className="art-enter-s">
                                <a href={`/${object.object_slug}/${object.id}.html`}>
                                    <img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} />
                                    { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                                </a>
                                <h3>
                                    <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                                </h3>
                            </article>
                        </div>
                    ) : '')}
                </div>
            </div>
        </div>
    )
}
export default LastBlock