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
    Select,
    Row,
    Checkbox,
    Form
  } from 'semantic-ui-react';
import Loader from 'react-loader';
const styled = require('styled-components').default;
const emailjs = require('emailjs-com')
const RegisterPageStyle = styled.div `
.center-img{
    display: block;
    margin: auto;
}
.form-row {
    margin-top: 15px;
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
    font-size: 18px !important;
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
    padding-top: 5px !important;
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
    width: 60% !important;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 1.5px;
    display: inherit;
    box-shadow: 2px 2px 2px #e0e0e0;
    border-radius: 8px;
}
input{
    background: #ededed !important;
}
.selection{
    background: #ededed !important;
}
.main-box{
    background: white;
    padding: 15px;
    border-radius: 15px;
    box-shadow: 3px 5px #efefef;
}
`
class RegisterPage extends React.Component {
    // state = { name: '', email: '', submittedName: '', submittedEmail: false }
    state = { name: '',  
        lastname: '',
        address: '',
        district: '',
        subDistrict: '',
        province: '',
        postCode: '',
        email: '',
        tel: '',
        interest: '',
        submittedEmail: false,
        sendingEmail: false
        }

    componentDidMount() {
        emailjs.init("user_b1NVxdG83oiWf32wj1fW5");
    }
    handleChange = (e, { name, value }) => {
        // console.log(name,value)
        this.setState({ [name]: value })
    }
  
    handleSubmit = () => {
        this.sendFeedback('bkp_register')
    //   this.setState({ submittedName: name, submittedEmail: email })
    }

    sendFeedback (templateId) {
        this.setState({ sendingEmail: true })
        emailjs.send(
          'bkp',
          templateId,
          this.state
        )
          .then(res => {
            this.setState({ submittedEmail: true, sendingEmail: false })
          })
          // Handle errors here however you like, or use a React error boundary
          .catch(err => console.error('Failed to send feedback. Error: ', err))
      }
  
    render() {
      const { name,  
        lastname,
        address,
        district,
        subDistrict,
        province,
        postCode,
        email,
        tel,
        interest,
        sendingEmail
        } = this.state
  
      const genderOptions = [
        { key: 'mr.', text: 'นาย', value: 'mr' },
        { key: 'ms.', text: 'นางสาว', value: 'ms' },
        { key: 'mrs.', text: 'นาง', value: 'mrs' },
      ]
      return (
        <RegisterPageStyle>
            <Loader loaded={!sendingEmail}>
            <Container>
                <Grid>
                    <GridColumn>
                        <GridRow className='breadcrumb-row'>
                            <GridColumn className='breadcrumb'>
                                หน้าแรก > สมัครเป็นตัวแทน
                            </GridColumn>
                        </GridRow>
                    <GridRow>
                        <GridColumn>
                            <div className="header-row">
                                <span className="category-header category-header-text black-text">สมัครเป็นตัวแทนกับเรา</span>
                            </div>
                            <span className="sub-header">บีเคพี ไทยแลนด์เปิดรับสมัครตัวแทนจัดจำหน่าย สินค้าคุณภาพดี อร่อยทุกคำที่กัด เพียงกรอกข้อมูลด้านล่าง</span>
                        </GridColumn>
                    </GridRow>
                    <GridRow className='form-row'>
                        <GridColumn className='main-box'>
                        {!this.state.submittedEmail ? (<Form onSubmit={this.handleSubmit}>
                            <Form.Field
                                required
                                control={Select}
                                options={genderOptions}
                                label={{ children: 'คำนำหน้า', htmlFor: 'form-select-control-gender',className:'sub-header' }}
                                placeholder='Gender'
                                search
                                name="gender"
                                searchInput={{ id: 'form-select-control-gender' }}
                                onChange={this.handleChange} />
                            <Form.Input
                                required
                                name='name' 
                                label={{ children: 'ชื่อ',className:'sub-header' }}
                                value={name} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required
                                name='lastname' 
                                label={{ children: 'นามสกุล',className:'sub-header' }}
                                value={lastname} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required 
                                name='address' 
                                label={{ children: 'ที่อยู่อาศัย',className:'sub-header' }}
                                value={address} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required 
                                name='district' 
                                label={{ children: 'ตำบล',className:'sub-header' }}
                                value={district} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required   
                                name='subDistrict' 
                                label={{ children: 'อำเภอ',className:'sub-header' }}
                                value={subDistrict} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required 
                                name='province' 
                                label={{ children: 'จังหวัด',className:'sub-header' }}
                                value={province} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required 
                                name='postCode' 
                                label={{ children: 'รหัสไปรษณีย์',className:'sub-header' }}
                                value={postCode} 
                                onChange={this.handleChange} />
                            <Form.Input
                                required
                                label={{ children: 'อีเมล',className:'sub-header' }}
                                name='email'
                                value={email}
                                onChange={this.handleChange}
                            />
                            <Form.Input
                                required 
                                name='tel' 
                                label={{ children: 'เบอร์ติดต่อ',className:'sub-header' }}
                                value={tel} 
                                onChange={this.handleChange} />
                            {/* <Form.Field 
                                name='interest' 
                                label={{ children: 'สินค้าที่ท่านสนใจ',className:'sub-header' }}
                                value={interest} 
                                control='textarea'
                                rows='4' 
                                onChange={this.handleChange} /> */}
                            <Form.Input
                                required 
                                name='interest' 
                                label={{ children: 'สินค้าที่ท่านสนใจ',className:'sub-header' }}
                                value={interest} 
                                onChange={this.handleChange} />
                            <Form.Button content='ส่งข้อมูล' type='submit'/>
                        </Form>) : (
                            <Grid>
                                <GridRow>
                                    <GridColumn>
                                        <div className="category-header orange-text text-center">ได้รับข้อมูลเรียบร้อย</div>
                                    </GridColumn>
                                </GridRow>
                                <GridRow>
                                    <GridColumn>
                                        <div>
                                        <img
                                        width={90}
                                        height={90}
                                        className='center-img'
                                        src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/sended.png'/>
                                        </div>
                                    </GridColumn>
                                </GridRow>
                                <GridRow>
                                    <GridColumn>
                                        <div className="sub-header text-center">ได้รับข้อมูลของท่านเรียบร้อยแล้ว ทางเราจะติดต่อกลับโดยเร็วที่สุด ขอบคุณที่สนใจเป็นสมาชิกของเรา</div>
                                    </GridColumn>
                                </GridRow>
                                <GridRow>
                                    <GridColumn>
                                        <Button
                                            content='Click'
                                            onClick={() => {
                                                window.location.href = '/'
                                            }}>
                                            <span>กลับไปหน้าแรก</span>
                                        </Button>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                    )}
                        </GridColumn>
                        
                        
                    </GridRow>
                </GridColumn>
          </Grid>
        </Container>
            </Loader>
        </RegisterPageStyle>
      )
    }
  }
export default RegisterPage;