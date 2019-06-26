import Link from 'next/link'
const Last = props => (
    <div className="block block-last">
        <div className="box box-left">
            <h2 className="title">
                <i className="icon icon-young" />
                <div className="inner-title">
                    <h2><a href="#">Sống trẻ</a></h2>
                    <ul className="list-cat">
                        <li><a href="#">Giới trẻ 360</a></li>
                        <li><a href="#">Đọc chậm</a></li>
                        <li><a href="#">NGỡ rối tơ lòng</a></li>
                    </ul>
                </div>
            </h2>
            <div className="row">
                {props.younger.map(object => (
                    <div className="col-6" key={object.object_id}>
                    <article className="art art-young" key={object.object_id}>
                        <a href="#"><img className="lazyload" data-src={object.thumb_link} /></a>
                        <h3><a href="#">{object.title}</a></h3>
                    </article>
                </div>
                ))}
            </div>
        </div>
        <div className="box box-right">
            <h2 className="title">
                <i className="icon icon-sport" />
                <div className="inner-title">
                    <h2><a href="#">Thể thao</a></h2>
                    <ul className="list-cat">
                        <li><a href="#">Khoảng khắc</a></li>
                        <li><a href="#">Quan điểm</a></li>
                        <li><a href="#">Video</a></li>
                        <li><a href="#">(Mục cho fan)</a></li>
                    </ul>
                </div>
            </h2>
            <div className="row">
                {props.sport.map(object => (
                    <div className="col-6" key={object.object_id}>
                    <article className="art art-young">
                        <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                            <a><img className="lazyload" data-src={object.thumb_link} /></a>
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
export default Last