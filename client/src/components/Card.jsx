import React from "react";

const Card = ({ title, content,color }) => {
  return (
    <div style={{backgroundColor:color}} className="rounded-xl p-3 w-96 shadow-lg hover:shadow-green-200 border-r">
      <div >
        <h2 className="card-title font-bold text-lg text-white">{title}</h2>

        <p className="line-clamp-2 text-white">{content}</p>

        <div className=" justify-end mt-4 ">
          <button className="border px-3 py-1 rounded-md hover:bg-red-500 hover:text-white transition">
            Delete
          </button>
          <button className="border px-3 py-1 rounded-md hover:bg-blue-500 hover:text-white transition">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
