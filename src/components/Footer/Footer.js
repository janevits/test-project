import React, { PureComponent, PropTypes } from 'react';
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
const styled = require('styled-components').default;

class Footer extends PureComponent {
  render() {
    return (
      /* TODO:PBond fix css */
      <FooterStyle>
      <div className="main-page-footer">
      <Container>
          <Grid className="grid-layout-footer">
            <Grid.Row>
                <Grid.Column width={6}>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column>
                                <p className="menu-header">บีเคพี ไทยแลนด์</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/">หน้าแรก</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/cooking">สร้างสรรค์เมนูกับผลิตภัณฑ์ บีเคพี</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/promotions">ข่าวสารและกิจกรรม</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/register">รับสมัครตัวแทน</a></p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={6}>
                    <Grid>
                        <Grid.Row> 
                            <Grid.Column>
                                <p className="menu-header">ผลิตภัณฑ์ บีเคพี</p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/product-list?type=sausage">ไส้กรอก</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/product-list?type=bologna">โบโลน่า</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/product-list?type=meat_ball">ลูกชิ้น</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/product-list?type=sauce">ซอสปรุงรส</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/product-list?type=drink">เครื่องดื่ม</a></p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='no-padding'> 
                            <Grid.Column>
                                <p><a href="/product-list?type=rte">อาหารพร้อมทาน</a></p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Grid.Column>
                <Grid.Column width={4}>
                <Image 
                  centered
                  className='footer-logo logo-footer'
                  src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/logo.png'
                  onClick={()=>window.location = '/'}
                />
                <Image 
                  centered
                  className='footer-logo logo-footer no-padding-top'
                  src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/home_logo/halal.png'
                  onClick={()=>window.location = '/'}
                />
                </Grid.Column>
            </Grid.Row>
          </Grid>
      </Container>
      </div>
      </FooterStyle>
    );
  }
}
const FooterStyle = styled.div `
  a{
      color: #808080;
  }
  .main-page-footer {
    background-color: black;
    position: absolute;
    width:100%;
    height: 205px;
    bottom: -50px;
    font-family:Helvethaica;
    color:#808080;
    font-size:12pt;
  }
  .footer-logo{
      padding-top:50%;
  }
  .logo-footer{
    max-width: 70px !important;
    left: -10px;
  }
  .no-padding-top{
    padding-top: 0px;
  }
  .no-padding{
    padding-top: 0 !important;
    padding-bottom: 0 !important;
    }
  .grid-layout-footer{
      padding:15px 20px 0px 20px;
  }
  .menu-header{
    color:#FFFFFF;
  }
`
Footer.propTypes = {
};

Footer.defaultProps = {
};

Footer.contextTypes = {};

export default Footer;
