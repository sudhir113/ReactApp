import React from 'react';

class Latest extends React.Component {
    render() {
        return (
            <div>
            <section  id="about">
                  <div className="container">
                      <div className="row m-b-lg">
                          <div className="col-lg-12 text-center">
                              <div className="navy-line"></div>
                              <h1>About Company</h1>
                              <address>
                            This is E-commorse based company which provide e-commerse solution .
                              </address>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-12 text-center">
                              <a href="mailto:test@email.com" className="btn btn-primary">Send us mail</a>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-lg-8 col-lg-offset-2 text-center m-t-lg m-b-lg">
                              <p><strong>© 2017 website.io</strong></p>
                              </div>
                      </div>
                  </div>
              </section>
            </div>
        );
    }
}

export default Latest;
