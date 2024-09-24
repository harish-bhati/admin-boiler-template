import React from "react";


const Table = () => {
  return (
  <div className="table px-4 py-5 w-full">
    <table className="w-full border rounded-xl">
        <thead>
        <tr className="text-center border-b rounded-xl text-blue-dark bg-blue-verylight font-latoB">
                <th className="p-2">Project ID</th>
                <th>Project Name</th>
                <th>Location</th>
                <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        <tr className="text-center border-b text-[14px] font-latoR">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        <tr className="text-center border-b text-[14px] font-latoR">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        <tr className="text-center border-b text-[14px] font-latoR">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        <tr className="text-center border-b text-[14px] font-latoR">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        </tbody>
    </table>
  </div>
  );
};

export default Table;
