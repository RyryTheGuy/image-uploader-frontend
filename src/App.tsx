import React from "react";
import ImageUpload from "./components/ImageUpload/ImageUpload";

const App = () => {
  const footerStyle = {
    fontFamily: 'Montserrat',
    position: 'absolute' as const,
    left: '50%',
    bottom: '0',
    transform: 'translate(-50%, -50%)',
    color: '#A9A9A9',
  };

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  };

  return (
    <div style={containerStyle}>
      <ImageUpload />

      <footer style={footerStyle}>
        created by RyryTheGuy - devChallenges.io
      </footer>
    </div>
  );
};

export default App;