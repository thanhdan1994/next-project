import Link from 'next/link'
function LastBlock(props) {
    return (
        <div className="block-enter">
            <div className="outer">
                <article className="art-enter art-b">
                    <Link as={`/post/${props.prior[0].object_id}`} href={`/post?id=${props.prior[0].object_id}`}>
                        <a className="thumbs"><img src={props.prior[0].thumb_link} /><i className="icon icon-video" /></a>
                    </Link>
                    <div className="des">
                        <h3 className="hasComment">
                            <Link as={`/post/${props.prior[0].object_id}`} href={`/post?id=${props.prior[0].object_id}`}>
                                <a>{props.prior[0].title}</a>
                            </Link>
                        </h3>
                        <a className="link-cat">Nghe đồn là</a>
                        <p>{props.prior[0].description}</p>
                    </div>
                </article>
                <div className="block-bar block-qc">
                    <a><img src="/static/img/banner-300x250.jpg" /></a>
                </div>
            </div>
            <div className="list-enter">
                <div className="row">
                    {props.lists.map((object, index) => (
                        <div className="col" key={index}>
                            <article className="art-enter-s">
                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                    <a><img src={object.thumb_link} /></a>
                                </Link>
                                <h3>
                                    <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                        <a>{object.title}</a>
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
export default LastBlock