import React, { PureComponent, PropTypes } from 'react';
import { Link } from 'react-router';
import {
  Container,
  Grid,
  Image,
  Icon,
  Form,
} from 'semantic-ui-react'

const styled = require('styled-components').default;


class NavbarMobile extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state={
      menuOpen:false,
      searchOpen: false,
      query: '',
    }
  }
  
  handleMenuClick() {
    this.setState({searchOpen: false});
    this.setState({menuOpen:!this.state.menuOpen});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  handleSearchClick() {
    this.setState({menuOpen: false});
    this.setState({searchOpen:!this.state.searchOpen});
  }
  
  handleSearchApply() {
    this.setState({searchOpen: false});
  }

  handleInputChange = (e) => {
    this.setState({
      query: e.target.value
    });
  }

  handleFormSubmit = () => {
    console.log('search:', this.state.query);
    window.location = '/product-search?search='+this.state.query
  }
  
  render() {
    const menu = [
      {val:'หน้าแรก',
      link:'/'},
      {val:'สร้างสรรค์เมนูอร่อยกับผลิตภัณฑ์ บีเคพี',
      link:'/cooking'},
      {val:'ข่าวสารและกิจกรรม',
      link:'/promotions'},
      {val:'รับสมัครตัวแทน',
      link:'/register'},
    ]
    const menuItems = menu.map(({val,link},index)=>{
      return (
        <Link href={link}>
          <MenuItem 
            key={index} 
            delay={`${index * 0.1}s`}
            onClick={()=>{this.handleLinkClick();}}>
            {val}
            </MenuItem>
        </Link>
        )
    });
    const showDisplay = this.state.menuOpen ? 'block' : 'none';
    const searchDisplay = this.state.searchOpen ? 'block' : 'none';
    return (
      <NavbarMobileStyle>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2} className='icon-column' textAlign='left'>
                <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
              </Grid.Column>
              <Grid.Column width={12}>
                <Image 
                  centered
                  className='logo'
                  src='https://s3-ap-southeast-1.amazonaws.com/www.bkpthailand.com/logo.png'
                  onClick={()=>window.location = '/'}
                />
              </Grid.Column>
              <Grid.Column width={2} className='icon-column' textAlign='right'>
                <Icon name={searchDisplay === 'block' ? 'close' : 'search'} onClick={()=>this.handleSearchClick()} inverted/>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row style={{display:`${showDisplay}`}}>
              <Menu open={this.state.menuOpen}>
                  {menuItems}
              </Menu>
            </Grid.Row>
            <Grid.Row style={{display:`${searchDisplay}`}}>
              <Menu open={this.state.searchOpen}>
                <Form className="search-bar" onSubmit={() => this.handleFormSubmit()}>
                  <Form.Input 
                    fluid 
                    action={{ icon: 'search' }} 
                    placeholder='Search...' 
                    value={this.state.query} 
                    onChange={this.handleInputChange}
                  />
                </Form>
              </Menu>
            </Grid.Row>
          </Grid>
  
        </Container>
        </NavbarMobileStyle>
    )
  }
}

const NavbarMobileStyle = styled.div `
.search-bar{
  padding-left: 1em;
  padding-right: 1em;
  margin-bottom: 1em;
}
.icon-column{
  margin-top: auto !important;
  margin-bottom:auto !important;
}
.ui.grid {
  .row {
    padding-bottom: 0;
  }
}
.logo{
  width: 80px;
}
`


NavbarMobile.propTypes = {
};

NavbarMobile.defaultProps = {
};

NavbarMobile.contextTypes = {
};


/* Menu.jsx */
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
    }
  }
    
  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  render(){
    const styles={
      container: {
        top: 0,
        left: 0,
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        background: '#C21000',
        opacity: 0.95,
        color: '#fafafa',
        transition: 'height 0.3s ease',
        zIndex: 2,
      },
    }
    return(
      <div style={styles.container}>
        {
          this.state.open?
            <div style={styles.menuList}>
              {this.props.children}
            </div>:null
        }
      </div>
    )
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      hover:false,
    }
  }
  
  handleHover(){
    this.setState({hover:!this.state.hover});
  }
  
  render(){
    const styles={
      container: {
        animation: '1s appear forwards',
        animationDelay:this.props.delay,
      },
      menuItem:{
        fontFamily:`'Open Sans', sans-serif`,
        fontSize: '1.2rem',
        padding: '1rem 0',
        margin: '0 5%',
        cursor: 'pointer',
        color: this.state.hover? 'gray':'#fafafa',
        transition: 'color 0.2s ease-in-out',
        animation: '0.5s slideIn forwards',
        animationDelay:this.props.delay,

      },
      line: {
        width: '90%',
        height: '1px',
        background: 'gray',
        margin: '0 auto',
        animation: '0.5s shrink forwards',
        animationDelay:this.props.delay,
        
      }
    }
    console.log('this.props,.children',this.props.children)
    return(
      <div style={styles.container}>
        <div 
          style={styles.menuItem} 
          onMouseEnter={()=>{this.handleHover();}} 
          onMouseLeave={()=>{this.handleHover();}}
          onClick={this.props.onClick}
        >
          <p> {this.props.children}  </p>
        </div>
      <div style={styles.line}/>
    </div>  
    )
  }
}


/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: this.props.open? this.props.open:false,
      color: this.props.color? this.props.color:'black',
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.open !== this.state.open){
      this.setState({open:nextProps.open});
    }
  }
  
  handleClick(){
  this.setState({open:!this.state.open});
  }
  
  render(){
    const styles = {
      container: {
        height: '32px',
        width: '32px',
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      },
      line: {
        height: '2px',
        width: '20px',
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)':'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0: 1,
        transform: this.state.open ? 'translateX(-16px)':'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },       
    }
    return(
      <div style={styles.container} 
        onClick={this.props.onClick ? this.props.onClick: 
          ()=> {this.handleClick();}}>
        <div style={{...styles.line,...styles.lineTop}}/>
        <div style={{...styles.line,...styles.lineMiddle}}/>
        <div style={{...styles.line,...styles.lineBottom}}/>
      </div>
    )
  }
}

export default NavbarMobile;
