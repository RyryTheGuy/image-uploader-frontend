import React from 'react';
import './index.css';
import MyDropzone from '../MyDropzone/MyDropzone';
import { UploadingView } from './UploadingView/UploadingView';
import { SuccessfulUpload } from './SuccessfulUpload/SuccessfulUpload';
import imageService from '../../services/images';

const ImageUpload = () => {
  const [ isUploading, setIsUploading ] = React.useState<boolean>( false );
  const [ isUploaded, setIsUploaded ] = React.useState<boolean>( false );
  const [ isError, setIsError ] = React.useState<boolean>( false );
  const [ imageUrl, setImageUrl ] = React.useState<string>( '' );
  const hiddenFileInput = React.useRef<HTMLInputElement>( null );

  // Clicks the hidden input 
  const handleClick = () => {
    if ( hiddenFileInput.current ) hiddenFileInput.current.click();
  };

  // Hidden input's onChange event - uploads the file given to the input
  const handleChange = ( event: any ) => {
    if ( event.target.files.length > 0 ) {
      uploadImage( event.target.files[ 0 ] );
    }
  };

  // Upload function for when an image is drag 'n dropped or selected via input prompt
  const uploadImage = async ( file: File ) => {
    try {
      setIsUploading( true );
      setImageUrl( await imageService.sendImage( file ) );
      setIsUploading( false );
      setIsUploaded( true );
    } catch ( error ) {
      setIsError( true );
    }
  };

  if ( isUploading ) {
    return (
      <UploadingView error={isError} />
    );
  }

  if ( isUploaded ) {
    return (
      <SuccessfulUpload imageUrl={imageUrl} />
    );
  }

  return (
    <div className='container'>
      <h2 id='title'>Upload your image</h2>
      <p id='description'>File should be Jpeg, Png...</p>
      <MyDropzone upload={uploadImage} />
      <p id='or'>Or</p>
      <button className='btn-primary' onClick={handleClick}>Choose a file</button>
      <input type='file' ref={hiddenFileInput} accept='image/jpeg, image/png' onChange={( event ) => handleChange( event )} hidden />
    </div>
  );
};

export default ImageUpload;