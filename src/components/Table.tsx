import React from "react";


const Table = () => {
  return (
  <div className="table px-4 py-5 w-full">
    <table className="w-full border rounded-xl">
        <tr className="text-center border-b rounded-xl">
                <th className="p-2">Project ID</th>
                <th>Project Name</th>
                <th>Location</th>
                <th>Actions</th>
        </tr>
        <tr className="text-center border-b text-[14px]">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        <tr className="text-center border-b text-[14px]">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        <tr className="text-center border-b text-[14px]">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
        <tr className="text-center border-b text-[14px]">
                <td className="p-2">TIL-001</td>
                <td>Luxury Apartment Bathroom Tiling</td>
                <td>Downtown City center, California</td>
                <td>Assign Worker</td>
        </tr>
    </table>
  </div>
  );
};

export default Table;
