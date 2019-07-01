import Header from './Header';
import Footer from './Footer';
import NProgress from 'nprogress';
import Router from 'next/router';

Router.events.on('routeChangeStart', url => {
    // console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const Layout = props => (
  <>
    <Header />
    {props.children}
    <Footer />
    <a href="javascript:void(0)" title="top" className="btn-top"><i className="fa fa-chevron-up" /></a>
    <style jsx global>{`
    /* Make clicks pass-through */
    #nprogress {
      pointer-events: none;
    }
    
    #nprogress .bar {
      background: #c4101d;
    
      position: fixed;
      z-index: 1031;
      top: 0;
      left: 0;
    
      width: 100%;
      height: 2px;
    }
    
    /* Fancy blur effect */
    #nprogress .peg {
      display: block;
      position: absolute;
      right: 0px;
      width: 100px;
      height: 100%;
      box-shadow: 0 0 10px #c4101d, 0 0 5px #c4101d;
      opacity: 1;
    
      -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
      transform: rotate(3deg) translate(0px, -4px);
    }
    
    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 1031;
      top: 15px;
      right: 15px;
    }
    
    .nprogress-custom-parent {
      overflow: hidden;
      position: relative;
    }
    
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
      position: absolute;
    }
    
    @-webkit-keyframes nprogress-spinner {
      0% {
        -webkit-transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @keyframes nprogress-spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    `}</style>
  </>
);

export default Layout;