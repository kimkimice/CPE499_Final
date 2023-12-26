import React from "react";


function About() {
  const centerStyle = {
    textAlign: 'center', 
    margin: 'auto', 
    width: '60%', 
    padding: '20px' 
  };

  return (
    <div style={centerStyle}>
      <h1>แนะนำตัวเอง</h1>
      <p>ชื่อยศสรัล นวลนันตา</p>
      <p>ชื่อเล่น: ไอซ์</p>
      <p>อายุ: 21 ปี</p>
      <p>วันเกิด: 20/02/45</p>
      <img src="path-to-your-about-image.jpg" alt="รูปภาพหน้าหลัก"/>
    </div>
  );
}


export default About;
