import { Link } from "react-router-dom"
const PrimButton = () => {
    return (
        <Link to={'/goathouse'} style={{ textDecoration: 'none' }}><button className="primary-button">BẮT ĐẦU TỰ THIẾT KẾ <br/>NGÔI NHÀ CỦA BẠN!</button></Link>
    )
}
export default PrimButton