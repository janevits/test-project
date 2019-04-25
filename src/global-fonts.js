import { injectGlobal } from 'styled-components';
import helvethaica from './theme/fonts/DB-Helvethaica-X.ttf';
// import rsuBoldWebfontSvg from 'assets/themes/samsung/fonts/rsu/rsu_bold-webfont-webfont.svg';
// import rsuBoldWebfontEot from 'assets/themes/samsung/fonts/rsu/rsu_bold-webfont-webfont.eot';
// import rsuBoldWebfontWoff from 'assets/themes/samsung/fonts/rsu/rsu_bold-webfont-webfont.woff';
// import rsuLightWebfontWoff2 from 'assets/themes/samsung/fonts/rsu/rsu_light-webfont-webfont.woff2';
// import rsuLightWebfontWoff from 'assets/themes/samsung/fonts/rsu/rsu_light-webfont-webfont.woff';
// import rsuLightWebfontSvg from 'assets/themes/samsung/fonts/rsu/rsu_light-webfont-webfont.svg';
// import rsuLightWebfontEot from 'assets/themes/samsung/fonts/rsu/rsu_light-webfont-webfont.eot';


/* eslint no-unused-expressions: 0 */
injectGlobal`
  
  @font-face {
      font-family: 'Helvethaica';
      src: url('Helvethaica');
      src: url('${helvethaica}') format('truetype');
      font-weight: normal;
      font-style: normal;
  
  }
 
`;
