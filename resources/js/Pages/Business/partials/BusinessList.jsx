// Components/BusinessList.jsx

import React from 'react';
import { Link } from '@inertiajs/react';

const BusinessList = ({ business, openModal, handleDelete }) => {
    return (
        business ?
        <table className="min-w-full divide-y divide-gray-200">
            <thead>
                <tr>
                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex cursor-pointer">
                            <span className="mr-2">Name</span>
                        </div>
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex cursor-pointer">
                            <span className="mr-2">Description</span>
                        </div>
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex cursor-pointer">
                            <span className="mr-2">Contact</span>
                        </div>
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex cursor-pointer">
                            <span className="mr-2">Action</span>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {business.map(business => (
                    <tr key={business.id}>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <Link href={`/business/${business.id}`} className="text-blue-500 hover:text-blue-700">{business.name}</Link>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <p>{business.description}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <p>{business.contact}</p>
                        </td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5">
                            <div className="flex space-x-4">
                                <button onClick={() => openModal(business)} className="text-blue-500 hover:text-blue-600 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                    </svg>
                                    <p>Edit</p>
                                </button>
                                <button onClick={() => handleDelete(business.id)} className="text-red-500 hover:text-red-600 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                    </svg>
                                    <p>Delete</p>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        : "No rows"
    );
};

export default BusinessList;
