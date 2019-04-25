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
import Header from '../Header/Header.js';
import ProductCard from'../ProductCard/ProductCard.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCategory,getProductList } from '../ProductList/ProductListActions';
import { selectProductList,selectCategory } from '../ProductList/ProductListReducer';
import ProductCookie from'../ProductCookie/ProductCookie.js';
import { getCooking } from '../CookingPage/CookingPageAction';
import { selectCookingList } from '../CookingPage/CookingPageReducer';
import { getPromotions } from '../PromotionsPage/PromotionsActions';
import { selectPromotions } from '../PromotionsPage/PromotionsReducer';

const styled = require('styled-components').default;
class HomePage extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getCategory();
        this.props.getCooking();
        this.props.getPromotions();
    }

    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }
    onHandleRedirect= (i) => () => {
        window.location.href = '/promotion/'+i
    }
    renderBanner= () => {
        const imgs = []
        const limit = this.props.promotions.length;
        let i = 1
        try{
            while (i <= limit) {
                imgs.push(
                    <Image 
                    height={150}
                    src={`https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/promotion/${i}.jpg`}
                    onError={(e)=>{
                    }}
                    onClick={this.onHandleRedirect(i)}
                    />
                )
                i++;
            }
        }
        catch(e){
            console.log('e',e)
            i = 100;
        }
        console.log(imgs);
        return imgs
    }

    render() {
        const {category, cookingList} = this.props;
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
          };
          const bannerSetting={
            dots:true,
            infinite: true,
            autoPlay:true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        return (
        <HomePageStyle>
            {/* <Header/> */}
                <Container>
                        <Grid>
                            <GridRow className='breadcrumb-row'>
                                <GridColumn>
                                  <div>
                                  <Slider {...bannerSetting}>
                                    {this.renderBanner()}
                                  </Slider>
                                  </div>
                                </GridColumn>
                            </GridRow>
                            <GridRow>
                                <GridColumn>
                                    <div className="header-row">
                                        <span className="category-header category-header-text black-text">สร้างสรรค์เมนูกับผลิตภัณฑ์ บีเคพี</span>
                                    </div>
                                    <span className="sub-header">ให้เราช่วยคุณสร้างสรรค์เมนูสุดอร่อยจากผลิตภัณฑ์ของเรา</span>
                                </GridColumn>
                            </GridRow>
                            {_.takeRight(cookingList, 3).map((item)=>(
                                    <GridRow className="row-data-card">
                                         <GridColumn>
                                         <ProductCookie 
                                            name={item.name}
                                            embeded={item.embeded}
                                            related={item.related}
                                            />
                                         </GridColumn>
                                    </GridRow>
                            ))}
                            <GridRow>
                                <GridColumn>
                                <Button
                                    content='Click'
                                    onClick={() => {
                                        window.location.href = '/cooking'
                                    }}>
                                    {/* <Icon name="cart" inverted/> */}
                                    
                                    <span><Image
                                        src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/home_logo/addition_icon.png'
                                        className='icon-button'
                                    />เมนูเพิ่มเติม</span>
                                    {/* <Image wrapped size='tiny' src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/order-button.png' /> */}
                                </Button>
                                </GridColumn>
                            </GridRow>
                            <GridRow className="category-row">
                                <GridColumn>
                                    <p className="category-header">
                                        <span className="category-header-text">ผลิตภัณฑ์ของเรา</span>
                                    </p>
                                    <Slider {...settings}>
                                    {category.map((item)=>(
                                        <Image 
                                            src={'https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/home_logo/'+item+'.png'}
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
                                <GridColumn>
                                <div>
                                    Seller Banner
                                </div>
                                <div className="category-header black-text text-center space-bottom">
                                    มาร่วมเป็น<span className="orange-text">ส่วนหนึ่งกับเรา</span>
                                </div>
                                <div className="sub-header black-text text-center">บีเคพี เปิดรับตัวแทนจำหน่ายสินค้า</div>
                                <div className="sub-header orange-text text-center space-bottom">คุณภาพดี อร่อยทุกคำที่กัด</div>
                                <Button
                                    content='Click'
                                    onClick={() => {
                                        window.location.href = '/register'
                                    }}>
                                    <span>สมัครเป็นตัวแทน</span>
                                    {/* <Image wrapped size='tiny' src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/order-button.png' /> */}
                                </Button>
                                </GridColumn>
                            </GridRow>

                        </Grid>
                </Container>
        </HomePageStyle>
        );
    }
}
  
const HomePageStyle = styled.div `
    .icon-button{
        width: 20px;
        height: 20px;
        margin-right: 4px;
        top: -1px;
        display: inline-block !important;
    }
    .black-text{
        color: black !important;
        font-weight: bold;
    }
    .orange-text{
        color: #EA4200 !important;
    }
    .text-center{
        text-align: center;
    }
    .space-bottom{
        margin-bottom: 5px;
    }
    .sub-header {
        font-family: Helvethaica;
        font-size: 18px;
        font-weight: bold;
    }
    .header-row{
        margin-bottom: 10px;
    }
    .category-header-text {
        border-bottom: 2px solid #E94200;
    }
    .category-header {
        font-family: Helvethaica;
        font-size: 24px;
        color: white;
    }
    .category-row{
        background-color: #301F07;
    }
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
        margin-bottom:20px !important;
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
        width: 60% !important;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 1.5px;
        display: inherit;
        box-shadow: 2px 2px 2px #e0e0e0;
        border-radius: 30px;
    }
`
HomePage.propTypes = {
    productList: PropTypes.object,
    getProductList: PropTypes.func,
    category: PropTypes.object,
    getCategory: PropTypes.func,
    cookingList: PropTypes.object,
}

const mapStateToProps = (state) => ({
    category: selectCategory(state),
    productList: selectProductList(state),
    cookingList: selectCookingList(state),
    promotions: selectPromotions(state),
});



const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getProductList,
        getCategory,
        getCooking,
        getPromotions,
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);