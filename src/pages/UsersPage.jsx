import React, { useState } from "react";
import { useUsers,useDeleteUsers } from "../hooks/useUsers";
import LoadingSpinner from "../LoadingSpinner";

function UsersPage() {
  const { data: usersData, isLoading, error } = useUsers();
  const { mutateAsync } = useDeleteUsers();
  // console.log("users data", usersData.users);
  const handleDeleteClick = (user) => {
    if (confirm(`Are you sure you want to delete ${user.name}?`)) {
      // Perform delete logic here
      const userId = user?._id;
      console.log("Deleting user:", user._id);
      mutateAsync(userId)
      // Example: Call API to delete, then refresh the list
    }
  };
  if (isLoading) return <LoadingSpinner />;
  if (error) return <div>Failed to load users</div>;
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Users</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Plan</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {usersData?.users?.map((user) => (
              <tr
                key={user.id}
                className="border-b border-gray-200 hover:bg-gray-50"
              >
                <td className="py-3 px-6">{user.name}</td>
                <td className="py-3 px-6">{user.email}</td>
                <td className="py-3 px-6">
                  {user?.subscriptions.length > 0 ? user?.subscriptions[0]?.plan?.name: 'None'}
                </td>
                <td className="py-3 px-6 text-center">
                  <button
                    onClick={() => handleDeleteClick(user)}
                    className="bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-2 px-4 rounded-full transition duration-300"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersPage;
