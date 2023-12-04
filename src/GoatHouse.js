import GoatComponent from "./Components/GoatComponent"
import Intern from "./Assets/intern.png"
import { Link } from "react-router-dom"

function GoatHouse () {
    return (
        <div className="house-page-container">
            <h1 className="choosen">CHỌN "NHÀ DÊ" CỦA BẠN</h1>
            <div className="house-container">
                <Link to={'/goathouse/1'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ TẬP SỰ"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>
                <Link to={'/goathouse/2'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ CAO THỦ"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>
                <Link to={'/goathouse/3'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ GỢI Ý"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>
                <Link to={'/goathouse/4'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ VẬT PHẨM"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>
                <Link to={'/goathouse/5'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ CỐ VẤN"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>
                <Link to={'/goathouse/6'} style={{ textDecoration: 'none' }}><GoatComponent image={Intern} heading={"DÊ ĐÁNH GIÁ"} descript={"Các thiết lập sẵn về nội thất, chức năng cơ bản và tùy chọn diện tích phòng phù hợp cho người mới bắt đầu."}/></Link>               
            </div>
        </div>
        
    )
}

export default GoatHouse