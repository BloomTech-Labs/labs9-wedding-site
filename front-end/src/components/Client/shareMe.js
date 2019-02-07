import React from 'react';

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    EmailShareButton,
    PinterestShareButton,
    TumblrShareButton,
  } from 'react-share';

  import {
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    EmailIcon,
    PinterestIcon,
    TumblrIcon,
  } from 'react-share';

//   import {
//     FacebookShareCount,
//     PinterestShareCount,
//     TumblrShareCount,
//   } from 'react-share';

  import './shareMe.css';

//   import image from '../Main/images/waves.jpg';

  const ShareMe = (props) => {
      const shareURL= `https://www.vbeloved.com/${props.userData.weddingID}/invite`;
      const image= 'https://images.unsplash.com/photo-1513521523607-ba30a1159755?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80';
      return ( 
          <div>
          <div className='share-buttons'>
           <FacebookShareButton
                url={shareURL}
                className="button" 
                >
                <FacebookIcon
                  size={32}
                  round={true} />
            </FacebookShareButton> 
            <TwitterShareButton
                url={shareURL}
                className="button" 
                >
                <TwitterIcon
                  size={32}
                  round={true} />
            </TwitterShareButton> 
            <WhatsappShareButton
                url={shareURL}
                className="button" 
                >
                <WhatsappIcon
                  size={32}
                  round={true} />
            </WhatsappShareButton> 
            <EmailShareButton
                url={shareURL}
                className="button" 
                >
                <EmailIcon
                  size={32}
                  round={true} />
            </EmailShareButton> 
            <PinterestShareButton
                url={shareURL}
                className="button" 
                >
                <PinterestIcon
                  size={32}
                  round={true}
                  media={image}/>
            </PinterestShareButton> 
            <TumblrShareButton
                url={shareURL}
                className="button" 
                >
                <TumblrIcon
                  size={32}
                  round={true} />
            </TumblrShareButton> 
          </div>
          </div>
       );
  }
   
  export default ShareMe;