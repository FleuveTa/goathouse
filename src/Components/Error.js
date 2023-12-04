import { useRouteError } from "react-router-dom";
import HidingCat from "../Assets/b33.jpg"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
        <img src={HidingCat}/>
      <h1>Ối giời ơi!</h1>
      <p>Đường dẫn này không tồn tại.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}