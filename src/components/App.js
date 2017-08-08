// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './common/TopHeader';
import Footer from './common/Footer';
import Slider from './about/SliderPage';
import Work from './about/workFlowPage';
import About from './about/AboutPage';

class App extends React.Component {
  render() {
    return (
      <div>
      <Header/>
      <Slider/>
      <Work/>
      <About/>
      <Footer/>
  {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};



export default App;
