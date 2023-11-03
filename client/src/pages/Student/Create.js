import React, { useState } from 'react';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [rollNumber, setRollNumber] = useState('');
    const [password, setPassword] = useState('');
    const [internshipName, setInternshipName] = useState('');
    const [internshipTime, setInternshipTime] = useState('');
    const [achievementDetails, setAchievementDetails] = useState('');
    const [achievementLevel, setAchievementLevel] = useState('');
    const [paperPublishedName, setPaperPublishedName] = useState('');
    const [certificationName, setCertificationName] = useState('');
    const [certificationTime, setCertificationTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // perform form validation and send updated details to server
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-semibold mb-8">Edit Student Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name" 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rollNumber">
                        Roll Number
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="rollNumber" 
                        type="text" 
                        placeholder="Roll Number" 
                        value={rollNumber} 
                        onChange={(e) => setRollNumber(e.target.value)}
                    />
                </div>
                
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipName">
                        Internship Name
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="internshipName" 
                        type="text" 
                        placeholder="Internship Name" 
                        value={internshipName} 
                        onChange={(e) => setInternshipName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="internshipTime">
                        Internship Time
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="internshipTime" 
                        type="text" 
                        placeholder="Internship Time" 
                        value={internshipTime} 
                        onChange={(e) => setInternshipTime(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievementDetails">
                        Achievement Details
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="achievementDetails" 
                        type="text" 
                        placeholder="Achievement Details" 
                        value={achievementDetails} 
                        onChange={(e) => setAchievementDetails(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="achievementLevel">
                        Achievement Level
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="achievementLevel" 
                        type="text" 
                        placeholder="Achievement Level" 
                        value={achievementLevel} 
                        onChange={(e) => setAchievementLevel(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                        Date
                    </label>
                    <input 
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="date" 
                        type="date" 
                        placeholder="Date" 
                        
                        
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                    
                </div>
            </form>
        </div>
    );
};

export default EditProfile;
