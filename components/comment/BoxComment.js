import { useState, useContext } from 'react'
import { UserConText } from './../UserContext';

function BoxComment(props) {
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
        <li className="text-cm">
            <textarea placeholder="Viết bình luận" onChange={e => setContent(e.target.value)} />
            <button className="btn-comment" onClick={e => handleSendComment(e, props.ObjectId)}>
                <i className="fa fa-paper-plane-o" aria-hidden="true" />
            </button>
        </li>
    )
}
export default BoxComment