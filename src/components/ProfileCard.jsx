import React from "react";

function ProfileCard({ title, value }) {
  return (
    <div className="flex flex-col p-4 border rounded-lg shadow-sm bg-white">
      <span className="text-gray-500 text-xs uppercase tracking-wider">{title}</span>
      <span className="text-gray-800 font-semibold">{value}</span>
    </div>
  );
}

export default ProfileCard;
