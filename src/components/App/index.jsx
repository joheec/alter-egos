import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Splash from '../Splash';
import SocialMedia from '../SocialMedia';
import './styles.css';

function App() {
  return (
    <div className='app-container'>
      <div className='app-socialmedia'>
        <SocialMedia />
      </div>
      <Splash />
    </div>
  );
  // return (
  //   <Router>
  //     <Header />
  //       <div>
  //         <Navigation />
  //         <div>
  //           <Route exact path='/' component={Homepage} />
  //           <Route exact path='/merchandise' component={Merchandise} />
  //           <Route exact path='/calendar' component={Calendar} />
  //           <Route exact path='/clips' component={Clips} />
  //         </div>
  //       </div>
  //   </Router>
  // );
};

export default App;
