import Link from 'next/link'
const Entertainment = props => (
    <div className="block-enter">
        <h2 className="title">
            <i className="icon icon-enter" />
            <div className="inner-title">
                <h2><a href="#">Giải trí</a></h2>
                <ul className="list-cat">
                    <li><a href="#">Nghe đồn là</a></li>
                    <li><a href="#">Sau cánh gà</a></li>
                    <li><a href="#">Ngẫm thử đúng không</a></li>
                </ul>
            </div>
        </h2>
        <div className="outer">
            <article className="art-enter art-b">
                <a className="thumbs" href="#"><img className="lazyload" data-src="/static/img/photo/8-min.jpg" /><i className="icon icon-video" /></a>
                <div className="des">
                    <h3 className="hasComment"><a href="#">Hai Phượng giải nhiệt cơn khát phim hành động Việt</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h3>
                    <a className="link-cat">Nghe đồn là</a>
                    <p>Được nhào nặn dưới bàn tay của vị đạo diễn tài năng trong dòng phim kinh dị Christopher B. Landon, nhà sản xuất đã khẳng định rằng Happy Death Day 2U.</p>
                    <article className="art-s">
                        <h4><a href="#">Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a></h4>
                    </article>
                </div>
            </article>
            <div className="block-bar block-qc">
                <a href="#"><img className="lazyload" data-src="/static/img/banner-300x250.jpg" /></a>
            </div>
        </div>
        <div className="list-enter">
            <div className="row">
                {props.lists.map(object => (
                    <div className="col" key={object.object_id}>
                        <article className="art-enter-s">
                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                <a><img className="lazyload" data-src={object.thumb_link} /></a>
                            </Link>
                            <h3>
                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                    <a href="#">{object.title}</a>
                                </Link>
                            </h3>
                        </article>
                    </div>
                ))}
            </div>
        </div>
    </div>

)
export default Entertainment