import Header from './Header';
import Footer from './Footer';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Layout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
    <a href="javascript:void(0)" title="top" className="btn-top"><i className="fa fa-chevron-up" /></a>
  </div>
);

export default Layout;