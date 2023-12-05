import React from "react";
import Navbar from "./Navbar";
import PrimButton from "./PrimButton";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            TRỞ THÀNH <span>"GOAT"</span><br/>KHI THIẾT KẾ CHÍNH<br />NGÔI NHÀ CỦA BẠN
          </h1>
          <p className="primary-text">
            Chỉ mất 30 phút cho mỗi thiết kế và 03 giây để lưu.
          </p>
          <PrimButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
