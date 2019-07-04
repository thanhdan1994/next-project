import { echoThumbnail } from './../../constant/Helpers';
function YouCanCare(props) {
    return (
        <div className="list-enter">
            <h3 className="title-style">Có thể bạn quan tâm</h3>
            <div className="row">
                {props.listYouCanCare.map((object, index) => (
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
                ))}
            </div>
        </div>

    )
}
export default YouCanCare