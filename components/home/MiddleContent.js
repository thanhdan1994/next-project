import Link from 'next/link'
import React, { Component } from 'react'

export default class MiddleContent extends Component {
    componentDidMount() {
        $('.slick-thumb').slick({
            dots: false,
            autoplay: true,
             autoplaySpeed: 2000,
            infinite: true
        });
    }
    render() {
        return (
            <div className="outer outer-mid  scrollToOne">
                <section className="content">
                    <div className="list-news">
                        {this.props.lists.listSection.map((object, index) => {
                            if (index === 0) {
                                return <article className="art-style" key={index}>
                                    <div className="slick-thumb">
                                        <div key={index}>
                                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                                <a className="thumb"><img src={object.thumb_link} /></a>
                                            </Link>
                                        </div>
                                        <div>
                                            <a className="thumb"><img src="/static/img/photo/8-min.jpg"/></a>
                                        </div>
                                        <div>
                                            <a className="thumb"><img src="/static/img/img-default.jpg"/></a>
                                        </div>
                                        <div>
                                            <a className="thumb"><img src="/static/img/photo/8-min.jpg"/></a>
                                        </div>

                                    </div>
                                    <div className="des">
                                        <h3>
                                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                                <a title={object.title}>{object.title}</a>
                                            </Link>
                                        </h3>
                                        <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                            <a className="btn-viewmore" title={object.title}>Xem thêm <i className="icon icon-viewmore" /></a>
                                        </Link>
                                    </div>
                                </article>
                            }
                            if (index === 1) {
                                return <article className="art-lastest art-b" key={index}>
                                    <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                        <a title={object.title}><img src={object.thumb_link} /><i className="icon icon-video" /></a>
                                    </Link>
                                    <div className="des">
                                        <h4 className="hasComment">
                                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                                <a title={object.title}>{object.title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </article>
                            } else {
                                return <article className="art-lastest" key={index}>
                                    <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                        <a title={object.title}><img src={object.thumb_link} /><i className="icon icon-video" /></a>
                                    </Link>
                                    <div className="des">
                                        <h4>
                                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                                <a title={object.title}>{object.title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </article>
                            }
                        })}
                    </div>
                </section>
                <aside className="sidebar">
                    <div className="block-bar ui sticky one">
                        <h3 className="title-note">Đáng chú ý</h3>
                        <div className="inner-gray">
                            {this.props.lists.listAside.map((object, index) => {
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
                                }
                                return <article className="art-bar-s art-hori" key={index}>
                                    <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                        <a><img src={object.thumb_link} /></a>
                                    </Link>
                                    <div className="des">
                                        <h4>
                                            <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
                                                <a title="">{object.title}</a>
                                            </Link>
                                        </h4>
                                    </div>
                                </article>
                            })}
                        </div>
                    </div>
                </aside>
            </div >
        )
    }
}
// const MiddleContent = props => (
//     <div className="outer outer-mid  scrollToOne">
//         <section className="content">
//             <div className="list-news">
//                 {props.lists.listSection.map((object, index) => {
//                     if (index === 0) {
//                         return <article className="art-style" key={index}>
//                             <div className="slick-thumb">
//                                 <div key={index}>
//                                     <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                         <a className="thumb"><img src={object.thumb_link}/></a>
//                                     </Link>
//                                 </div>
//                             </div>
//                             <div className="des">
//                                 <h3>
//                                     <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                         <a title={object.title}>{object.title}</a>
//                                     </Link>
//                                 </h3>
//                                 <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                     <a className="btn-viewmore" title={object.title}>Xem thêm <i className="icon icon-viewmore" /></a>
//                                 </Link>
//                             </div>
//                         </article>
//                     }
//                     if (index === 1) {
//                         return <article className="art-lastest art-b" key={index}>
//                             <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                 <a title={object.title}><img src={object.thumb_link} /><i className="icon icon-video" /></a>
//                             </Link>
//                             <div className="des">
//                                 <h4 className="hasComment">
//                                     <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                         <a title={object.title}>{object.title}</a>
//                                     </Link>
//                                 </h4>
//                             </div>
//                         </article>
//                     } else {
//                         return <article className="art-lastest" key={index}>
//                             <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                 <a title={object.title}><img src={object.thumb_link}/><i className="icon icon-video" /></a>
//                             </Link>
//                             <div className="des">
//                                 <h4>
//                                     <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                         <a title={object.title}>{object.title}</a>
//                                     </Link>
//                                 </h4>
//                             </div>
//                         </article>
//                     }
//                 })}
//             </div>
//         </section>
//         <aside className="sidebar">
//             <div className="block-bar ui sticky one">
//                 <h3 className="title-note">Đáng chú ý</h3>
//                 <div className="inner-gray">
//                     {props.lists.listAside.map((object, index) => {
//                         if (index === 0) {
//                             return <article className="art-bar-b" key={index}>
//                                 <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                     <a><img src={object.thumb_link}/></a>
//                                 </Link>
//                                 <h4>
//                                     <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                         <a>{object.title}</a>
//                                     </Link>
//                                 </h4>
//                             </article>
//                         }
//                         return <article className="art-bar-s art-hori" key={index}>
//                             <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                 <a><img src={object.thumb_link}/></a>
//                             </Link>
//                             <div className="des">
//                                 <h4>
//                                     <Link as={`/post/${object.object_id}`} href={`/post?id=${object.object_id}`}>
//                                         <a title="">{object.title}</a>
//                                     </Link>
//                                 </h4>
//                             </div>
//                         </article>
//                     })}
//                 </div>
//             </div>
//         </aside>
//     </div >

// )

// export default MiddleContent