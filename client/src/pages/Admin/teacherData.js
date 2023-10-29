import React from "react";
import { Link } from "react-router-dom";
import AdminNavBar from "../../components/navBar/adminNavbar";
import Footer from "../../components/footer";

const teacherData = [
    { name: "John Smith", branch: "Mathematics", identificationNumber: "T2022001" },
    { name: "Jane Johnson", branch: "Physics", identificationNumber: "T2022002" },
    // Add more teacher data here
];

const AdminTeacherData = () => {
    return (
        <div>
            <AdminNavBar />
            <div className="bg-gray-100 min-h-screen p-8">
                <h1 className="text-4xl font-bold underline mb-4">Recruiter Data</h1>
                <Link to="/" className="text-blue-600 hover:underline mb-4 block">Home</Link>

                <table className="table-auto w-full bg-white rounded-lg shadow">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Branch</th>
                            <th className="px-4 py-2">Identification Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacherData.map((teacher, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="px-4 py-2">{teacher.name}</td>
                                <td className="px-4 py-2">{teacher.branch}</td>
                                <td className="px-4 py-2">{teacher.identificationNumber}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminTeacherData;
