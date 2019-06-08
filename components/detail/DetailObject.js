function createMarkup(content) {
    return { __html: content };
}

const DetailObject = props => (
    <div>
        <h2 className="title">
            <i className="icon icon-laugh" />
            <div className="inner-title">
                <h2><a href="#" title="">Đời cười</a>
                    <span className="inner">
                        <a href="#" title="">Bình luận</a>
                        <a href="#" title="">Miễn bình luận</a>
                        <a href="#" title="">Góc nhìn</a>
                    </span>
                </h2>
                <ul className="list-cat">
                    <li><a href="javascript:void(0)" rel="nofollow" title="Breaking news" className="icon-direction"> </a></li>
                    <li><a href="#" title="">Cười xối xả</a></li>
                    <li><a href="#" title="">TV show</a></li>
                    <li><a href="#" title="">Show cười</a></li>
                </ul>
            </div>
        </h2>
        <div className="row-1">
            <div className="box-665">
                <article className="art-header">
                    <h1>{props.detail.title}</h1>
                    <div className="tool-date">
                        <a className="link-cate" href="#">{props.detail.cate_name[0]}</a>
                        <span><i className="fa fa-clock-o" aria-hidden="true" /> {props.detail.time_updated}</span>
                    </div>
                </article>
                <span className="line-border-solid" />
            </div>
        </div>
        <div className="row-1 scrollToOne">
            <div className="box-665">
                <div className="outer-body outer-body-2">
                    <article className="art-body fck scrollToTwo">
                        <p className="summary">{props.detail.description}</p>
                        <div dangerouslySetInnerHTML={createMarkup(props.detail.object_content)} />
                        {props.detail.related_article.map(object => (
                            <div className="block-related" key={object.object_id}>
                                <ul>
                                    <li>
                                        <a href="#"><img src={object.object_id} /></a>
                                        <div className="des">
                                            <h3><a href="#" title="">{object.title}</a></h3>
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
                    <div className="tag"><a href="#" title="">cố thủ tướng</a> <a href="#" title="">Phan Văn Khải</a> <a href="#" title="">Quốc tang</a> <a href="#" title="">Cố thủ tướng</a></div>
                </div>
                <div className="block-comment">
                    <div className="comment-write">
                        <h4>Viết bình luận</h4>
                        <textarea className="box-reply-cm" data-toggle="modal" data-target="#modalCom_1" placeholder="Viết bình luận của bạn ở đây, không vượt quá 300 ký tự" defaultValue={""} />
                        <div className="text-right">
                        </div>
                    </div>
                </div>
            </div>
            <div className="box-300">
                <div className="block-banner"><a href="#" title=""><img src="/static/img/banner-300x250.jpg" /></a></div> <span className="line-border-s mar-20" />
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
                    {props.lists.map((object, index)=> {
                        if (index === 0) {
                            return <article className="art-bar-b" key={index}>
                            <a href="#"><img src={object.thumb_link} /></a>
                            <h4><a href="#" title="">{object.title}</a></h4>
                        </article>
                        } else {
                            return <article className="art-bar-s art-hori" key={index}>
                            <a href="#"><img src={object.thumb_link} /></a>
                            <div className="des">
                                <h4><a href="#" title="">{object.title}</a></h4>
                            </div>
                        </article>
                        }
                    })}
                </div>
                <div className="block-bar block-banner ui sticky one"><a href="#" title=""><img src="/static/img/banner-300x250.jpg" /></a></div>
            </div>
        </div>
    </div>

)
export default DetailObject