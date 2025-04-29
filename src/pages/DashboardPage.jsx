import React from "react";
import { useUsers } from "../hooks/useUsers";
import formatDate from '../utils/formatDate'



function DashboardPage() {
    const { data: usersData, isLoading, error } = useUsers();
  // console.log(usersData)
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        User Subscriptions
      </h1>

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
                        status === "Active"
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
