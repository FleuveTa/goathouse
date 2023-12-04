import React from "react";
import PrimButton from "./PrimButton";

const Work = () => {
  return (
    <div className="work-section-container">
      <div className="work-section-text-container">
        <h1 className="primary-heading-work">
          Mô hình 3D <span>chính xác với kích cỡ</span><br />của sản phẩm ngoài đời thực
        </h1>
        <p className="primary-text-work">
          Trong thiết kế nội thất, việc mô phỏng không gian sống là một bước vô cùng quan trọng, giúp bạn có thể hình dung được sản phẩm nội thất sẽ trông như thế nào khi đặt trong không gian của mình. Mô hình 3D có thể được xoay, phóng to, thu nhỏ để khách hàng có thể quan sát từ nhiều góc độ khác nhau và hoàn toàn đúng như tỉ lệ ở ngoài đời thực.
        <br/>
        <br/>
        Chúng tôi còn giúp bạn dễ dàng so sánh kích thước, màu sắc, kiểu dáng của các sản phẩm nội thất khác nhau. Điều này giúp bạn đưa ra quyết định nhanh chóng và chính xác hơn, từ đó tiết kiệm thời gian và chi phí cho quá trình thiết kế và thi công nội thất.
        </p>
        <PrimButton className="work-button"/>
      </div>
    </div>
  );
};

export default Work;
