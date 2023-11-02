import React, { useState } from 'react';
import StudentNavBar from "../../components/navBar/studentNavbar";

const EditProfile = () => {
 const [profileData, setProfileData] = useState({ name: '', contactNumber: '' });

 const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
 };

 const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileData);
    // API call to update profile details
 };

 return (
    <div><StudentNavBar />
    <div className="w-full max-w-md mx-auto my-10">
      <h1 className="text-3xl font-bold mb-5">Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Name"
            value={profileData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block text-gray-700 text-sm font-bold mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Contact Number"
            value={profileData.contactNumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
    </div>
 );
};

export default EditProfile;