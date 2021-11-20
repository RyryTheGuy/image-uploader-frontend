import React from "react";
import ReactToolTip from 'react-tooltip';
import './index.css';

const SuccessfulUpload = ( { imageUrl }: { imageUrl: string } ) => {
  const imageUrlInput = React.useRef<HTMLInputElement>( null );

  const copyToClipboard = () => {
    if ( imageUrlInput.current ) {
      navigator.clipboard.writeText( imageUrlInput.current.value );
    }
  };

  return (
    <div>
      <div className='container'>
        <i className="fas fa-check-circle fa-3x" style={{ color: 'green', margin: '.5rem 0' }}></i>
        <h2>Uploaded Successfully!</h2>
        <div id='uploadedImageContainer'>
          <img
            id='uploadedImage'
            src={imageUrl}
          />
        </div>
        <div id='imageLink'>
          <input
            type='text'
            disabled
            value={imageUrl}
            ref={imageUrlInput}

          />
          <button className='btn-primary' data-tip='Copied!'>Copy Link</button>
        </div>
      </div>
      <ReactToolTip type='dark' place='top' effect='solid' event='click' eventOff='mouseleave' delayHide={1000} afterShow={() => copyToClipboard()} />
    </div>
  );
};

export { SuccessfulUpload };