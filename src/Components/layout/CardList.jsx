import React from 'react'
import { productos } from '../../data/data.js'


export const CardList = () => {


    return (
        <div className="flex justify-center items-center min-h-screen  p-4">
            <div className="w-full max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xl font-bold tracking-tight">
                            <tr color="gray"
                                size="xl"
                                style={{
                                    color: 'rgba(108, 124, 92, 1)',
                                    margin: '10px',
                                    border: '2px solid rgba(108, 124, 92, 1)', // Borde de color
                                    borderRadius: '8px', // Borde redondeado

                                }}>
                                <th scope="col" className="px-6 py-3">Image</th>
                                <th scope="col" className="px-6 py-3">Product</th>
                                <th scope="col" className="px-6 py-3">Qty</th>
                                <th scope="col" className="px-6 py-3">Price</th>
                                <th scope="col" className="px-6 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto) => (
                                <tr key={producto.id} className="bg-white border-b hover:bg-gray-50">
                                    <td className="p-4">
                                        <img src={producto.image} className="w-16 md:w-24" alt={producto.name} />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900">{producto.name}</td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button className="h-6 w-6 p-1 border rounded-full hover:bg-gray-100">-</button>
                                            <input type="number" className="mx-2 w-12 border text-center" defaultValue={1} />
                                            <button className="h-6 w-6 p-1 border rounded-full hover:bg-gray-100">+</button>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 font-semibold text-gray-900">{producto.price}</td>
                                    <td className="px-6 py-4">
                                        <button className="text-red-600 hover:underline">Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};







