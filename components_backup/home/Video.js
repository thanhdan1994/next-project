import Link from 'next/link'
const Video = props => (
    <div className="block-video">
        <h2 className="title">
            <i className="icon icon-title-video" />
            <div className="inner-title">
                <h2><a href="#">Videos</a></h2>
                <ul className="list-cat">
                    <li><a href="#">Cười xối xả</a></li>
                    <li><a href="#">TV show</a></li>
                    <li><a href="#">Show cười</a></li>
                </ul>
            </div>
        </h2>
        <article className="art-media">
            <div className="inner-media">
                <div className="video-wrap">
                    <div className="video">
                        <div style={{ backgroundColor: '#f6f6f6' }} className="media-content">
                            <div className="tt-vplayer-content">
                                <video id="ttplayer_8"
                                    className="tt-vplayer video-js tt-vplayer-visibility"
                                    style={{ width: '100%' }}
                                    poster="/static/img/banner-300x250.jpg"
                                    data-vid="https://static.tuoitrenews.vn/ttnew/r/2018/08/09/sand-boarding-1533785186.mp4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="des">
                <h1>Khởi tố hai người đưa phụ nữ mang thai vượt biên bán con </h1>
                <ul className="list-tool">
                    <li><a href="#">Thời sự</a></li>
                    <li><a href="#">Nguyễn Quang</a></li>
                </ul>
                <p> TTC - Tối 21-2, 542 doanh nghiệp đã được trao chứng nhận hàng Việt Nam chất lượng cao (HVNCLC) 2019. Trong bối cảnh mới, 42 doanh nghiệp đã được trao chứng nhận hàng Việt Nam chất lượng cao (HVNCLC) 2019. Trong bối cảnh mới. </p>
                <div className="tag"><a href="#">cố thủ tướng</a> <a href="#">Phan Văn Khải</a></div>
                <ul className="list-social-1 list-cm">
                    {/* <li><i class="fa fa-heart-o" aria-hidden="true"></i> 230</li> */}
                    <li><iframe src="/static/iframe/like_new-18.html" style={{ width: '59px', height: '31px' }} /></li>
                    <li className="outer-share">
                        <i className="icon icon-share" aria-hidden="true" /> 100
          <div className="block-share">
                            <h5>Chia sẻ trên</h5>
                            <a className="facebook" href="#"><i className="fa fa-facebook-official" aria-hidden="true" /> Facebook</a>
                            <a className="facebookmes" href="#"><i className="icon-messenger" /> Facebook messenger</a>
                        </div>
                    </li>
                    <li className="text-cm">
                        <textarea placeholder="Viết bình luận" defaultValue={""} />
                    </li>
                </ul>
                <div className="s-comment">
                    <div className="inner">
                        <a className="thumbs" href="#"><img className="lazyload" data-src="/static/img/user.jpg" alt="" /></a>
                        <div className="des">
                            <div className="cmt-content"><span><strong>Văn Quân</strong></span> The typhoon is forecast to weaken into a tropical depression depression ...
              <div className="tool-like">
                                    <span className="like"><i className="fa fa-heart-o" aria-hidden="true" /> 245</span> <span className="reply"> Trả lời</span> <span className="count">Xem tất cả bình luận</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
        <div className="row">
            {props.lists.map(object => (
                <div className="col-sm-3" key={object.object_id}>
                    <article className="art-video-top playing">
                        <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                            <a className="thumb"><img className="lazyload" data-src={object.thumb_link} /></a>
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
export default Video