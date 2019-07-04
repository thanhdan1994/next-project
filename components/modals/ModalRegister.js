import { API_USER_DOMAIN } from './../../constant/Constant';
import isEmail from 'validator/lib/isEmail';
import React, { useState } from 'react';

export default function Register() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    async function handleSignup(e) {
        e.preventDefault();
        if (isEmail(email) && name.length > 5 && password.length > 5 && password === rePassword) {
            var formData = new FormData();
            formData.append('email', email);
            formData.append('fullname', name);
            formData.append('password', password);
            formData.append('rePassword', password);
            formData.append('verifyCode', 'xowayi');
            let send = await fetch(`${API_USER_DOMAIN}/sign-up.html`, {
                method: 'POST',
                body: formData
            })
            let res = await send.json();
            console.log(res);
            document.getElementsByClassName('warning-login-button')[0].style.display = 'none';
        } else {
            document.getElementsByClassName('warning-login-button')[0].style.display = 'block';
        }
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        if (!isEmail(e.target.value)) {
            document.getElementsByClassName('warning-email-input')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('warning-email-input')[0].style.display = 'none';
        }
    }

    function handleChangeName(e) {
        setName(e.target.value)
        if (e.target.value.length < 6) {
            document.getElementsByClassName('warning-name-input')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('warning-name-input')[0].style.display = 'none';
        }
    }

    function handleChangePass(e) {
        setPassword(e.target.value);
        if (e.target.value.length < 6) {
            document.getElementsByClassName('warning-pass-input')[0].style.display = 'block';
        } else {
            setPassword(e.target.value);
            document.getElementsByClassName('warning-pass-input')[0].style.display = 'none';
        }
    }
    function handleChangeRepass(e) {
        setRePassword(e.target.value)
        if (e.target.value !== password) {
            document.getElementsByClassName('warning-repass-input')[0].style.display = 'block';
        } else {
            document.getElementsByClassName('warning-repass-input')[0].style.display = 'none';
        }
    }
    return (
        <div className="modal fade modal-login" id="registerModal" tabIndex={-1} role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    <div className="modal-body">
                        <h4 className="title-modal">Đăng ký </h4>
                        <form className="frm-general">
                            <div className="form-group">
                                <label>Email</label>
                                <input value={email} className="form-control" type="email" onChange={(e) => handleChangeEmail(e)} />
                                <p className="text-danger warning-email-input" style={{display: 'none'}}>Email không đúng định dạng</p>
                            </div>
                            <div className="form-group">
                                <label>Họ và tên</label>
                                <input className="form-control" type="text" onChange={e => handleChangeName(e)} />
                                <p className="text-danger warning-name-input" style={{display: 'none'}}>Tên phải có ít nhất 6 ký tự</p>
                            </div>
                            <div className="form-group">
                                <label>Mật khẩu</label>
                                <input value={password} className="form-control" type="password" name="pass" onChange={e => handleChangePass(e)} />
                                <p className="text-danger warning-pass-input" style={{display: 'none'}}>Mật khẩu phải có ít nhất 6 ký tự</p>
                            </div>
                            <div className="form-group">
                                <label>Xác nhận mật khẩu</label>
                                <input value={rePassword} className="form-control" type="password" name="pass" onChange={e => handleChangeRepass(e)} />
                                <p className="text-danger warning-repass-input" style={{display: 'none'}}>Mật khẩu nhập lại không đúng</p>
                            </div>
                            <div className="form-group">
                                <label>Mã xác nhận</label>
                                <div className="inner-code">
                                    <input className="form-control" type="text" name="name" />
                                    <div className="img-code">
                                        <img id="captcha-image" src={`https://sbetacuoi.tuoitre.vn/index.php?r=site%2Fcaptcha&amp;v=ffffffffffff.asssssssssssss`} />
                                    </div>
                                    <a className="btn-refesh" href="#">Lấy mã mới</a>
                                </div>
                            </div>
                            <div className="form-group">
                                <label><input type="checkbox" />Khi bấm "Đăng ký" đồng thời bạn đã đồng ý với <a href="#"><strong>điều khoản</strong></a> của tòa soạn</label>
                            </div>
                            <button className="btn-login" onClick={e => handleSignup(e)}>Đăng ký</button>
                            <p className="text-danger warning-login-button" style={{display: 'none'}}>Dữ liệu nhập vào không hợp lệ</p>
                        </form>
                        <br />
                        <p className="text-center">Hoặc đăng ký bằng</p>
                        <div className="outer-btn-social">
                            <div className="col">
                                <a className="btn-facebook" href="#"> <i className="fa fa-facebook" aria-hidden="true" /> Facebook</a>
                            </div>
                            <div className="col">
                                <a className="btn-google" href="#"><i className="fa fa-google" aria-hidden="true" /> Google</a>
                            </div>
                        </div>
                        <div className="text-left">
                            <a className="link-register" data-toggle="modal" data-target="#loginModal" data-dismiss="modal"><i>Đã có tài khoản? <strong> Đăng nhập</strong></i></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <style jsx>{`
                <style>
                    .warning{
                        color:red;
                    }
                    .re-captcha-group{
                        margin: auto;
                        width: 50%;
                        padding: 10px;
                    }
                    .btn-click {
                        height: 32px;
                        line-height: 32px;
                        width: 100%;
                        text-align: center;
                        color: #fff;
                        background: #6c757e;
                        cursor: pointer;
                        border: none;
                    }
                </style>
            `}</style> */}
        </div>

    )
}