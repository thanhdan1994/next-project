import { getPriority } from "os";

function LastBlock(props) {
    return (
        <div className="block-enter">
            <div className="outer">
                <article className="art-enter art-b">
                    <a className="thumbs" href="#"><img src={props.prior[0].thumb_link} /><i className="icon icon-video" /></a>
                    <div className="des">
                        <h3 className="hasComment"><a href="#">{props.prior[0].title}</a></h3>
                        <a className="link-cat">Nghe đồn là</a>
                        <p>{props.prior[0].description}</p>
                    </div>
                </article>
                <div className="block-bar block-qc">
                    <a href="#"><img src="/static/img/banner-300x250.jpg"/></a>
                </div>
            </div>
            <div className="list-enter">
                <div className="row">
                    {props.lists.map((object, index) => (
                        <div className="col" key={index}>
                            <article className="art-enter-s"><a href="#"><img src={object.thumb_link} /></a>
                                <h3><a href="#">{object.title}</a></h3>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default LastBlock