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
import ProductCookie from'../ProductCookie/ProductCookie.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCooking } from './CookingPageAction';
import { selectCookingList } from './CookingPageReducer';
// import { getCategory,getProductList } from './ProductListActions';
// import { selectProductList,selectCategory } from './ProductListReducer';

const styled = require('styled-components').default;
class CookingPage extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getCooking();
    }

    // componentWillMount(){
    //     this.props.getCategory();
    // }

    // componentWillReceiveProps(nextProps){
    //     if(this.props.category.length === 0 && nextProps.category.length !== 0){
    //         this.setState({currentCategory: nextProps.category[0]});
    //         this.props.getProductList(nextProps.category[0]);
    //     }
    // }

    resize = () => this.forceUpdate()

    componentDidMount() {
        window.addEventListener('resize', this.resize)
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    render() {
        const cookingList = _.sortBy(this.props.cookingList, (o) => {
            return o.type;
        });
        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 6,
            slidesToScroll: 1
          };
        return (
        <CookiePageStyle>
                <Container>
                        {/* <Grid className="page-bg"> */}
                        <Grid>
                            <GridRow className='breadcrumb-row'>
                                <GridColumn>
                                  <div>
                                    Cookie Page BANNER
                                  </div>
                                </GridColumn>
                            </GridRow>
                            <GridRow className="header-row">
                                <GridColumn>
                                  <span className="page-header">
                                    สร้างสรรค์เมนูกับผลิตภัณฑ์ บีเคพี
                                  </span>
                                </GridColumn>
                            </GridRow>
                            {cookingList.map((item)=>(
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
                          
                        </Grid>
                </Container>
        </CookiePageStyle>
        );
    }
}
  
const CookiePageStyle = styled.div `
    .icon-menu {
        width: 50px !important;
        height: 65px !important;
    }
    .header-row{
        padding-bottom: 10px !important;
    }
    .page-header{
        font-size: 24px;
        font-family: Helvethaica;
        border-bottom: solid 2px #EA4200;
        font-weight: bold;
        margin-left: 15px;
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
        background-image: url("https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/bg.jpg");
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
// ProductList.propTypes = {
//     productList: PropTypes.object,
//     getProductList: PropTypes.func,
//     category: PropTypes.object,
//     getCategory: PropTypes.func,
// }

// const mapStateToProps = (state) => ({
//     category: selectCategory(state),
//     productList: selectProductList(state),
// });

// const mapDispatchToProps = (dispatch) => (
//     bindActionCreators({
//         getProductList,
//         getCategory,
//     }, dispatch)
//   );

// export default (CookingPage);
ProductCookie.propTypes = {
    cookingList: PropTypes.object,
}

const mapStateToProps = (state) => ({
    cookingList: selectCookingList(state),
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getCooking,
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(CookingPage);