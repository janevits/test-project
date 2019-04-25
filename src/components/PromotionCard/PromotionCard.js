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
const styled = require('styled-components').default;

const PromotionCardStyle = styled.div `
.promo-top{
    background:#E94200;
    box-shadow: 0px 0px 5px 4px #D1D1D1;
    .box{
        color:white;
        margin-left:0;
    }
}
.sub-header {
    font-family: Helvethaica;
    font-size: 18px;
}
.promo-img{
    width:275px;
    height:275px;
    margin:auto;
    min-width:275px;
    min-height:275px;
    max-width:275px;
    max-height:275px;
}
.promo-desc{
    background:white;
    min-height:75px;
    box-shadow: 0px 5px 5px 4px #D1D1D1;
    border-radius: 0px 0px 25px 25px !important;
    p{
        color:black !important;
    }
}
.icon-button{
    width: 20px;
    height: 20px;
    margin-right: 20px;
    top: -1px;
    display: inline-block !important;
}
`


class PromotionCard extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        const {dateFrom,dateTo,img,shortDesc} = this.props
        return (
            <PromotionCardStyle>
                <Container className="promo-card" >
                    <Grid>
                        <GridColumn className="promo-top" width={16}>
                            <div className="box">
                                <GridRow>
                                <Image
                                    className="promo-img"
                                    width={275}
                                    height={275}
                                    src={img}
                                    />
                                </GridRow>
                                <GridRow>
                                    <Image
                                        src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/promotion_logo/calendar.jpg'
                                        className='icon-button'
                                    />
                                    <span className='sub-header'>{dateFrom}- {dateTo}</span>
                                </GridRow>
                            </div>
                        </GridColumn>
                        <GridColumn className="promo-desc" width={16}>
                            <GridRow>
                                <p className='sub-header'>{shortDesc}</p>
                            </GridRow>
                        </GridColumn>
                    </Grid>
                </Container>
            </PromotionCardStyle>
        )
    }
}
export default PromotionCard;