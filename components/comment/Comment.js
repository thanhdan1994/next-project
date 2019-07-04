import { useState, useContext, useEffect } from 'react'
import { UserConText } from './../UserContext';

function Comment(props) {
    // const [content, setContent] = useState();
    // const { user } = useContext(UserConText);

    // function handleSendComment(e, o) {
    //     console.log(o);
    //     if (content) {
    //         if (user.isLogin) {
    //             alert(user.email + " " + user.name + " " + content)
    //         } else {
    //             console.log(document.getElementsByName('hidContent')[0]);
    //             document.getElementsByName('hidContent')[0].value = content;
    //             document.getElementsByName('hidOid')[0].value = o;
    //             $('#modalCom_1').modal('show')
    //         }
    //     } else {
    //         alert("invalid content");
    //     }
    // }

    useEffect(() => {
        let libcm = document.createElement('script');
        libcm.src = '/static/js/lib-cm.js';
        document.body.appendChild(libcm);
        let cm = document.createElement('script');
        cm.src = '/static/js/comment.js';
        document.body.appendChild(cm);
    })

    return (
        <div className="block-comment">
            <div className="comment-write">
                <h4>Viết bình luận</h4>
                <textarea className="box-reply-cm" placeholder="Viết bình luận của bạn ở đây" />
                <div className="text-right">
                    <button className="btn-comment">
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Gửi bình luận
                    </button>
                </div>
            </div>
            <div className="wrapper-cm">
                <div className="plugin-comment">
                    <div className="tool-comment">
                        <span className="fr">
                            <a className="active" href="javascript:;" data-filter="like">Nổi bật</a>
                            <a href="javascript:;" data-filter="date">Mới nhất</a>
                        </span>
                    </div>
                    <div className="wrapper-comment" id="comment-render" data-pagecm={2}>
                        <a href="javascript:;" className="viewmore" id="viewmorecm">Xem thêm bình luận</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comment