import Link from 'next/link'
const Featured = props => (
    <div className="outer outer-top">
        <section className="content">
            <div className="block-top">
                {props.lists.map((object, index) => {
                    if (index === 0) {
                        return (
                            <article className="art-top-1" key={index}>
                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                    <a className="thumb" title={object.title}>
                                        <img src={object.thumb_link} alt={object.title} />
                                    </a>
                                </Link>
                                <h1 className="hasComment">
                                    <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                        <a title={object.title}>{object.title}</a>
                                    </Link>
                                </h1>
                                <p>{object.description}</p>
                            </article>
                        )
                    }
                    if (index === 1) {
                        return <article className="art-top-2" key={index}>
                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                <a className="thumb" title={object.title}>
                                    <img src={object.thumb_link} alt={object.title} />
                                </a>
                            </Link>
                            <h2 className="hasComment">
                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                    <a title={object.title}>{object.title}</a>
                                </Link>
                            </h2>
                        </article>
                    }
                })}
            </div>
            <div className="outer-slider">
                <div className="slider single-top">
                    {props.lists.map((object, index) => {
                        if (index > 1) {
                            return <div className="slide_item" key={index}>
                                <article className="art-slider">
                                    <a className="thumb" href={`/news/${object.object_id}`}><img src={object.thumb_link} alt={object.title} /></a>
                                    <h3 className="hasComment"><a href={`/news/${object.object_id}`} title={object.title}>{object.title}</a></h3>
                                </article>
                            </div>
                        }
                    })}

                </div>
            </div>
        </section>
        <aside className="sidebar">
            <div className="block-bar block-qc">
                <a href="#"><img src="/static/img/banner-300x600.jpg" alt="" /></a>
            </div>
        </aside>
    </div>

)
export default Featured