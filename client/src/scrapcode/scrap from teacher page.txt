import React from "react";
import { Link } from "react-router-dom";

const TeacherHome = () => {
    return (
        <div>
            <h1 className="text-7xl font-bold underline">Teacher Home</h1>
            <Link to="/">Home</Link>
        </div>
    )
}

export default TeacherHome;