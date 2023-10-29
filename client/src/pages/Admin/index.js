
import AdminNavBar from "../../components/navBar/adminNavbar";
import React, { useState, useEffect } from "react";

const dummyAdminData = {
    name: "Admin User",
    email: "admin@example.com",
    contact: "123-456-7890",
    permissions: ["Manage Users", "Edit Content", "View Analytics"],
};

const AdminHome = () => {
    const [adminData, setAdminData] = useState(dummyAdminData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Simulate loading by setting a timeout
        setLoading(true);
        setTimeout(() => {
            setAdminData(dummyAdminData);
            setLoading(false);
        }, 2000); // Simulate a 2-second loading delay
    }, []);

    return (
        <div>
          <AdminNavBar/>
              <div className="p-8 bg-blue-200">
              
              <h1 className="text-4xl font-bold">Admin Home</h1>
              {loading ? (
                  <p>Loading...</p>
              ) : (
                  <div className="space-y-8">
                      <div className="bg-white p-4 rounded shadow-lg space-y-4">
                          <h2 className="text-2xl font-bold">Profile</h2>
                          <div className="space-y-2">
                              <p className="font-semibold">Name:</p>
                              <p>{adminData.name}</p>
                          </div>
                          <div className="space-y-2">
                              <p className="font-semibold">Email:</p>
                              <p>{adminData.email}</p>
                          </div>
                          <div className="space-y-2">
                              <p className="font-semibold">Contact:</p>
                              <p>{adminData.contact}</p>
                          </div>
                      </div>
                      <div className="bg-white p-4 rounded shadow-lg space-y-4">
                          <h2 className="text-2xl font-bold">Permissions</h2>
                          <ul className="list-disc list-inside">
                              {adminData.permissions.map((permission, index) => (
                                  <li key={index}>{permission}</li>
                              ))}
                          </ul>
                      </div>
                  </div>
              )}
          </div>
        </div>
    );
};

export default AdminHome;

