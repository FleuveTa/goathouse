import React from "react";
import PrimButton from "./PrimButton";

const Contact = () => {
  return (
    <div className="work2-section-container">
      <div className="work-section-text-container">
        <h1 className="primary-heading-work">
          Dễ dàng sử dụng với<br/>nhiều <span>chế độ</span>
        </h1>
        <p className="primary-text-work">
        Với thiết kế đơn giản, hiện đại, khách hàng có thể thuận tiện lựa chọn sử dụng nhiều chế độ từ đơn giản đến phức tạp. 
        <br/>
        <br/>
        Bạn có thể tha hồ sáng tạo những bản thiết kế riêng biệt đẹp mắt và phù hợp với nhu cầu mà không cần phải có kiến thức chuyên môn về thiết kế nội thất.
        </p>
        <PrimButton className="work-button"/>
      </div>
    </div>
  );
};

export default Contact;
