import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Container,
  Grid,
  Tab,
  GridColumn,
  GridRow,
  Segment,
  Text,
  Button,
  Icon,
  Image,
  Divider,
  Header,
  List,
  Dropdown,
  Embed
} from 'semantic-ui-react';
import _ from 'lodash';

const styled = require('styled-components').default;

const CardContentStyle = styled.div `
.card-name{
    font-size:18pt;
    font-weight:bold;
    font-family: Helvethaica;
}
.card-desc{
    font-size:14pt;
    font-family: Helvethaica;
    word-break:break-all;
}
.more-detail{
    font-family: Helvethaica;
    font-size:10pt;
    color:#EA4200;
}
.more-detail-box{
    text-align:right;
}
`

class ProductCookie extends React.Component {
    render() {
        const name = this.props.name;
        const embeded = this.props.embeded;
        const related = this.props.related;
      return (
          <ProductCardStyle>
              <Container>
                  <Grid className="product-card">
                      <Grid.Row>
                        <Grid.Column width={16}>
                                <div className="card-image">
                                    {/* <Image src="https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/cooking-menu-header.png"/>                              */}
                                    {/* <center className="card-name">{name}</center> */}
                                    <span className="header-with-background">{name}</span>
                                </div>
                        </Grid.Column>
                        <Grid.Column className="iframe-wrapper" width={16}>
                        <iframe
                            src={embeded}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                         />
                        </Grid.Column>
                        <Grid.Column width={16}>
                        <div className='product-link' >
                            {related.map((item)=>(
                                <a className="hashtag" href={item.link}>{`#`+item.name+" "}</a>
                            ))}
                            {/* <a href="/product-list">{`#productCat`}</a>
                            <a href="/product/test">{`#productDetail`}</a> */}
                        </div>
                          
                        </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </Container>
          </ProductCardStyle>
      );
    }
}
  
const ProductCardStyle = styled.div `
.iframe-wrapper {
    position: relative;
    padding-bottom: 42.25% !important;
	padding-bottom: 56.25%;
	padding-top: 25px;
    height: 0;
}
.iframe-wrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
    height: 100%;
    padding-left: 1.5em;
    padding-right: 1.5em;
}
.product-card{
    border:1px white solid;
    border-radius:15px;
    box-shadow:4px 5px 8px 1px #DCDCDC;
    background: white;
    .card-image{
        position: relative;
        margin-bottom: 10px;
    }
    .hashtag{
        font-family: Helvethaica;
        color: #EA4200;
        font-size: 14px;
    }
    .header-with-background{
        background-image: url("https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/cooking-menu-header.png");
        background-size: 100% auto;
        color:white;
        font-family: Helvethaica;
        padding-left: 20px;
        padding-top:5px;
        padding-right: 50px;
        background-position: center center;
        background-repeat: no-repeat;
        padding-right: 25px;
        padding-bottom: 5px;
        font-size: 20px;
        white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    max-width: -webkit-fill-available;
    }
    .card-name{
        height: auto;
        width: auto;
        position: absolute;
        left: 40%;
        margin-left: -50px;
        top: 8px;
        color:white;
    }
    .product-link{
        text-align:right;
    }
}
.product-image{
    margin:auto !important;
}
`
ProductCookie.propTypes = {
    picture: PropTypes.string,
    name: PropTypes.string,
    embeded: PropTypes.string,
    related: PropTypes.object,
}
export default (ProductCookie);