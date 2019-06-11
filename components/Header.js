import Link from 'next/link';
import ActiveLink from './ActiveLink'
const Header = () => (
  <header>
    <div className="header-top">
      <div className="container clearfix">
        <ul className="list-logo-top">
          <li className="fl"><a title="Tuổi Trẻ" href="#" rel="nofollow" target="_blank"><img src="/static/img/Tuoi-tre-online.png" alt="logo tuổi trẻ " /></a></li>
          <li className="fl"><a title="Tuổi trẻ cuối tuần" href="#" rel="nofollow" target="_blank"><img src="/static/img/LogoTTCT.png" alt="logo tuổi trẻ TV" /></a></li>
          <li className="fl"><a title="Tuổi trẻ TV" href="#" rel="nofollow" target="_blank"><img src="/static/img/Tuoi-tre-tv.png" alt="logo tuổi trẻ TV" /></a></li>
          <li className="link-login pull-right"><i className="icon-user" /> <span><a href="#" title="">Đăng ký</a> | <a href="#" title="">Đăng nhập</a></span></li>
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
  </header>

);

export default Header;