const MiddleContent = props => (
    <div className="outer outer-mid  scrollToOne">
        <section className="content">
            <div className="list-news">
                {props.lists.listSection.map((object, index) => {
                    if (index === 0) {
                        return <article className="art-style" key={index}>
                            <div className="slick-thumb">
                                <div key={index}>
                                    <a className="thumb" href=""><img src={object.thumb_link} alt="" /></a>
                                </div>
                            </div>
                            <div className="des">
                                <h3><a href="#" title={object.title}>{object.title}</a></h3>
                                <a className="btn-viewmore" href="#" title={object.title}>Xem thêm <i className="icon icon-viewmore" /></a>
                            </div>
                        </article>
                    }
                    if (index === 1) {
                        return <article className="art-lastest art-b" key={index}>
                            <a href="#" title={object.title}><img src={object.thumb_link} style={{}} alt="" /><i className="icon icon-video" /></a>
                            <div className="des">
                                <h4 className="hasComment"><a href="#" title={object.title}>{object.title}</a> <span className="outer-icon"><span className="number">43</span><i className="icon icon-comment" /></span></h4>
                                <a className="cat" href="#">Thời sự</a>
                                <article className="art-s">
                                    <h4><a href="#" title={object.title}>Sương sớm, À ố Show, Teh Dar diễn ở phố cổ Hội An</a></h4>
                                </article>
                            </div>
                        </article>
                    } else {
                        return <article className="art-lastest" key={index}>
                            <a href="#" title={object.title}><img src={object.thumb_link} style={{}} alt="" /><i className="icon icon-video" /></a>
                            <div className="des">
                                <h4><a href="#" title={object.title}>{object.title}</a></h4>
                                <a className="cat" href="#">Thời sự</a>
                            </div>
                        </article>
                    }
                })}
            </div>
        </section>
        <aside className="sidebar">
            <div className="block-bar ui sticky one">
                <h3 className="title-note"><a href="#" title="">Đáng chú ý</a></h3>
                <div className="inner-gray">
                    {props.lists.listAside.map((object, index) => {
                        if (index === 0) {
                            return <article className="art-bar-b" key={index}>
                                <a href="#"><img src={object.thumb_link} alt=""/></a>
                                <h4><a href="#" title="">{object.title}</a></h4>
                            </article>
                        }
                        return <article className="art-bar-s art-hori" key={index}>
                            <a href="#"><img src={object.thumb_link} alt=""/></a>
                            <div className="des">
                                <h4><a href="#" title="">{object.title}</a></h4>
                            </div>
                        </article>
                    })}
                </div>
            </div>
        </aside>
    </div >

)

export default MiddleContent