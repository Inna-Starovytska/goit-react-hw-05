import { Link } from "react-router-dom";
import style from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  return (
    <div>
      <h3 className={style.notFound}>NotFoundPage</h3>

      <p className={style.notFoundText}>
        Please use this link to go <Link to="/">back home</Link>
      </p>
    </div>
  );
}
