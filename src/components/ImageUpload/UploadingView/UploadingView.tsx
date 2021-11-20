import React from "react";
import { useSpring, animated } from 'react-spring';
import './index.css';

const UploadingView = ( { error }: { error: boolean } ) => {
  const loadingStyle = useSpring( {
    config: {
      clamp: true,
      frequency: .5,
      tension: 150,
      friction: 20
    },
    loop: true,
    to: [
      { left: '77%' },
      { left: '0%' }
    ],
    from: { left: '0%' }
  } );

  if ( error ) {
    return (
      <div className='loading-container'>
        <h2>An Unexpected Error Has Occurred</h2>
        <p>We couldn&apos;t upload your image right now. Please try again later!</p>
      </div>
    );
  }

  return (
    <div className='loading-container'>
      <h2>Uploading...</h2>
      <div id="line-base">
        <animated.div style={loadingStyle} id="line"></animated.div>
      </div>
    </div>
  );
};

export { UploadingView };