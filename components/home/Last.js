import Link from 'next/link'
import { echoThumbnail } from '../../constant/Helpers';
const Last = props => (
    <div className="block block-last">
        <div className="box box-left">
            <h2 className="title">
                <i className="icon icon-young" />
                <div className="inner-title">
                    <h2 className="active">
                        <Link href="/song-tre">
                        <a>Sống trẻ</a>
                        </Link>
                    </h2>
                    <ul className="list-cat">
                    {props.dataLeft.list_tag.map((tag, index) => (
                        <li key={index}>
                            <Link href={tag.tag_link}>
                                <a>{tag.tag_name}</a>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </h2>
            <div className="row">
                {props.dataLeft.data.map(object => (
                    <div className="col-6" key={object.id}>
                    <article className="art art-young" key={object.id}>
                    <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                        <a><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
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
        <div className="box box-right">
            <h2 className="title">
                <i className="icon icon-sport" />
                <div className="inner-title">
                    <h2 className="active">
                        <Link href="/the-thao">
                            <a>Thể thao</a>
                        </Link>
                    </h2>
                    <ul className="list-cat">
                    {props.dataRight.list_tag.map((tag, index) => (
                        <li key={index}>
                            <Link href={tag.tag_link}>
                                <a>{tag.tag_name}</a>
                            </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </h2>
            <div className="row">
                {props.dataRight.data.map(object => (
                    <div className="col-6" key={object.id}>
                    <article className="art art-young">
                        <Link as={`/${object.object_slug}/${object.id}.html`} href={`/post?id=${object.id}`}>
                            <a><img className="lazyload" data-src={echoThumbnail('s226', object.object_thumbnail)} /></a>
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
export default Last