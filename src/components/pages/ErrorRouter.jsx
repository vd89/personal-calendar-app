import { useRouteError } from "react-router-dom";
import '../../styles/error.css'
export default function ErrorRouter() {
  const error = useRouteError();
  return (

    <div className="container container__error">
      <div className="text">
        <h1>Page Not Found</h1>
        <p>We can't seem to find the page you're looking for.
          {error.message};
        </p>
      </div>
    </div>
  );
}