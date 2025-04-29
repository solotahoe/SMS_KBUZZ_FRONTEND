import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import EditProfileModal from "../components/editProfileModal"; // Import Modal

const initialUser = {
  name: "John Doe",
  email: "john@example.com",
  plan: "Gold Plan",
  startDate: "2025-04-01",
  endDate: "2025-04-30",
  status: "Active",
};

function ProfilePage() {
  const [user, setUser] = useState(initialUser);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveProfile = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        My Profile
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard title="Name" value={user.name} />
        <ProfileCard title="Email" value={user.email} />
        <ProfileCard title="Subscribed Plan" value={user.plan} />
        <ProfileCard title="Subscription Status" value={user.status} />
        <ProfileCard title="Start Date" value={user.startDate} />
        <ProfileCard title="End Date" value={user.endDate} />
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleEditProfile}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Edit Profile
        </button>

        <p className="text-gray-500 text-sm mt-4">
          Keep your profile updated to enjoy seamless service.
        </p>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditProfileModal
          user={user}
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}

export default ProfilePage;
