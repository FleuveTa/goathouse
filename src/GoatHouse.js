import GoatComponent from "./Components/GoatComponent"
import Intern from "./Assets/intern.png"
import Master from "./Assets/master.png"
import Hinter from "./Assets/hinter.png"
import Item from "./Assets/items.png"
import Adviser from "./Assets/adviser.png"
import Judger from "./Assets/judger.png"
import { Link } from "react-router-dom"

function GoatHouse () {
    return (
        <div className="house-page-container">
            <h1 className="choosen">CHỌN "NHÀ DÊ" CỦA BẠN</h1>
            <div className="house-container">
                <Link to={'/goathouse/1'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ TẬP SỰ"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>
                <Link to={'/goathouse/2'} style={{ textDecoration: 'none' }}><GoatComponent image={Master} heading={"DÊ CAO THỦ"} descript={"Dành cho dân có kinh nghiệm trong nghề thiết kế nhà cửa, mong muốn tự sáng tạo không gian riêng của chính mình."}/></Link>
                <Link to={'/goathouse/3'} style={{ textDecoration: 'none' }}><GoatComponent image={Hinter} heading={"DÊ GỢI Ý"} descript={"Với những mẫu thiết kế nội thất có sẵn, bạn có thể tham khảo và lựa chọn mẫu thiết kế phù hợp."}/></Link>
                <Link to={'/goathouse/4'} style={{ textDecoration: 'none' }}><GoatComponent image={Item} heading={"DÊ VẬT PHẨM"} descript={"Cung cấp các sản phẩm nội thất chất lượng với nhiều phân giá hợp lí, dễ dàng lựa chọn từ nhiều nhãn hàng khác nhau."}/></Link>
                <Link to={'/goathouse/5'} style={{ textDecoration: 'none' }}><GoatComponent image={Adviser} heading={"DÊ CỐ VẤN"} descript={"Gợi ý các kiến trúc sư, cố vấn nội thất cao cấp để bạn được tư vấn những thiết kế phù hợp nhất."}/></Link>
                <Link to={'/goathouse/6'} style={{ textDecoration: 'none' }}><GoatComponent image={Judger} heading={"DÊ ĐÁNH GIÁ"} descript={"Các bài viết đánh giá, so sánh và trao đổi giữa người dùng và chuyên gia về đồ dùng nội thất một cách chính xác nhất!"}/></Link>               
            </div>
        </div>
    )
}

export default GoatHouse