import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";
import "./AdminDash.css";

function UserServices() {
  const [users, setUsers] = useState([]); // Initializing services as an empty array
  const [error, setError] = useState(null); // To handle any errors

  // Fetch services when the component mounts
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) {
          setError("Admin not authenticated. Please login again.");
          return;
        }

        const response = await axios.get("http://localhost:8000/admin/bookedServices", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.success) {
          setUsers(response.data.allServices); // Store the fetched services
        } else {
          setError("Failed to fetch services.");
        }
      } catch (error) {
        setError("Error fetching services: " + error.message);
        console.error("Error fetching services:", error);
      }
    };

    fetchServices();
  }, []);

  // Handle update of service status
  const handleUpdate = async (serviceId, newStatus) => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) {
        setError("Admin not authenticated. Please login again.");
        return;
      }

      const response = await axios.put(
        `http://localhost:8000/admin/updateService/${serviceId}`,
        { status: newStatus }, // Set the status based on dropdown selection
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        // Update the state with the new data
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user._id === serviceId ? { ...user, status: newStatus } : user
          )
        );
        alert(`Service status updated to '${newStatus}'`);
      } else {
        setError("Failed to update service status.");
      }
    } catch (error) {
      setError("Error updating service: " + error.message);
      console.error("Error updating service:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminName");
    window.location.href = "/admin"; // Redirect to admin login
  };

  return (
    <div id="ad">
      <div className="container">
        {/* Sidebar as separate component */}
        <AdminSidebar handleLogout={handleLogout} />

        {/* Main Content */}
        <main className="main-content">
          <header>
            <h1>Booked Services</h1>
          </header>

          {/* Table Section */}
          <section className="table-section">
            {error && <p className="error">{error}</p>} {/* Display error message if any */}
            <h2>Booked Services</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Service Type</th>
                  <th>Date Booked</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users && users.length > 0 ? (
                  users.map((user, index) => (
                    <tr key={user._id}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.service}</td>
                      <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                      <td>
                        <select
                          value={user.status}
                          onChange={(e) => handleUpdate(user._id, e.target.value)} // Call handleUpdate with the selected status
                        >
                          <option value="Booked">Booked</option>
                          <option value="Confirmed">Confirm Service</option>
                          <option value="Completed">Complete Service</option>
                          {/* Add more options if needed in the future */}
                        </select>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No services found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
}

export default UserServices;
