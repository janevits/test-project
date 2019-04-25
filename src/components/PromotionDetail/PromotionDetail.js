import React from 'react'
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
    Row,
  } from 'semantic-ui-react';
import _ from 'lodash';
import Slider from "react-slick";
import PromotionCard from "../PromotionCard";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link,Router } from 'react-router';
import { getPromotions } from '../PromotionsPage/PromotionsActions';
import { selectPromotions } from '../PromotionsPage/PromotionsReducer';
const styled = require('styled-components').default;


const PromotionsPageStyle = styled.div `
.text-header{
    font-family: Helvethaica;
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline #C10000; 
}
.text-header-bottom{
    font-family: Helvethaica;
    font-size: 24px;
    font-weight: bold;
    color: #EA4200;
}
.text-sub-header-bottom{
    font-family: Helvethaica;
    font-size: 21px;
}
.no-padding-top-bottom{
    padding-top:0 !important;
    padding-bottom:0 !important;
}
.promo-detail{
    margin: -1rem 1rem 1rem 1rem;
    border-radius:0px 0px 25px 25px;
    box-shadow: 0px 5px 5px 4px #D1D1D1;
    min-height:250px;
}
.promo-detail-img{
    margin:auto;
}
.promo-ref{
    position: absolute;
    bottom: 15px;
    right: 20px;
    max-width: 65%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.slider-relate-promo{
    margin:25px;
}
.news-promo{
    text-align:center;
    b{
        color:#EA4200;
        font-size:24px;
        line-height:1.5;
    }
    p{
        font-size:21px;
    }
}
.sub-header {
    font-family: Helvethaica;
    font-size: 18px;
}
.orange-text{
    color: #EA4200;
}
`

class LeftNavButton extends React.Component {
    render() {
      return <button {...this.props}>Next</button>  
    }
  }
class PromotionsDetail extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        const { promotions } = this.props
        if(promotions.length <= 0){
            this.props.getPromotions();
        }
    }

    renderRelatePromotions = (promotions) => {
        const settings = {
            infinite: true,
            slidesToShow: 1,
            arrows:true,
            speed:2000,
            duration:0,
          };
        return (
            <Slider className="slider-relate-promo" nextArrow={<LeftNavButton/>} {...settings}>
                {promotions.map((promotion)=>(
                    <Link href={`/promotion/${promotion.id}`}>
                                <PromotionCard
                                id={promotion.id}
                                dateFrom={promotion.date_from}
                                dateTo={promotion.date_to}
                                img={promotion.img}
                                shortDesc={promotion.short_desc}
                                />
                    </Link>
                ))}
            </Slider>

        )}
    render(){
        const id = this.props.params.id;
        const {promotions} = this.props
        const currentPromo = promotions.find((promo)=>(promo.id===id));
        if(promotions.length===0){
            return null;
        }
        const relatePromo = promotions.filter((promo)=>(promo.id!==id));
        const {
            name,
            img,
            dateTo,
            dateFrom,
            fullDesc,
            ref
        } = currentPromo
        return (
            <PromotionsPageStyle>
                <Container>
                    <Grid>
                        <GridRow>
                            <p>หน้าแรก > ข่าวสารและกิจกรรม > {name}</p>
                        </GridRow>
                        <GridColumn width={16} className='no-padding-top-bottom'>
                            <GridRow>
                                <p className="text-header">โปรโมชั่นพิเศษจากเรา</p>
                            </GridRow>
                        </GridColumn>
                    </Grid>
                    <Grid>
                        <GridRow>
                                <img className="promo-detail-img" width={365} height={365} src={img}/>
                        </GridRow>
                        <GridColumn className="promo-detail" width={16}>
                            <GridRow>
                                <i/>
                                <span className="sub-header">ระยะเวลากิจกรรม  | {dateFrom} - {dateTo}</span>
                            </GridRow>
                            <GridRow>
                                <b className="sub-header">{name}</b>
                                <p className="sub-header">{fullDesc}</p>
                            </GridRow>
                            <GridRow className="promo-ref">
                               <span className="sub-header"> <span className='orange-text'>ที่มา: </span> <a href={ref}>{ref}</a> </span> 
                            </GridRow>
                        </GridColumn>
                    </Grid>
                    <Grid>
                        <GridColumn className="news-promo" width={16}>
                            <GridRow>
                                <b className='text-header-bottom'>ข่าวสารและกิจกรรมเพิ่มเติม</b>
                            </GridRow>
                            <GridRow className='no-padding-top-bottom'>
                                <p className='text-sub-header-bottom'>ไม่พลาดทุกการอัพเดทได้ที่นี้</p>
                            </GridRow>
                        </GridColumn>
                    </Grid>
                    <div className="relate-promo">
                        {this.renderRelatePromotions(relatePromo)}
                    </div>
                </Container>
            </PromotionsPageStyle>
        )
    }
}

const mapStateToProps = (state) => ({
    promotions: selectPromotions(state),
});

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({
        getPromotions,
    }, dispatch)
  );

export default connect(mapStateToProps, mapDispatchToProps)(PromotionsDetail);
// export default PromotionsDetail;