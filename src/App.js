import React from 'react'
import ChatWidget from './components/ChatWidget';
import image from './assets/img/bg_image.jpg';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      margin: "0",
    }}>
      <h1 style={{
        textAlign: 'center',
        color: 'white',
        fontSize: '6rem',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
      }}>
        HotelBot
      </h1>
      <ChatWidget />
    </div>
  );
}

export default App;
