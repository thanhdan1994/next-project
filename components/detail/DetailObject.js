import Link from 'next/link'
import Comment from '../comment/Comment'
import VideoJsPlayer from '../VideoJsPlayer';
function createMarkup(content) {
    return { __html: content };
}

const DetailObject = props => (
    <div>
        <h2 className="title">
            <i className="icon icon-laugh" />
            <div className="inner-title">
                <h2><a>Đời cười</a>
                    <span className="inner">
                        <a>Bình luận</a>
                        <a>Miễn bình luận</a>
                        <a>Góc nhìn</a>
                    </span>
                </h2>
                <ul className="list-cat">
                    <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news" className="icon-direction"> </a></li>
                    <li><a>Cười xối xả</a></li>
                    <li><a>TV show</a></li>
                    <li><a>Show cười</a></li>
                </ul>
            </div>
        </h2>
        <div className="row-1">
            <div className="box-665">
                <article className="art-header">
                    <h1>{props.detail.title}</h1>
                    <div className="tool-date">
                        <a className="link-cate" href="">{props.detail.cate_name[0]}</a>
                        <span><i className="fa fa-clock-o" aria-hidden="true" /> {props.detail.time_updated}</span>
                    </div>
                </article>
            </div>
        </div>
        <div className="row-1 scrollToOne">
            <div className="box-665">
                <div className="outer-body outer-body-2">
                    <article className="art-body fck scrollToTwo">
                        <p className="summary">{props.detail.description}</p>
                        <div dangerouslySetInnerHTML={createMarkup(props.detail.object_content)} />]
                        {/* <VideoJsPlayer 
                            idVideo="1942"
                            src="https://test_ttc_resource.ss-cdn.vccloud.vn/ttc/r/2019/05/21/18-5-19-luong-1558434929.mp4"
                            poster="https://sstaticcuoi.tuoitre.vn/ttc/i/s1280/2019/05/21/untitled-77-1558435104.jpg"/> */}
                        {props.detail.related_article.map(object => (
                            <div className="block-related" key={object.object_id}>
                                <ul>
                                    <li>
                                        <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                            <a><img src={object.object_id} /></a>
                                        </Link>
                                        <div className="des">
                                            <h3>
                                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                                    <a>{object.title}</a>
                                                </Link>
                                            </h3>
                                            <p>{object.description}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        ))}
                        <ul className="tool ui sticky two">
                            <li><span><i className="fa fa-facebook" aria-hidden="true" /></span></li>
                            <li><span><i className="fa fa-twitter" aria-hidden="true" /></span></li>
                            <li><span><i className="fa fa-envelope" aria-hidden="true" /></span></li>
                            <li><span><i className="fa fa-print" aria-hidden="true" /></span></li>
                            <li className="border-t"><span><i className="fa fa-heart" aria-hidden="true" /> </span>100</li>
                        </ul>
                    </article>
                </div>
                <p className="author">{props.detail.author}</p>
                <div className="tag-bar">
                    <div className="tag"><a>cố thủ tướng</a> <a>Phan Văn Khải</a> <a>Quốc tang</a> <a>Cố thủ tướng</a></div>
                </div>
                <Comment />
            </div>
            <div className="box-300">
                <div className="block-banner"><a><img src="/static/img/banner-300x250.jpg" /></a></div> <span className="line-border-s mar-20" />
                <div className="block-subscibe mar-20">
                    <form className="frm-subscibe">
                        <input type="text" className="txt-subscibe" placeholder="Email của bạn" />
                        <button className="btn-subscibe">Nhận tin</button>
                    </form>
                    <h4><i className="icon icon-mail" /> Đọc những tin tức nóng nhất trên TTC</h4>
                    <p>Bạn sẽ nhận được các tin nổi bật trên TTC, nếu không muốn bạn có thể tắt bất cứ lúc nào.</p>
                </div> <span className="line-border mar-20" />
                <div className="block-bar">
                    <h3 className="title-note">Đáng chú ý</h3>
                    {props.lists.map((object, index) => {
                        if (index === 0) {
                            return <article className="art-bar-b" key={index}>
                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                    <a><img src={object.thumb_link} /></a>
                                </Link>
                                <h4>
                                    <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                        <a>{object.title}</a>
                                    </Link>
                                </h4>
                            </article>
                        } else {
                            return <article className="art-bar-s art-hori" key={index}>
                                <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                    <a><img src={object.thumb_link} /></a>
                                </Link>
                                <div className="des">
                                    <h4>
                                        <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                            <a>{object.title}</a>
                                        </Link>
                                    </h4>
                                </div>
                            </article>
                        }
                    })}
                </div>
                <div className="block-bar block-banner ui sticky one"><a><img src="/static/img/banner-300x250.jpg" /></a></div>
            </div>
        </div>
    </div>

)
export default DetailObject