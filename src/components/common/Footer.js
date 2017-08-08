import React from 'react';

class Footer extends React.Component {
    render() {
        return (
          <footer id='contact' className="footer-distributed">

    <div className="footer-left">

      <h3><span>
      <a className="pass-params product-logo">
      <img src={require('../img/website.png')} />
      </a>
      </span></h3>

      <p className="footer-company-name">Website.io © 2017</p>
    </div>

    <div className="footer-center">

      <div>
        <i className="fa fa-map-marker"></i>
        <p><span>At Pune, Banner</span> India</p>
      </div>

      <div>
        <i className="fa fa-phone"></i>
        <p>9892909320</p>
      </div>

      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:website.com">website.io.in</a></p>
      </div>

    </div>

    <div className="footer-right">

      <div className="footer-icons">

        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-github"></i></a>

      </div>

    </div>

  </footer>
        );
    }
}

export default Footer;
