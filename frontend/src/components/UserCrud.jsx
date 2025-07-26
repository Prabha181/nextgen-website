import React, { useState, useEffect } from "react";
import axios from "axios";

const UserCrud = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const handleSubmit = async () => {
    if (!name || !email) return alert("Fill all fields");

    if (editId) {
      await axios.put(`http://localhost:5000/api/users/${editId}`, { name, email });
    } else {
      await axios.post("http://localhost:5000/api/users", { name, email });
    }

    setName("");
    setEmail("");
    setEditId(null);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium">Name</label>
          <input
            className="w-full mt-1 px-3 py-2 border rounded-md"
            placeholder="Enter full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full mt-1 px-3 py-2 border rounded-md"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-end">
          <button
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            onClick={handleSubmit}
          >
            {editId ? "Update" : "Add"}
          </button>
        </div>
      </div>

      <table className="w-full text-sm text-left border-collapse mt-4">
        <thead className="bg-blue-100 text-gray-700">
          <tr>
            <th className="px-4 py-2 border">#</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Email</th>
            <th className="px-4 py-2 border text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u, i) => (
            <tr key={u.id} className="bg-white hover:bg-gray-50 transition">
              <td className="px-4 py-2 border">{i + 1}</td>
              <td className="px-4 py-2 border">{u.name}</td>
              <td className="px-4 py-2 border">{u.email}</td>
              <td className="px-4 py-2 border text-center space-x-2">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded"
                  onClick={() => handleEdit(u)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(u.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserCrud;
