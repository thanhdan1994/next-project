import { useContext } from 'react';
import Link from 'next/link';
import { withCookies } from 'react-cookie';
import { UserConText } from './UserContext';

export default withCookies(function Logined(props) {
    const { cookies } = props;
    const { dispatch } = useContext(UserConText);
    function handleLogout(e) {
        e.preventDefault();
        dispatch({ type: 'logout' });
        cookies.remove('infoUser');
    }
    return (
        <div className="dropdown dropdown-user">
            <Link href="javascript:void(0)">
                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="img-login" src="https://media.pixcove.com/N/8/8/Man-Gentleman-Silhouette-Gray-Free-Illustrations-F-0424.jpg" />
                    {props.name}
                </a>
            </Link>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" x-placement="bottom-end">
                <a className="dropdown-item">Bình luận của bạn</a>
                <a className="dropdown-item">Bài đã duyệt</a>
                <a className="dropdown-item">Cài đặt tài khoản</a>
                <Link href="javascript:void(0)">
                    <a className="dropdown-item" onClick={handleLogout}>
                        <strong>Đăng xuất</strong>
                    </a>
                </Link>
            </div>
        </div>
    )
})