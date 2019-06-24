import { Component } from "react";

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="top-footer">
                    <div className="container">
                        <ul className="list-logo">
                            <li className="fl"><a title="Tuổi Trẻ" rel="nofollow" target="_blank"><img src="/static/img/Tuoi-tre-online.png" alt="logo tuổi trẻ " /></a></li>
                            <li className="fl"><a rel="nofollow" target="_blank"><img src="/static/img/LogoTTCT.png" /></a></li>
                            <li className="fl"><a title="Tuổi trẻ TV" rel="nofollow" target="_blank"><img src="/static/img/Tuoi-tre-tv.png" alt="logo tuổi trẻ TV" /></a></li>
                        </ul>
                        <ul className="list-social list-social-bottom">
                            <li><a><i className="fa fa-youtube-play" aria-hidden="true" /></a></li>
                            <li><a><i className="fa fa-facebook" aria-hidden="true" /></a></li>
                            <li><a><i className="fa fa-instagram" aria-hidden="true" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <a className="logo-footer"><img src="/static/img/logo-ttc-footer.svg" /></a>
                        <p className="fl">
                            <strong>Tuổi Trẻ Cười Online</strong> <br />
                            © Copyright 2019 TuoiTre Online, All rights reserved <br />
                            ® Tuổi Trẻ Online giữ bản quyền nội dung trên website này
                        </p>
                        <p className="fr">
                            <a>Thông tin Tòa soạn</a> -
                            <a>Thông tin Thành Đoàn</a>
                            <br />
                            Liên hệ Quảng cáo: <a href="tel:02839974848">0283.997.4848</a> - Hotline: <a href="tel:0918033133"> 0918.033.133</a>
                        </p>
                    </div>
                </div>
            </footer>
        )
    }
}