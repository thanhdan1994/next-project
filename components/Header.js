import React, { useState } from 'react'
import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useCookies } from 'react-cookie';

function Header() {
  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  const [isLogin, setIsLogin] = (cookies.infoUser) ? useState(true) : useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(false);

  function handleLogin(e) {
    e.preventDefault()
    if (email === 'thanhdan26081994@gmail.com' && password === '123456@') {
      setIsLogin(true);
      setCookie('infoUser', JSON.stringify({ email: 'thanhdan26081994@gmail.com', age: '25' }))
      alert("đăng nhập thành công!");
      $('#loginModal').modal('hide')
    }
    setMessage(true)
  }

  function handleLogout(e) {
    e.preventDefault()
    setIsLogin(false);
    removeCookie('infoUser')
  }
  return (
    <header>
      <div className="header-top">
        <div className="container clearfix">
          <ul className="list-logo-top">
            <li className="fl"><a title="Tuổi Trẻ" href="#" rel="nofollow" target="_blank"><img src="/static/img/Tuoi-tre-online.png" alt="logo tuổi trẻ " /></a></li>
            <li className="fl"><a title="Tuổi trẻ cuối tuần" href="#" rel="nofollow" target="_blank"><img src="/static/img/LogoTTCT.png" alt="logo tuổi trẻ TV" /></a></li>
            <li className="fl"><a title="Tuổi trẻ TV" href="#" rel="nofollow" target="_blank"><img src="/static/img/Tuoi-tre-tv.png" alt="logo tuổi trẻ TV" /></a></li>
            <li className="link-login pull-right">
              {/* <i className="icon-user" /> */}
              {(isLogin) ? <div className="dropdown dropdown-user">
                <Link href="javascript:void(0)">
                  <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img className="img-login" src="https://media.pixcove.com/N/8/8/Man-Gentleman-Silhouette-Gray-Free-Illustrations-F-0424.jpg" />
                    trần thanh dân
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
                : <span>
                  <Link href="#">
                    <a>Đăng ký</a>
                  </Link>
                  |
                    <Link href="#">
                    <a data-toggle="modal" data-target="#loginModal">Đăng nhập</a>
                  </Link>
                </span>
              }
            </li>
            <li className="pull-right"><a title="Hot Line" href="tel:0918033133"><i aria-hidden="true" className="icon icon-call" />Hotline: 0918.033.133</a></li>
          </ul>
        </div>
      </div>
      <div className="header-middle">
        <div className="container clearfix">
          <h1>
            <Link href="/">
              <a title="Tuổi Trẻ News" className="sprite-tvo logoheader"><img src="/static/img/logo-ttc-pc.svg" alt="" /></a>
            </Link>
          </h1>
          <div id="search-frm" className="frm-search fr">
            <input id="txtSearch" type="text" placeholder="Nhập nội dung cần tìm ..." className="txt-search" />
            <button className="btn-search"><i className="icon icon-search" /></button>
          </div>
          <ul className="list-social-top">
            <li><a href="#" title=""><i className="fa fa-facebook" aria-hidden="true" /></a></li>
            <li><a href="#" title=""><i className="fa fa-instagram" aria-hidden="true" /></a></li>
            <li><a href="#" title=""><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>
      <div className="header-menu ui sticky">
        <div className="container">
          <ul className="clearfix">
            <ActiveLink href='/'>Tin tức</ActiveLink>
            <ActiveLink href='/biem-hoa'>Biếm họa</ActiveLink>
            <ActiveLink href='/video'>Video</ActiveLink>
            <li className="send"><a className="btn-send" href="#" title="">+ Gửi bài</a></li>
          </ul>
        </div>
      </div>
      <div className="banner-top">
        <div className="container"><img src="/static/img/banner-980x90.jpg" /></div>
      </div>
      <div className="modal fade modal-login" id="loginModal" tabIndex={-1} role="dialog">
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
                <a className="link-register" data-toggle="modal" data-target="#registerModal" data-dismiss="modal"><i>Chưa có tài khoản? <strong> Đăng ký ngay</strong></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
      /*header-top*/
      .header-top {
        padding: 2px 0 3px 0;
      }
      
      .header-top ul {
        
        padding-left: 0;
        margin-bottom: 0;
        padding-top: 2px;
      }
      
      .header-top ul li {
        float: left;
        list-style: none;
        margin-right: 0;
        font-family: 'Roboto', sans-serif;
        
      }
      
      .header-top ul li:nth-child(3) {
        margin-left: -5px;
      }
      
      .header-top ul li img {
        height: 26px;
      }
      
      .header-top ul li img.img-login {
        height: 16px;
        border-radius: 50%;
        margin-right: 5px;
        display: inline-block;
        vertical-align: top;
      }
      
      .header-top ul li.fl {
        margin-top: -3px;
        margin-bottom: -4px;
      }
      
      .header-top ul li.pull-right {
        color: #333;
        margin-right: 25px;
        margin-top: 0px;
        float: right;
        margin-bottom: 2px;
      }
      
      .header-top ul li.pull-right.link-login {
        float: right;
        margin-right: 0;
      }
      
      .header-top ul li a {
        text-transform: uppercase;
        font-size: 12px;
        color: #333;
        font-family: 'Roboto', sans-serif;
      }
      
      .header-top ul li.pull-right a {
        text-transform: none;
        color: #333;
      }
      
      .header-top ul li a:hover {
        text-decoration: none;
        color: #ee4130;
      }
      
      .header-top ul li select {
        color: #ee4130;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        border: none;
      }
      
      /*header-middle*/
      .header-middle {
        padding: 7px 0;
       background-image: linear-gradient(to right, #e8262b, #df2127, #d61c24, #cd1620, #c4101d);
      }
      
      .header-middle h1 {
        float: left;
        margin-bottom: 0;
      }
      
      .header-middle h1 img {
        display: block;
      }
      
      .frm-search {
        float: right;
        position: relative;
        width: 240px;
        margin-top: 5px;
        border: 0px solid #e1e1e1; border-radius: 0; overflow: hidden;
      }
      
      .frm-search input {
        border: none;
        height: 26px;
        line-height: 26px;
        padding: 0 30px 0 10px;
        font-size: 12px;
        color: #727b88;
        
        width: 100%;
      }
      
      .frm-search button {
        height: 28px;
        width: 28px;
        line-height: 33px;
        position: absolute;
        right: 0;
        top: 0;
        text-align: center;
        background: #950002;
        border: none;
        padding: 0;
        margin: 0; color: #fff;
      }
      .frm-search button:hover { background: #f5c824; color: #fff; }
      
      /*header-menu*/
      .header-menu {
        background-image: linear-gradient(to right, #c4101d, #cd1620, #d61c24, #df2127, #e8262b);
        height: 32px;  position: relative; z-index: 999!important;
      }
      
      .header-menu ul {
        padding-left: 0;
        margin-bottom: 0;
      }
      
      .header-menu ul li {
        float: left;
        list-style: none;
      }
      
      .header-menu ul li a {
        font-size: 14px; font-weight: 700;
        color: #fff;
        text-transform: uppercase;
        padding: 6.5px 18.3px;
        display: block;
      }
      
      .header-menu ul li a:hover {
        color: #fff !important;
      }
      
      .header-menu ul li.active a, .header-menu ul li a:hover {
        background: #a4071c;
        text-decoration: none;
      }
      
      .header-menu ul li:last-child {
        float: right;
      }
      /*.dropdown-menu.show*/
       .dropdown-user .dropdown-menu { margin: 0; padding: 0;  }
       .header-top ul li.pull-right .dropdown-menu { border: none; border-radius: 0; margin-top: 7px; }
      .header-top ul li.pull-right .dropdown-menu  a { padding: 10px 15px; background: #eaeaea; color: #333; }
      .header-top ul li.pull-right .dropdown-menu a:hover { background: #ea2431; color: #fff!important; }
      `}</style>
    </header>
  )
}
export default Header;