import { echoThumbnail } from './../../constant/Helpers';
function HighLights(props) {
    return (
        <div className="block-bar">
            <h3 className="title-note">Đáng chú ý</h3>
            {props.listHighlights.map((object, index) => {
                if (index === 0) {
                    return <article className="art-bar-b" key={index}>
                        <a href={`/${object.object_slug}/${object.id}.html`}>
                            <img src={echoThumbnail('s300', object.object_thumbnail)} />
                            { object.term_primary == process.env.TTC_TERM_VIDEO ? <i className="icon icon-video" /> : ''}
                        </a>
                        <h4>
                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                        </h4>
                    </article>
                } else {
                    return <article className="art-bar-s art-hori" key={index}>
                        <a href={`/${object.object_slug}/${object.id}.html`}>
                            <img src={echoThumbnail('s226', object.object_thumbnail)} />
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
    )
}
export default HighLights