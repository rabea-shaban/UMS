import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaPen } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phone: string;
  birthDate: string;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users");
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch users");
    }
  };

  // Handel delete
  // Modal state
  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const [userData, setUserData] = useState<any>({});

  const handleClose = () => setShow(false);
  const handleShow = (user: any) => {
    setShow(true);
    setUserId(user.id);
    setUserData(user);
  };
  const deleteUser = async () => {
    try {
      await axios.delete(`https://dummyjson.com/users/${userId}`);
      toast.success("Deleted successfully!");
      handleClose();
      // Refresh the user list
      fetchUsers();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">User List</h2>
      <button
        className="btn btn-primary mb-3"
        onClick={() => navigate("/dashboard/AddUser")}
      >
        Add User
      </button>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Birth Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>{user.birthDate}</td>
                <td>
                  <FaPen
                    size={20}
                    className="text-warning cursor-pointer"
                    onClick={() =>
                      navigate("/dashboard/AddUser", { state: { user } })
                    }
                  />

                  <MdDelete
                    onClick={() => handleShow(user)}
                    className="text-warning"
                    size={25}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={8} className="text-center">
                No users available
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {userData.firstName}{" "}
          {userData.lastName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            No
          </Button>
          <Button variant="danger" onClick={deleteUser}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
