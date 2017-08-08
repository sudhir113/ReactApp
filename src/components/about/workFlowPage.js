import React from 'react';


class NewPage extends React.Component {
  render() {
    return (
      <div>
      <section id="works" className="timeline gray-section">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <div className="navy-line"></div>
                      <h1>Our workflow</h1>
                      <p>work flow For our solutions here. </p>
                  </div>
              </div>
              <div className="row features-block">

                  <div className="col-lg-12">
                      <div id="vertical-timeline" className="vertical-container light-timeline center-orientation">
                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon navy-bg">
                                  <i className="fa fa-briefcase"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Meeting</h2>
                                  <p>Conference on the sales results for the previous year. Amit please examine sales trends in marketing and products. Below please find the current status of the sale.
                                  </p>
                                  <a href="#" className="btn btn-xs btn-primary"> More info</a>
                                  <span className="vertical-date"> Today  <small>Dec 24</small> </span>
                              </div>
                          </div>

                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon navy-bg">
                                  <i className="fa fa-file-text"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Decision</h2>
                                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since.</p>
                                  <a href="#" className="btn btn-xs btn-primary"> More info</a>
                                  <span className="vertical-date"> Tomorrow  <small>Dec 26</small> </span>
                              </div>
                          </div>

                          <div className="vertical-timeline-block">
                              <div className="vertical-timeline-icon navy-bg">
                                  <i className="fa fa-cogs"></i>
                              </div>

                              <div className="vertical-timeline-content">
                                  <h2>Implementation</h2>
                                  <p>Go to shop and find some products. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys. </p>
                                  <a href="#" className="btn btn-xs btn-primary"> More info</a>
                                  <span className="vertical-date"> Monday <small>Jan 02</small> </span>
                              </div>
                          </div>

                      </div>
                  </div>

              </div>
          </div>

      </section>
     </div>
    );
  }
}
export default NewPage;
