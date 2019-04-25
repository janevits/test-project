import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
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
} from 'semantic-ui-react';
import _ from 'lodash';
import {Cookies} from 'react-cookie'

import ProductCard from'../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategory,getProductList } from './ProductListActions';
import { selectProductList,selectCategory } from './ProductListReducer';
import {animateScroll} from 'react-scroll';

const styled = require('styled-components').default;

class ProductList extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            currentCategory: "",
            scollHeigth : 0,
        })
    }
    componentWillMount(){
        this.props.getCategory();
    }
    componentDidMount(){
        const cookies = new Cookies();
        const height = cookies.get('prvHeight') ? cookies.get('prvHeight') : 0 ; 
        this.setState({
            scollHeigth:height
        })
        cookies.remove('prvHeight');
    }

    componentWillReceiveProps(nextProps){
        if(this.props.category.length === 0 && nextProps.category.length !== 0){
            if (this.props.location.query.type){
                this.setState({currentCategory: this.props.location.query.type});
                this.props.getProductList(this.props.location.query.type);
            } else {
                this.setState({currentCategory: nextProps.category[0]});
                this.props.getProductList(nextProps.category[0]);
            }   
        }
    }
    componentDidUpdate(){
        const {scollHeigth} = this.state
        animateScroll.scrollTo(scollHeigth);
    }
    render() {
        console.log('render')
        const {productList,category} = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
          };
          const currCat = this.state.currentCategory;
          const catNameThai = {
            sausage: 'ไส้กรอก',
            bologna: 'โบโลน่า',
            meat_ball: 'ลูกชิ้น',
            sauce: 'ซอสปรุงรส',
            rte: 'อาหารพร้อมทาน',
            drink: 'เครื่องดื่ม'
          }
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
                            <GridRow className="seperate-bottom">
                                <GridColumn>
                                    <Slider {...settings}>
                                    {category.map((item)=>(
                                        <Image 
                                            src={'https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/logo/'+item+'.png'}
                                            onClick={() => {
                                                // this.setState({currentCategory: item});
                                                window.location.href = '/product-list?type='+item
                                                // this.props.getProductList(item);
                                            }}
                                            className='icon-menu'
                                        />
                                    ))}
                                    </Slider>
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn className='header-name'>
                                    <span className="header-text">ผลิตภัณฑ์{catNameThai[currCat]} ตรา บีเคพี</span>
                                </GridColumn>
                            </GridRow>
                            {productList.map((item)=>(
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
    .icon-menu {
        width: 45px !important;
        height: 65px !important;
    }
    .seperate-bottom{
        border-bottom: 0.5px solid rgba(34,36,38,.15);
    }
    .header-name {
        font-family: Helvethaica;
        font-size: 24px;
        font-weight: bold;
    }
    .header-text {
        margin-left: 15px;
        text-decoration: underline;
        text-decoration-color: #C21000;
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
ProductList.propTypes = {
    productList: PropTypes.object,
    getProductList: PropTypes.func,
    category: PropTypes.object,
    getCategory: PropTypes.func,
}

const mapStateToProps = (state) => ({
    category: selectCategory(state),
    productList: selectProductList(state),
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getProductList,
        getCategory,
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);