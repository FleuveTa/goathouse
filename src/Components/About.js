import React from "react";
import PrimButton from "./PrimButton";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-text-container">
        <h1 className="primary-heading-about">
          HƠN <span>1.000.000 MÔ HÌNH</span><br />NỘI THẤT ĐẾN TỪ<br />100 THƯƠNG HIỆU LỚN
        </h1>
        <p className="primary-text-about">
          Bạn có thể sử dụng thư viện các mô hình chất lượng cao, các công cụ thiết kế tích hợp và giải pháp vẽ 3D để thiết kế ngôi nhà trong mơ của mình
        </p>
        <PrimButton className="about-button"/>
      </div>
    </div>
  );
};

export default About;
