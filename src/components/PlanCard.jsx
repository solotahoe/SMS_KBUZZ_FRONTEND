// src/components/PlanCard.jsx

import React from "react";

function PlanCard({ name, price, duration, onSubscribe }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow">
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-700">{name}</h2>
        <p className="text-gray-500 mb-2">
          <span className="font-bold text-lg">${price}</span> / plan
        </p>
        <p className="text-gray-400 mb-6">{duration}</p>
      </div>

      <button
        className="mt-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors"
        onClick={onSubscribe}
      >
        Subscribe
      </button>
    </div>
  );
}

export default PlanCard;
