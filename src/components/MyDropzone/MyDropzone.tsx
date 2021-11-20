import React, { CSSProperties, useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import image from '../../assets/image.svg';

// Styling for the drag 'n drop
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',
  alignItems: 'center',
  width: '20rem',
  padding: '40px',
  borderWidth: 2,
  borderRadius: '12px',
  borderColor: '#97BEF4',
  borderStyle: 'dashed',
  backgroundColor: '#F6F8FB',
  color: '#bdbdbd',
  fontSize: '12px',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

interface UploadProps {
  upload: ( file: File ) => void;
}

const MyDropzone = ( { upload }: UploadProps ) => {
  const onDrop = useCallback( acceptedFiles => {
    upload( acceptedFiles[ 0 ] );
  }, [] );

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone(
    {
      onDrop,
      accept: [ 'image/jpeg', 'image/png' ],
      noClick: true,
    }
  );

  // Decides what style is used based on what kind of drag state is active
  const style = useMemo( () => ( {
    ...baseStyle,
    ...( isDragActive ? activeStyle : {} ),
    ...( isDragAccept ? acceptStyle : {} ),
    ...( isDragReject ? rejectStyle : {} )
  } ), [
    isDragActive,
    isDragReject,
    isDragAccept
  ] );

  const dragNDropContents = ( styling: CSSProperties ) => {
    if ( isDragActive && isDragAccept ) {
      return <p style={styling}>Drop the files here ...</p>;
    }
    if ( isDragActive && isDragReject ) {
      return <p style={styling}>This file will not be uploaded...</p>;
    }
    return <p style={styling}>Drag & Drop your image here</p>;
  };

  return (
    <div {...getRootProps( { style } )}>
      <input {...getInputProps()} />
      <img src={image} alt='Stock image of a photo' />
      {dragNDropContents( { marginTop: '3rem' } )}
    </div>
  );
};

export default MyDropzone;