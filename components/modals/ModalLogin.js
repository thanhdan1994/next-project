import { useState, useContext } from 'react';
import { API_USER_DOMAIN } from '../../constant/Constant';
import { UserConText } from '../UserContext';
import { withCookies } from 'react-cookie';

export default withCookies(function ModalLogin(props) {
    const { cookies } = props;
    const { dispatch } = useContext(UserConText);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(false);
    async function handleLogin(e) {
        e.preventDefault();
        var formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        formData.append('remenberMe', false);
        let res = await fetch(`${API_USER_DOMAIN}/login.html`, {
            method: 'POST',
            body: formData

        })
        let res1 = await res.json();
        if (res1.success) {
            var access_token = res1.data.access_token;
            var data = new FormData();
            data.append('access_token', access_token)
            let res2 = await fetch(`${API_USER_DOMAIN}/login.html`, {
                method: 'POST',
                body: data

            })
            let res3 = await res2.json();
            if (res3.success) {
                const { email, name } = res3.data;
                alert("đăng nhập thành công!");
                dispatch({type: 'login'})
                // localStorage.setItem('infoUser', JSON.stringify({ email, name }))
                cookies.set('infoUser', JSON.stringify({ email, name }))
                $('#loginModal').modal('hide')
            }
        }
        setMessage(true)
    }

    return <div className="modal fade modal-login" id="loginModal" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                    <h4 className="title-modal">Đăng nhập </h4>
                    <form className="frm-general">
                        <div className="form-group">
                            <label>Email</label>
                            <input className="form-control" value={email} type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Mật khẩu</label>
                            <input className="form-control" value={password} type="password" name="pass" onChange={(e) => setPassword(e.target.value)} />
                            {message ? <p className="warning warning-login-password">Thông tin đăng nhập không đúng</p> : ''}
                        </div>
                        <div className="form-group">
                            <button className="btn-login" onClick={handleLogin}>Đăng nhập</button>
                        </div>
                        <div className="inner-frm">
                            <a className="link-forgot" data-toggle="modal" data-target="#resetPassModal" data-dismiss="modal">Quên mật khẩu?</a>
                        </div>
                    </form>
                    <p className="text-center">Hoặc đăng nhập bằng</p>
                    <div className="outer-btn-social">
                        <div className="col">
                            <a className="btn-facebook" href="#"> <i className="fa fa-facebook" aria-hidden="true" /> Facebook</a>
                        </div>
                        <div className="col">
                            <a className="btn-google" href="#"><i className="fa fa-google" aria-hidden="true" /> Google</a>
                        </div>
                    </div>
                    <div className="text-left">
                        <a className="link-register" data-toggle="modal" data-target="#registerModal"><i>Chưa có tài khoản? <strong> Đăng ký ngay</strong></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
})