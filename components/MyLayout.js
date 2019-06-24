import Header from './Header';
import Footer from './Footer';

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
    <a href="javascript:void(0)" title="top" className="btn-top"><i className="fa fa-chevron-up" /></a>
  </div>
);

export default Layout;