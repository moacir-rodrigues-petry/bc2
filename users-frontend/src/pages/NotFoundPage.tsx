import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container main">
      <div className="card" style={{ textAlign: "center" }}>
        <h1 className="page-title">404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="btn">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
