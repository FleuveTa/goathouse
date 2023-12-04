import React from "react";
import PrimButton from "./PrimButton";

const Testimonial = () => {
  return (
    <div className="monial-section-container">
      <div className="monial-section-text-container">
        <h1 className="primary-heading-monial">
          Thư viện mô hình 3D sẽ <span>liên tục<br/>cập nhật </span>các mô hình mới cho bạn
        </h1>
        <p className="primary-text-monial">
        Chúng tôi sẽ liên tục cập nhật thường xuyên thư viện mô hình 3D cho khách hàng để giúp bạn có thể tiếp cận được với những mẫu đồ nội thất, mẫu thiết kế nhà cửa mới nhất, phù hợp với xu hướng thị trường.
        <br/>
        <br/>
        Từ đó, khách hàng sẽ có nhiều lựa chọn hơn về mẫu mã, kiểu dáng, màu sắc của các sản phẩm nội thất, dễ dàng tìm kiếm và lựa chọn sản phẩm phù hợp với nhu cầu của mình.
        </p>
        <PrimButton className="monial-button"/>
      </div>
    </div>
  );
};

export default Testimonial;
