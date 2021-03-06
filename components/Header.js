import { useContext } from 'react'
import ModalRegister from './modals/ModalRegister';
import ModalLogin from './modals/ModalLogin';
import ModalComment from './modals/ModalComment';
import { UserConText } from './UserContext';
import Logined from './Logined';


function Header() {
  const { user } = useContext(UserConText);
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
              {(user.isLogin) ? <Logined name={user.name} />
                : <span><a href="#" data-toggle="modal" data-target="#registerModal">Đăng ký</a> | <a href="#" data-toggle="modal" data-target="#loginModal">Đăng nhập</a></span>
              }
            </li>
            <li className="pull-right"><a title="Hot Line" href="tel:0918033133"><i aria-hidden="true" className="icon icon-call" />Hotline: 0918.033.133</a></li>
          </ul>
        </div>
      </div>
      <div className="header-middle">
        <div className="container clearfix">
          <h1>
            <a href="/" title="Tuổi Trẻ News" className="sprite-tvo logoheader"><img src="/static/img/logo-ttc-pc.svg" alt="" /></a>
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
            <li><a href="/">Tin tức</a></li>
            <li><a href="/biem-hoa">Biếm họa</a></li>
            <li><a href="/video">Video</a></li>
            <li className="send"><a className="btn-send" href="#">+ Gửi bài</a></li>
          </ul>
        </div>
      </div>
      <div className="banner-top">
        <div className="container"><img src="/static/img/banner-980x90.jpg" /></div>
      </div>
      <ModalRegister />
      <ModalLogin />
      <ModalComment />
    </header>
  )
}
export default Header;