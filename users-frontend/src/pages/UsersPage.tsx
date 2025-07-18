import { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { fetchUsers } from "../services/userService";
import type { User } from "../types/User";

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const data = await fetchUsers();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch users. Please try again later.");
        console.error("Error fetching users:", err);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  return (
    <div className="container main">
      <h1 className="page-title">Users</h1>
      <div className="card">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message={error} />
        ) : users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <UserTable users={users} />
        )}
      </div>
    </div>
  );
};

export default UsersPage;
