import React from "react";
import { useUsers } from "../hooks/useUsers";
import formatDate from '../utils/formatDate';
import { useUserProfile } from "../hooks/useUsers";




function DashboardPage() {
    const { data: usersData, isLoading, error } = useUsers();
      const { data: info } = useUserProfile();
      console.log(info)
      const isActive = info?.data?.subscription.status === "active";    
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        User Subscriptions
      </h1>
      {isActive ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Dear User!</strong>
        <span className="block sm:inline ml-2">Your current susbscription is valid untill {formatDate(info?.data?.subscription?.endDate)}</span>
      </div>
      
      ) : (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <strong className="font-bold">Dear user!</strong>
  <span className="block sm:inline ml-2">
  You don't have a valid subscription. Please click{" "}
  <Link to="/home/plans" className="text-blue-600 underline hover:text-blue-800">
    here
  </Link>{" "}
  to subscribe to a plan.
</span>
</div>

      )}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Plan</th>
              <th className="py-3 px-6 text-left">Start Date</th>
              <th className="py-3 px-6 text-left">End Date</th>
              <th className="py-3 px-6 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm font-light">
            {usersData?.users?.map((user) => {
              const status = user?.subscriptions[0]?.status;
              return (
                <tr
                  key={user.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <td className="py-3 px-6">{user.name}</td>
                  <td className="py-3 px-6">{user.email}</td>
                  <td className="py-3 px-6">{user?.subscriptions.length > 0 ? user?.subscriptions[0]?.plan?.name: 'N/A'}</td>
                  <td className="py-3 px-6">{ user?.subscriptions.length > 0 ? formatDate(user?.subscriptions[0]?.startDate): 'N/A' }</td>
                  <td className="py-3 px-6">{user?.subscriptions.length > 0 ? formatDate(user?.subscriptions[0]?.endDate): 'N/A'}</td>
                  <td className="py-3 px-6">
                 { user?.subscriptions.length > 0 ?   <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user?.subscriptions[0]?.status === "active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {status}
                    </span> : 'N/A'}
                  
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardPage;
