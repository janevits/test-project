import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Image,
} from 'semantic-ui-react';
import ProductCard from'../ProductCard/ProductCard.js';
import Loader from 'react-loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProductListSearch } from './ProductSearchAction';
import { selectProductListSearch } from './ProductSearchReducer';

const _ = require('lodash');
const styled = require('styled-components').default;
class ProductSearch extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getProductListSearch();
    }

    render() {
        const {productList} = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
          };
        const matchRuleShort = (str, rule) => {
            return new RegExp("^" + rule.split("*").join(".*") + "$").test(str);
        }
        const query = this.props.location.query.search;
        const result = _.filter(productList, function(o) {
            return matchRuleShort(o.productName, "*"+query+"*")
        });
        return (
        <ProductDetailStyle>
            {/* <Header/> */}
                <Container>
                        <Grid>
                            <GridRow className='breadcrumb-row'>
                                <GridColumn>
                                  <div>
                                    LEVEL C BANNER
                                  </div>
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                  <div className='search-label'>
                                    Search Result For : {this.props.location.query.search}
                                  </div>
                                </GridColumn>
                            </GridRow>
                            
                            {result.map((item)=>(
                                    <GridRow className="row-data-card">
                                         <GridColumn>
                                         <ProductCard 
                                            name={item.productName}
                                            description={item.slogan}
                                            sku={item.productId}
                                            picture={item.picUrl[0]}/>
                                         </GridColumn>
                                    </GridRow>
                            ))}
                          
                        </Grid>
                </Container>
        </ProductDetailStyle>
        );
    }
}
  
const ProductDetailStyle = styled.div `
    .search-label{
        font-size: 18pt;
        font-weight: bold;
        font-family: Helvethaica;
    }
    .icon-menu {
        width: 50px !important;
        height: 65px !important;
    }
    .icon-menu:focus {
        outline: 0px !important;
    }
    .row-data-card{
        margin-top:10px;
    }
    .breadcrumb-row {
        padding-top: 18px !important;
        padding-bottom: 3px !important;
    }
    .page-bg {
        background: white !important;
    }
    .no-padding {
        padding: 0 !important;
    }
    .product-image-row{
        padding-top: 10px !important;
        padding-bottom: 0 !important;
    }
    .product-name {
        font-family: Helvethaica;
        font-size: 21px;
        font-weight: bold;
        color: darkblue
    }
    .ui.pointing.menu {
        .item {
            font-family: Helvethaica;
            font-size: 18px;
            padding-bottom: 3px;
        }
        .item.active {
            border-color: #C21000 !important;
            border-radius: 0;
        }
    }
    .breadcrumb {
        font-family: Helvethaica;
        font-size: 14px;
    }
    .product-detail {
        font-family: Helvethaica;
        :not(:last-child) {
            padding-bottom: 7px;
        }
        .header-section{
            font-weight:bold;
            font-size: 18px;
            border-left: 1px solid #C21000;
            padding-left 10px;
        }
        .data-section{
            font-size: 16px;
            margin-top: 5px;
            .logo{
                max-width: 70px;
            }
        }
    }
    .row-card{
        margin-top:20px !important;
        padding: 0 10px !important;
    }
    .row.data-row {
        padding-top : 0;
        padding-bottom: 0;
        margin-top: -10px;
    }
    .ui.segment {
        height: 30vh;
        overflow-x: scroll;
        ::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
        box-shadow: 1px 1px 1px #e0e0e0;
    }
    .ui.button {
        background-color: #C21000;
        color: white;
        font-family: Helvethaica;
        width: 95% !important;
        margin-left: 5px;
        margin-right: 5px;
        letter-spacing: 1.5px;
        display: inherit;
        box-shadow: 2px 2px 2px #e0e0e0;
    }
`
ProductSearch.propTypes = {
    productList: PropTypes.object,
    getProductList: PropTypes.func,
}

const mapStateToProps = (state) => ({
    productList: selectProductListSearch(state),
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getProductListSearch,
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);