import React from "react";
import AdminNavBar from "../../components/navBar/adminNavbar";

const AdminHome = () => {
  return (
    <div>
      <AdminNavBar />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <h1 className="text-4xl font-bold text-center">
          Welcome to the Admin Page
        </h1>
      </div>
    </div>
  );
};

export default AdminHome;
