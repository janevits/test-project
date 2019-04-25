import React, { Component } from 'react';
import Header from '../Header';
import Footer from'../Footer';
const styled = require('styled-components').default;


const AppStyle = styled.div `
  .container{
   min-height:100%;
   position:relative;
  }
  .body{
    padding-bottom:190px;
    background-image: url("https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/bg.jpg");
  }
`
class App extends Component {
  render() {
    return (
      <AppStyle>
        <div className="App">
            <div className="container">
              <Header/>
              <div className="body">
              {this.props.children}
              </div>
              {!this.props.location.pathname.startsWith("/product/") && (
                <Footer/>
              )}
            </div>
        </div>
      </AppStyle>
      
    );
  }
}

export default App;
