import React,{Component} from 'react';
import {Link} from 'react-router';

class Header extends React.Component{


  render(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
          <div className="container">
          <div className="logo-header">
          <a className="pass-params product-logo">
          <img src={require('../img/website.png')} />
          </a>
          </div>
          <div className="navbar-header page-scroll">
                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                 </button>
             </div>

             <div className="collapse navbar-collapse navbar-ex1-collapse">
                 <ul className="nav navbar-nav my_nave"id=" padding-top-20">
                     <li className="hidden">
                         <a className="page-scroll" href="#page-top"></a>
                     </li>
                     <li>
                         <a className="page-scroll" href="#home">Home</a>
                     </li>
                     <li>
                         <a className="page-scroll" href="#about">About Us</a>
                     </li>
                     <li>
                         <a className="page-scroll" href="#works">How it Works</a>
                     </li>
                     <li>
                         <a className="page-scroll" href="#contact">Contact</a>
                     </li>
                 </ul>
             </div>
         </div>
     </nav>


    );
  }
}

export default Header;
