import React from 'react';
import Slider from "react-slick";
import {Image, Modal, Header} from 'semantic-ui-react'
const styled = require('styled-components').default;

const renderImages = (imgs) => {
  return 
}
const ProductImage = ({ imgs = [] }) => {
  // var settings = {
  //   // customPaging: function(i) {
  //   //   return (
  //   //     <a>
  //   //       <img src={imgs[i]} />
  //   //     </a>
  //   //   );
  //   // },
  //   dots: true,
  //   dotsClass: "slick-dots slick-thumb",
  //   // infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };
    if ('ontouchstart' in document.documentElement) {
      document.body.style.cursor = 'pointer';
    }
    return (
      <WithStyle>
        <Modal trigger={<img src={imgs[0]} className='packshot'/>} basic>
          <Modal.Content image>
            <Image wrapped size='medium' src={imgs[0]} />
          </Modal.Content>
        </Modal>
        <Modal trigger={<img src={imgs[1]} className='foodshot'/>} basic>
          <Modal.Content image>
            <Image wrapped size='medium' src={imgs[1]} />
          </Modal.Content>
        </Modal>
      </WithStyle>
    );
};

const WithStyle = styled.div`
  @media all and (orientation:portrait) {
    img {
      height : 26vh;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  @media all and (orientation:landscape) {
    img {
      height : 65vh;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .packshot {
    width: 30%;
    margin-right: 10px;
  }
  .foodshot {
    width: 65%;
  }
  .slick-slide {
    height : 26vh;
    div {
      div {
        img {
          height : 26vh;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
`;

export default ProductImage;
