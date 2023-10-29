import React from "react";
import { Link } from "react-router-dom";

const studentData = [
    { name: "John Doe", rollNo: "2021001", yearOfStudy: "3rd Year", branch: "Computer Science" },
    { name: "Jane Doe", rollNo: "2021002", yearOfStudy: "2nd Year", branch: "Electrical Engineering" },
    // Add more student data here
];

const AdminStudentData = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <h1 className="text-4xl font-bold underline mb-4">Student Data</h1>
            <Link to="/" className="text-blue-600 hover:underline mb-4 block">Home</Link>

            <table className="table-auto w-full bg-white rounded-lg shadow">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Roll No</th>
                        <th className="px-4 py-2">Year of Study</th>
                        <th className="px-4 py-2">Branch</th>
                    </tr>
                </thead>
                <tbody>
                    {studentData.map((student, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                            <td className="px-4 py-2">{student.name}</td>
                            <td className="px-4 py-2">{student.rollNo}</td>
                            <td className="px-4 py-2">{student.yearOfStudy}</td>
                            <td className="px-4 py-2">{student.branch}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminStudentData;
