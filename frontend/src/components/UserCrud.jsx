import React, { useState, useEffect } from "react";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../services/userService";
import { useNavigate } from "react-router-dom";

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    const isLoggedIn = localStorage.getItem("user");
    if (!isLoggedIn) navigate("/");
  }, []);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    editingId
      ? await updateUser(editingId, form)
      : await createUser(form);

    setForm({ name: "", email: "" });
    setEditingId(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setForm(user);
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <>
      {/* Form */}
      <form className="mb-4" onSubmit={handleSubmit}>
        <div className="row g-2 align-items-end">
          <div className="col-md-5">
            <label className="form-label">Name</label>
            <input
              className="form-control"
              placeholder="Enter full name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email address"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
            />
          </div>
          <div className="col-md-2">
            <button
              type="submit"
              className={`btn btn-${editingId ? "warning" : "primary"} w-100`}
            >
              {editingId ? "Update" : "Add"}
            </button>
          </div>
        </div>
      </form>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-hover table-bordered align-middle">
          <thead className="table-primary">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="text-center">
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center text-muted">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserCrud;
