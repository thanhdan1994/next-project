import Link from 'next/link'
import { echoThumbnail } from '../../constant/Helpers';
const Last = props => (
    <div className="block block-last">
        <div className="box box-left">
            <h2 className="title">
                <i className="icon icon-young" />
                <div className="inner-title">
                    <h2 className="active">
                        <a href="/song-tre">Sống trẻ</a>
                    </h2>
                    <ul className="list-cat">
                    {props.dataLeft.list_tag.map((tag, index) => (
                        <li key={index}>
                            <a href={`/chu-de/${tag.tag_slug}/${tag.id}.html`}>{tag.tag_name}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </h2>
            <div className="row">
                {props.dataLeft.data.map(object => (
                    <div className="col-6" key={object.id}>
                    <article className="art art-young" key={object.id}>
                        <a href={`/${object.object_slug}/${object.id}.html`}><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                        <h3>
                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                        </h3>
                    </article>
                </div>
                ))}
            </div>
        </div>
        <div className="box box-right">
            <h2 className="title">
                <i className="icon icon-sport" />
                <div className="inner-title">
                    <h2 className="active">
                        <a href="/the-thao">Thể thao</a>
                    </h2>
                    <ul className="list-cat">
                    {props.dataRight.list_tag.map((tag, index) => (
                        <li key={index}>
                            <a href={`/chu-de/${tag.tag_slug}/${tag.id}.html`}>{tag.tag_name}</a>
                        </li>
                    ))}
                    </ul>
                </div>
            </h2>
            <div className="row">
                {props.dataRight.data.map(object => (
                    <div className="col-6" key={object.id}>
                    <article className="art art-young">
                        <a href={`/${object.object_slug}/${object.id}.html`}><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
                        <h3>
                            <a href={`/${object.object_slug}/${object.id}.html`}>{object.object_title}</a>
                        </h3>
                    </article>
                </div>
                ))}
            </div>
        </div>
    </div>

)
export default Last