import React from 'react';
import PropTypes from 'prop-types';
import {
  Menu,
  Container,
  Grid,
  GridColumn,
  GridRow,
  Segment,
  Button,
  Icon,
  Image,
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader';
import ProductImage from '../ProductImage/ProductImage';
import { getProductDetail } from './ProductDetailActions';
import { selectProductDetail } from './ProductDetailReducer';
import {animateScroll} from 'react-scroll';
animateScroll.scrollTo(500);
const styled = require('styled-components').default;
const CONST = {
    firstTab:'ส่วนประกอบ',
    secondTab:'ข้อมูลโภชนาการ',
    thirdTab: 'สถานที่จัดจำหน่าย' 
}

class ProductDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            activeItem: "ส่วนประกอบ",
            productData: null,
        })
    }
    componentWillMount() {
        this.props.getProductDetail(this.props.params.sku);
        // const data = _.find(this.state.data, {productId: parseInt(this.props.params.sku)})
        // this.setState({productData: data ? data : { th: {} } });
    }

    renderContent = (content) => {
        return (
            <div>
            {
                Object.keys(content).map((data)=>{
                    if(data==='price'){
                        return <div/>  
                    }
                    if (content[data]){
                        return   (
                            <div className='product-detail'>
                                {/* <div className="header-section">{data}</div>  */}
                                <div className="header-section">{content[data].label}</div>
                                <div className='data-section'>
                                {data === "distributions" ? 
                                    (content[data].data.map((logo) => {
                                        return <img className="logo" src={logo} />
                                    }))
                                     :
                                    (<span>{content[data].data}</span>)
                                }
                                </div>
                            </div>)
                    }else{
                        return ('')
                    }
                })
            }
            </div>
        )

    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    clickRedirectButton = () => window.open('https://www.cpfreshmartshop.com')

    render() {
        const { activeItem } = this.state;
        const { productDetail } = this.props;
        // const { productName , breadCrumb, picUrl } = this.state.productData;
        // const {firstTab,secondTab,thirdTab,fouthTab} = this.state.productData.th;
      return (
        <ProductDetailStyle>
            <Loader loaded={productDetail !== 'requesting'}>
                <Container>
                    {productDetail.productName ? (
                        <Grid>
                        <GridRow className='breadcrumb-row'>
                            <GridColumn className='breadcrumb'>
                                {productDetail.breadCrumb}
                            </GridColumn>
                        </GridRow>
                        <GridRow className='no-padding'>
                            <GridColumn className='product-name'>
                                {productDetail.productName}
                            </GridColumn>
                        </GridRow>
                        <GridRow className='product-image-row'>
                            <GridColumn>   
                                <ProductImage
                                    imgs={productDetail.picUrl}
                                />
                            </GridColumn>
                        </GridRow>
                        <GridRow className='data-row'>
                            <GridColumn>
                                {/* <Tab menu={{ secondary: true, pointing: true  }} panes={this.renderPanes()} /> */}
                                <Menu pointing secondary fluid widths={3}>
                                    <Menu.Item 
                                        name='ส่วนประกอบ'
                                        active={activeItem === CONST.firstTab} 
                                        onClick={this.handleItemClick} 
                                    />
                                    <Menu.Item
                                        name='ข้อมูลโภชนาการ'
                                        active={activeItem ===CONST.secondTab}
                                        onClick={this.handleItemClick}
                                    />
                                    <Menu.Item
                                        name='สถานที่จัดจำหน่าย'
                                        active={activeItem ===CONST.thirdTab}
                                        onClick={this.handleItemClick}
                                    />
                                </Menu>

                                <Segment>
                                    {activeItem === CONST.firstTab && (
                                            this.renderContent(productDetail.th.firstTab)
                                    )
                                    }
                                    {activeItem === CONST.secondTab  && (
                                            this.renderContent(productDetail.th.secondTab)
                                    )
                                    }
                                    {activeItem === CONST.thirdTab  && (
                                            this.renderContent(productDetail.th.fouthTab)
                                    )
                                    }
                                </Segment>
                            </GridColumn>
                        </GridRow>
                        <GridRow>
                            <GridColumn>
                            <Button
                                disabled
                                content='Click'
                                onClick={this.clickRedirectButton}>
                                <Icon name="cart" inverted/>
                                <span>สั่งซื้อสินค้า</span>
                            </Button>
                            </GridColumn>
                        </GridRow>
                    </Grid>
                    ) :
                    (
                        <Grid>
                            <GridRow className='breadcrumb-row'>
                                <GridColumn>
                                    {productDetail === 'requesting' ? 'Loading' : 'Not Found'}
                                </GridColumn>
                            </GridRow>
                        </Grid>
                    )}
                </Container>
            </Loader>
        </ProductDetailStyle>
        );
    }
}
  
const ProductDetailStyle = styled.div `
    padding-top: 27px;
    margin-bottom: -190px;
    .breadcrumb-row {
        padding-top: 6px !important;
        padding-bottom: 3px !important;
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
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        letter-spacing: 1.5px;
        display: inherit;
        box-shadow: 2px 2px 2px #e0e0e0;
    }
`
ProductDetail.propTypes = {
    productDetail: PropTypes.object,
    getProductDetail: PropTypes.func,
}

const mapStateToProps = (state) => ({
    productDetail: selectProductDetail(state),
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getProductDetail,
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);