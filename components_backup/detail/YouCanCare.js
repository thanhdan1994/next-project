import Link from 'next/link'
function YouCanCare(props) {
    return (
        <div className="list-enter">
            <h3 className="title-style">Có thể bạn quan tâm</h3>
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

    )
}
export default YouCanCare