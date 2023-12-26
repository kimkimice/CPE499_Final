import React from "react";

function Home() {
  const centerStyle = {
    textAlign: 'center', 
    margin: 'auto', 
    width: '60%', 
    padding: '20px' 
  };
  return (
    <div style={centerStyle}>
      <h1>หน้าหลัก</h1>
      <p>สวัสดี</p>
      <img src="path-to-your-home-image.jpg" alt="รูปภาพหน้าหลัก"/>
    </div>
  );
}

export default Home;
