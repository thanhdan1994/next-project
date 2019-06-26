import Link from 'next/link'
const Laugh = props => (
    <div className="block-laugh">
        <h2 className="title">
            <i className="icon icon-laugh" />
            <div className="inner-title">
                <h2><a href="#">Đời cười</a></h2>
                <ul className="list-cat">
                    <li><a href="#">Góc nhìn</a></li>
                    <li><a href="#">Bình luận</a></li>
                    <li><a href="#">Miễn bình luậnz</a></li>
                </ul>
            </div>
        </h2>
        <div className="outer scrollToTwo">
            <section className="content">
                <div className="list-news">
                    <article className="art-lastest art-b">
                        <a href="#"><img className="lazyload" data-src="/static/img/photo/8-min.jpg" /><i className="icon icon-video" /></a>
                        <div className="des">
                            <h4 className="hasComment"><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a></h4>
                            <a className="cat" href="#">Thời sự</a>
                            <article className="art-s">
                                <h4><a href="#">Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a></h4>
                            </article>
                        </div>
                    </article>
                    {props.lists.map(object => (
                        <article className="art-lastest" key={object.object_id}>
                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                <a><img className="lazyload" data-src={object.thumb_link} /><i className="icon icon-video" /></a>
                            </Link>
                            <div className="des">
                                <h4 className="hasComment"><a href="#">{object.title}</a></h4>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <aside className="sidebar">
                <div className="block-bar block-qc ui sticky two">
                    <a href="#"><img className="lazyload" data-src="/static/img/banner-300x600.jpg" /></a>
                </div>
            </aside>
        </div>
    </div>

)
export default Laugh