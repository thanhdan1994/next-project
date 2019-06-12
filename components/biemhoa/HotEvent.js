import React, { Component } from "react";
import Link from 'next/link';

export default class HotEvent extends Component {
    render() {
        return (
            <div className="block block-hot">
                <h3 className="title-style">Khủng hoảng chính trị Venezuela <a className="btn-viewmore" href="#">Xem thêm</a></h3>
                <div className="row">
                {this.props.lists.map(object => (
                    <div className="col-sm-4" key={object.object_id}>
                        <article className="art-hot">
                            <Link href={`/post?id=${object.object_id}`} as={`/post/${object.object_id}`} >
                                <a className="thumb"><img src={object.thumb_link} /></a>
                            </Link>
                            <h4>
                                <Link href={`/post?id=${object.object_id}`} as={`/post/${object.object_id}`} >
                                    <a>{object.title}</a>
                                </Link>
                            </h4>
                        </article>
                    </div>
                ))}
                </div>
            </div>

        )
    }
}