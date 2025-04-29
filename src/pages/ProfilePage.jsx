import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import EditProfileModal from "../components/editProfileModal"; // Import Modal
import { useUserProfile } from "../hooks/useUsers";
import LoadingSpinner from "../LoadingSpinner";
import formatDate from "../utils/formatDate";

const initialUser = {
  name: "John Doe",
  email: "john@example.com",
  plan: "Gold Plan",
  startDate: "2025-04-01",
  endDate: "2025-04-30",
  status: "Active",
};

function ProfilePage() {
  const { data: useUserData, isLoading, isError, error } = useUserProfile();

  const [user, setUser] = useState(useUserData);
  const [isEditing, setIsEditing] = useState(false);
  // console.log(useUserData);
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

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        My Profile
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProfileCard title="Name" value={useUserData?.data?.name} />
        <ProfileCard title="Email" value={useUserData?.data?.email} />
        <ProfileCard
          title="Subscribed Plan"
          value={useUserData?.data?.subscription?.planName}
        />
        <ProfileCard
          title="Subscription Status"
          value={useUserData?.data?.subscription?.status}
        />
        <ProfileCard
          title="Start Date"
          value={formatDate(useUserData?.data?.subscription?.startDate)}
        />
        <ProfileCard
          title="End Date"
          value={formatDate(useUserData?.data?.subscription?.endDate)}
        />
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={handleEditProfile}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
        >
          Edit Profile
        </button>

        <p className="text-gray-500 text-sm mt-4">Keep your profile updated</p>
      </div>

      {/* Edit Modal */}
      {isEditing && (
        <EditProfileModal
          user={useUserData}
          onClose={handleCloseModal}
          onSave={handleSaveProfile}
        />
      )}
    </div>
  );
}

export default ProfilePage;
