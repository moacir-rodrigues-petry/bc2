const HomePage = () => {
  return (
    <div className="container main">
      <h1 className="page-title">Welcome to User Management</h1>
      <div className="card">
        <p>
          This application allows you to view and manage user data. Navigate to
          the Users page to see a list of all users.
        </p>
        <a href="/users" className="btn">
          View Users
        </a>
      </div>
    </div>
  );
};

export default HomePage;
