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
import PromotionCard from "../PromotionCard";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { getPromotions } from './PromotionsActions';
import { selectPromotions } from './PromotionsReducer';
const styled = require('styled-components').default;


const PromotionsPageStyle = styled.div `
.text-header{
    font-size:24pt;
    text-decoration: underline #C10000; 
}
.no-padding-top{
    padding-top:0 !important;
}
.text-header {
    font-family: Helvethaica;
    font-size: 24px;
    font-weight: bold;
}
`


class PromotionsPage extends React.Component {
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.props.getPromotions();
    }

    renderPromotionsCard = (promotions)=>{
        return promotions.map((promotion)=>(
            <Link href={`/promotion/${promotion.id}`}>
                <GridRow>
                    <PromotionCard
                    id={promotion.id}
                    dateFrom={promotion.date_from}
                    dateTo={promotion.date_to}
                    img={promotion.img}
                    shortDesc={promotion.short_desc}
                    />
                </GridRow>
            </Link>
        ))
    }
    render(){
        const {promotions} = this.props
        return (
            <PromotionsPageStyle>
                <Container>
                    <Grid>
                        <GridRow>
                            <p>หน้าแรก > โปรโมชั่น</p>
                        </GridRow>
                        <GridColumn width={16} className='no-padding-top'>
                            <GridRow>
                                <p className="text-header">ข่าวสารและกิจกรรม</p>
                            </GridRow>
                        </GridColumn>
                        <GridColumn width={16}>
                            {this.renderPromotionsCard(promotions)}
                        </GridColumn>
                    </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(PromotionsPage);