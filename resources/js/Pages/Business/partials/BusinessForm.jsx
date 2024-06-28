// Components/BusinessForm.jsx

import React from 'react';

const BusinessForm = ({ currentBusiness, handleChange, handleSubmit, isEditing ,errors}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                    <input type="text" name="name" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required="" value={currentBusiness.name} onChange={handleChange}/>
                    {errors.name}
                </div>
          
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="description" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                    <input type="text" name="description" id="description" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Description" required="" value={currentBusiness.description} onChange={handleChange}/>
                    {errors.description}
                </div>
                <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="contact" className="text-sm font-medium text-gray-900 block mb-2">Contact</label>
                    <input type="text" name="contact" id="contact" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required="" value={currentBusiness.contact} onChange={handleChange}/>
                    {errors.contact}
                </div>
            </div>
            <div className="pt-6">
                <button className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">{isEditing ? 'Update Business' : 'Add Business'}</button>
            </div>
        </form>
    );
};

export default BusinessForm;
