import { useState, useContext } from 'react'
import { UserConText } from './../UserContext';

function Comment(props) {
    const [content, setContent] = useState();
    const { user } = useContext(UserConText);

    function handleSendComment(e, o) {
        console.log(o);
        if (content) {
            if (user.isLogin) {
                alert(user.email + " " + user.name + " " + content)
            } else {
                console.log(document.getElementsByName('hidContent')[0]);
                document.getElementsByName('hidContent')[0].value = content;
                document.getElementsByName('hidOid')[0].value = o;
                $('#modalCom_1').modal('show')
            }
        } else {
            alert("invalid content");
        }
    }

    return (
        <div className="block-comment">
            <div className="comment-write">
                <h4>Viết bình luận</h4>
                <textarea className="box-reply-cm" onChange={e => setContent(e.target.value)} placeholder="Viết bình luận của bạn ở đây" />
                <div className="text-right">
                    <button className="btn-comment" onClick={e => handleSendComment(e, props.ObjectId)}>
                        <i className="fa fa-paper-plane-o" aria-hidden="true"></i> Gửi bình luận
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comment