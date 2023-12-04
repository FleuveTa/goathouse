import React from "react";
import PrimButton from "./PrimButton";


const Mobile = () => {
  return (
    <div className="monial2-section-container">
      <div className="monial-section-text-container">
        <h1 className="primary-heading-monial">
          <span>Ứng dụng trên điện thoại</span> sẽ sát cánh <br/>cùng bạn mọi lúc mọi nơi
        </h1>
        <p className="primary-text-monial">
        Ứng dụng Home by GOAT trên điện thoại sẽ sát cánh cùng bạn, mang lại cho người dùng nhiều tiện ích, giúp bạn tham khảo mẫu mã, thiết kế, mua sắm đồ dùng mọi lúc mọi nơi. 
        <br/>
        <br/>
        Ứng dụng cho phép người dùng sử dụng các tính năng như trên Website, thuận tiện chia sẻ với bạn bè, người thân. Với sự phát triển của công nghệ, ứng dụng thiết kế đồ nội thất, tư vấn thiết kế nhà cửa Home by GOAT trên điện thoại sẽ luôn được cập nhật với nhiều tiện ích khác nhau, mang lại trải nghiệm tối nhất dành cho người dùng.
        </p>
        <PrimButton className="monial-button"/>
      </div>
    </div>
  );
};

export default Mobile;