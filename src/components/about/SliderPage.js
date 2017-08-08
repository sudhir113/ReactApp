import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div id ='home' className='container slide'>
        <Slider {...settings}>
        <div className='row'>
        <div className="col-md-6 my_page">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Website io information in Market.</h1>
            <p className="card-text">It provide greate solutions for developing greate sides which require less time</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
        <div className='col-sm-6 col-xs-12 '><img className="img-responsive" src={require('../img/benefi-control_m_2x.jpg')} /></div>
        </div>
        <div className='row'>
        <div className="col-md-6 my_page">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Website io information in Market.</h1>
            <p className="card-text">It provide greate solutions for developing greate sides which require less time</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
        <div className='col-sm-6 col-xs-12 '><img className="img-responsive" src={require('../img/benefi-control_m_2x.jpg')} /></div>
        </div>
        <div className='row'>
        <div className="col-md-6 my_page">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Website io information in Market.</h1>
            <p className="card-text">It provide greate solutions for developing greate sides which require less time</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
        <div className='col-sm-6 col-xs-12 '><img className="img-responsive" src={require('../img/benefi-control_m_2x.jpg')} /></div>
        </div>
        <div className='row'>
        <div className="col-md-6 my_page">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Website io information in Market.</h1>
            <p className="card-text">It provide greate solutions for developing greate sides which require less time</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
        <div className='col-sm-6 col-xs-12 '><img className="img-responsive" src={require('../img/benefi-control_m_2x.jpg')} /></div>
        </div>
        <div className='row'>
        <div className="col-md-6 my_page">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Website io information in Market.</h1>
            <p className="card-text">It provide greate solutions for developing greate sides which require less time</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
        <div className='col-sm-6 col-xs-12 '><img className="img-responsive" src={require('../img/benefi-control_m_2x.jpg')} /></div>
        </div>
        <div className='row'>
        <div className="col-md-6 my_page">
        <div className="card">
          <div className="card-block">
            <h1 className="card-title">Website io information in Market.</h1>
            <p className="card-text">It provide greate solutions for developing greate sides which require less time</p>
            <a href="#" className="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
        <div className='col-sm-6 col-xs-12 '><img className="img-responsive" src={require('../img/benefi-control_m_2x.jpg')} /></div>
        </div>
      </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
