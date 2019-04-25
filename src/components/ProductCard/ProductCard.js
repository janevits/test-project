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
  Button,
  Icon,
  Image,
  Divider,
  Header,
  List,
  Dropdown
} from 'semantic-ui-react';
import {Cookies} from 'react-cookie'

import _ from 'lodash';

const styled = require('styled-components').default;


const CardContent = ({name,description,sku})=>{
    return (
        <CardContentStyle>
            <div>
            <p className="card-name">{name}</p>
            </div>
            <Divider />
            <div>
                <p className="card-desc"> {description}</p>
            </div>     
            <div  className="more-detail-box">
                <a className="more-detail"><span>More Detail</span></a>
            </div>
        </CardContentStyle>
    )
}
const CardContentStyle = styled.div `
.card-name{
    font-size:18pt;
    font-weight:bold;
    font-family: Helvethaica;
}
.card-desc{
    font-size:14pt;
    font-family: Helvethaica;
    word-break:break-word;
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

class ProductCard extends React.Component {
    handleOnRedirect = (sku) => {
        const height = window.scrollY
        const cookies = new Cookies();
        cookies.set('prvHeight',height)
        
        window.location.href = '/product/'+sku
    }
    render() {
    const {name="ProductName" ,description="xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" ,sku="1"} = this.props
      return (
          <ProductCardStyle>
              <Container>
                  <Grid className="product-card">
                      <Grid.Row
                        onClick={()=>this.handleOnRedirect(sku)}
                        >
                        <Grid.Column  className="product-image"  width={7}>
                            <Image src={this.props.picture} />
                        </Grid.Column>
                        <Grid.Column width={9}>
                           <CardContent
                           name={name}
                           description={description}
                           sku={sku}
                           />
                        </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </Container>
          </ProductCardStyle>
      );
    }
}
  
const ProductCardStyle = styled.div `
.product-card{
    border:1px white solid;
    border-radius:15px;
    box-shadow:4px 5px 8px 1px #DCDCDC;
    background: white;
}
.product-image{
    margin:auto !important;
}
`
ProductCard.propTypes = {
    picture: PropTypes.string,
}
export default (ProductCard);